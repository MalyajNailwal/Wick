import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUserNote = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const note = await ctx.db
      .query("userNotes")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .first();
    
    return note;
  },
});

export const saveNote = mutation({
  args: {
    userId: v.id("users"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const existingNote = await ctx.db
      .query("userNotes")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .first();

    if (existingNote) {
      await ctx.db.patch(existingNote._id, {
        content: args.content,
        updatedAt: Date.now(),
      });
      return existingNote._id;
    } else {
      return await ctx.db.insert("userNotes", {
        userId: args.userId,
        content: args.content,
        updatedAt: Date.now(),
      });
    }
  },
});
