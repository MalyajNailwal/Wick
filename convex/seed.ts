import { mutation } from "./_generated/server";

// Run this once to add default links
export const seedDefaultLinks = mutation({
  handler: async (ctx) => {
    // Check if links already exist
    const existingLinks = await ctx.db.query("protectedLinks").collect();
    if (existingLinks.length > 0) {
      return { message: "Links already exist, skipping seed" };
    }

    // Get first admin user (or create a system user)
    const adminUser = await ctx.db.query("users").first();
    if (!adminUser) {
      throw new Error("No admin user found. Please create an admin first.");
    }

    const defaultLinks = [
      {
        title: "Wick Data Quick Fix",
        url: "https://wickinspectionapp.vercel.app/wickdataquickfix",
        description: "Quick data fixes and corrections",
      },
      {
        title: "Wick Feedback",
        url: "https://wickinspectionapp.vercel.app/wickfeedback",
        description: "User feedback and reviews",
      },
      {
        title: "Wick Data Insights",
        url: "https://wickinspectionapp.vercel.app/wickdatainsights",
        description: "Analytics and data insights",
      },
    ];

    for (const link of defaultLinks) {
      await ctx.db.insert("protectedLinks", {
        ...link,
        addedBy: adminUser._id,
        createdAt: Date.now(),
        isActive: true,
      });
    }

    return { message: "Default links seeded successfully" };
  },
});
