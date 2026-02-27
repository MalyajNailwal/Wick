# Deployment Guide

## Netlify Deployment

This project uses Convex for the backend. The generated Convex files are committed to the repository, so no Convex authentication is needed during CI/CD builds.

### Environment Variables Required

Add these to your Netlify environment variables:

```
NEXT_PUBLIC_CONVEX_URL=<your-convex-deployment-url>
NEXT_PUBLIC_CONVEX_SITE_URL=<your-convex-site-url>
```

You can find these values in your `.env.local` file or Convex dashboard.

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`

The prebuild script will automatically skip Convex codegen in CI and use the committed generated files.

### Local Development

When developing locally:

1. Run `npx convex dev` in one terminal (for Convex backend)
2. Run `npm run dev` in another terminal (for Next.js)

If you update the Convex schema:
1. The changes will auto-generate when `npx convex dev` is running
2. Commit the updated `convex/_generated/` files
3. Push to trigger a new deployment

### Manual Codegen

If you need to manually regenerate Convex files:

```bash
npx convex codegen
```

Then commit the changes in `convex/_generated/`.

## Vercel Deployment

Same environment variables are needed. Vercel will automatically detect Next.js and use the correct build settings.

## Important Notes

- The `convex/_generated/` folder is tracked in git (not gitignored)
- The prebuild script skips codegen in CI environments
- Always commit generated files after schema changes
- Never commit `.env.local` or other secret files
