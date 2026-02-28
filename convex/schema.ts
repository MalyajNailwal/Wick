import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    passwordHash: v.string(),
    role: v.union(v.literal("admin"), v.literal("member")),
    approved: v.boolean(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  approvalRequests: defineTable({
    userId: v.id("users"),
    userEmail: v.string(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
    requestedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("users")),
  }).index("by_status", ["status"])
    .index("by_user", ["userId"]),

  protectedLinks: defineTable({
    title: v.string(),
    url: v.string(),
    description: v.string(),
    addedBy: v.id("users"),
    createdAt: v.number(),
    isActive: v.boolean(),
  }).index("by_active", ["isActive", "createdAt"]),

  userNotes: defineTable({
    userId: v.id("users"),
    title: v.optional(v.string()),
    content: v.string(),
    createdAt: v.optional(v.number()),
    updatedAt: v.number(),
  }).index("by_user", ["userId"])
    .index("by_user_updated", ["userId", "updatedAt"]),
});
