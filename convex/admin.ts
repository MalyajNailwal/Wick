import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all pending approval requests (admin only)
export const getPendingApprovals = query({
  args: { adminId: v.id("users") },
  handler: async (ctx, args) => {
    // Verify admin
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const requests = await ctx.db
      .query("approvalRequests")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();

    return requests;
  },
});

// Approve or reject member
export const reviewApproval = mutation({
  args: {
    adminId: v.id("users"),
    requestId: v.id("approvalRequests"),
    approve: v.boolean(),
  },
  handler: async (ctx, args) => {
    // Verify admin
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const request = await ctx.db.get(args.requestId);
    if (!request) {
      throw new Error("Request not found");
    }

    // Update approval request
    await ctx.db.patch(args.requestId, {
      status: args.approve ? "approved" : "rejected",
      reviewedAt: Date.now(),
      reviewedBy: args.adminId,
    });

    // Update user approval status
    if (args.approve) {
      await ctx.db.patch(request.userId, {
        approved: true,
      });
    }

    return { success: true };
  },
});

// Get all users (admin only)
export const getAllUsers = query({
  args: { adminId: v.id("users") },
  handler: async (ctx, args) => {
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const users = await ctx.db.query("users").collect();
    
    // Get approval status for each user
    const usersWithStatus = await Promise.all(
      users.map(async (u) => {
        const approvalRequest = await ctx.db
          .query("approvalRequests")
          .withIndex("by_user", (q) => q.eq("userId", u._id))
          .first();
        
        return {
          userId: u._id,
          email: u.email,
          role: u.role,
          approved: u.approved,
          createdAt: u.createdAt,
          approvalStatus: approvalRequest?.status || "none",
        };
      })
    );
    
    return usersWithStatus;
  },
});

// Delete user (admin only)
export const deleteUser = mutation({
  args: {
    adminId: v.id("users"),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    // Don't allow deleting yourself
    if (args.adminId === args.userId) {
      throw new Error("Cannot delete your own account");
    }

    // Delete approval requests for this user
    const approvalRequests = await ctx.db
      .query("approvalRequests")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
    
    for (const request of approvalRequests) {
      await ctx.db.delete(request._id);
    }

    // Delete the user
    await ctx.db.delete(args.userId);

    return { success: true };
  },
});
