import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const ADMIN_KEY = "admin123";

// Simple hash function for Convex (use proper auth in production)
function hashPassword(password: string): string {
  // Simple encoding that works in Convex runtime
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `hashed_${Math.abs(hash)}_${password.length}`;
}

function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

// Signup mutation
export const signup = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    adminKey: v.string(), // Required now
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("User already exists");
    }

    // Determine role based on admin key
    const isAdmin = args.adminKey === ADMIN_KEY;
    const role = isAdmin ? "admin" : "member";
    const approved = isAdmin; // Admins are auto-approved

    // Create user
    const userId = await ctx.db.insert("users", {
      email: args.email,
      passwordHash: hashPassword(args.password),
      role,
      approved,
      createdAt: Date.now(),
    });

    // Create approval request for members
    if (!isAdmin) {
      await ctx.db.insert("approvalRequests", {
        userId,
        userEmail: args.email,
        status: "pending",
        requestedAt: Date.now(),
      });
    }

    return { userId, email: args.email, role, approved };
  },
});

// Login query
export const login = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (!verifyPassword(args.password, user.passwordHash)) {
      throw new Error("Invalid credentials");
    }

    return {
      userId: user._id,
      email: user.email,
      role: user.role,
      approved: user.approved,
    };
  },
});

// Get current user
export const getCurrentUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) return null;

    return {
      userId: user._id,
      email: user.email,
      role: user.role,
      approved: user.approved,
    };
  },
});
