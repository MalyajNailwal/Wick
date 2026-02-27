import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all active links
export const getActiveLinks = query({
  handler: async (ctx) => {
    const links = await ctx.db
      .query("protectedLinks")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();

    return links.sort((a, b) => a.createdAt - b.createdAt);
  },
});

// Add new link (admin only)
export const addLink = mutation({
  args: {
    adminId: v.id("users"),
    title: v.string(),
    url: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify admin
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const linkId = await ctx.db.insert("protectedLinks", {
      title: args.title,
      url: args.url,
      description: args.description,
      addedBy: args.adminId,
      createdAt: Date.now(),
      isActive: true,
    });

    return { linkId };
  },
});

// Delete link (admin only)
export const deleteLink = mutation({
  args: {
    adminId: v.id("users"),
    linkId: v.id("protectedLinks"),
  },
  handler: async (ctx, args) => {
    // Verify admin
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.linkId);
    return { success: true };
  },
});

// Update link (admin only)
export const updateLink = mutation({
  args: {
    adminId: v.id("users"),
    linkId: v.id("protectedLinks"),
    title: v.string(),
    url: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify admin
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    await ctx.db.patch(args.linkId, {
      title: args.title,
      url: args.url,
      description: args.description,
    });

    return { success: true };
  },
});

// Get all links (admin only - for management)
export const getAllLinks = query({
  args: { adminId: v.id("users") },
  handler: async (ctx, args) => {
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const links = await ctx.db.query("protectedLinks").collect();
    return links.sort((a, b) => b.createdAt - a.createdAt);
  },
});
