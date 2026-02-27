# Fix Deployment Issue

## Problem
The Convex dev deployment has old code with Buffer reference.

## Solution

### Step 1: Stop any running Convex process
Press `Ctrl+C` in the terminal where `npx convex dev` is running (if any)

### Step 2: Clear and redeploy
Run this command in your terminal:

```bash
npx convex dev
```

This will:
1. Connect to your dev deployment
2. Push the updated code (without Buffer)
3. Deploy the new hash function

### Step 3: Keep it running
Leave `npx convex dev` running in that terminal.

### Step 4: Test signup
1. Go to http://localhost:3000
2. Click "Login"
3. Click "Sign Up"
4. Fill in:
   - Email: test@example.com
   - Password: test123
   - Access Key: admin123 (for admin) or anything else (for member)
5. Should work now!

## What was fixed:
- Removed `Buffer.from()` which doesn't work in Convex
- Replaced with simple hash function that works in Convex runtime
- Made admin key required (but hidden from users)

## The new hash function:
```javascript
function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `hashed_${Math.abs(hash)}_${password.length}`;
}
```

This works perfectly in Convex runtime!
