# Wick Authentication System

## Overview
Complete authentication system with admin/member roles, approval workflow, and protected dashboard access.

## Features

### 1. User Roles
- **Admin**: Full access with secret key "admin123" during signup
- **Member**: Regular users who need admin approval

### 2. Protected Links
Members and admins can access these external apps:
- https://wickinspectionapp.vercel.app/wickdataquickfix
- https://wickinspectionapp.vercel.app/wickfeedback
- https://wickinspectionapp.vercel.app/wickdatainsights

### 3. Admin Panel
- View all pending approval requests
- Approve/reject member access
- View all users and their status

## Setup Instructions

### 1. Convex Backend (Already Done ✅)
```bash
npx convex dev  # Already initialized
npm install convex  # Already installed
```

### 2. Database Schema
Located in `convex/schema.ts`:
- `users` table: email, passwordHash, role, approved, createdAt
- `approvalRequests` table: userId, userEmail, status, timestamps

### 3. Backend Functions
- `convex/auth.ts`: signup, login, getCurrentUser
- `convex/admin.ts`: getPendingApprovals, reviewApproval, getAllUsers

### 4. Frontend Components
- `src/components/auth/AuthModal.tsx`: Login/Signup modal
- `src/components/auth/Dashboard.tsx`: Protected dashboard with links
- `src/components/auth/AdminPanel.tsx`: Admin approval interface
- `src/app/auth/page.tsx`: Main auth page

### 5. Navigation
Login button added to main navigation (next to Wick AI)

## Usage

### For Users:
1. Click "Login" in navigation
2. Sign up with email/password
3. Wait for admin approval (members only)
4. Access protected links after approval

### For Admins:
1. Sign up with admin key: "admin123"
2. Get instant access to all features
3. Click "Admin Panel" to manage approvals
4. Approve/reject member requests

## Routes
- `/auth` - Main authentication page
- Homepage - Login button in navigation

## Environment Variables
Already configured in `.env.local`:
- `NEXT_PUBLIC_CONVEX_URL`
- `NEXT_PUBLIC_CONVEX_SITE_URL`
- `CONVEX_DEPLOYMENT`

## Running the App

### Development:
```bash
# Terminal 1: Start Convex backend
npm run convex:dev

# Terminal 2: Start Next.js
npm run dev
```

### Production:
```bash
npm run build
npm start
```

## Security Notes
⚠️ **Important**: The current password hashing is basic (Base64). For production, implement proper password hashing with bcrypt or similar.

## Admin Key
Default admin key: `admin123`
To change, update `ADMIN_KEY` in `convex/auth.ts`

## Testing

### Test Admin Account:
1. Go to `/auth`
2. Click "Sign Up"
3. Enter email, password, and admin key: "admin123"
4. Login and access admin panel

### Test Member Account:
1. Sign up without admin key
2. See "Approval Pending" message
3. Login as admin and approve the member
4. Member can now access protected links

## Database Access
View your Convex dashboard:
https://dashboard.convex.dev/d/zealous-echidna-872

## Next Steps
- [ ] Add email notifications for approvals
- [ ] Implement password reset
- [ ] Add session management
- [ ] Enhance security with proper password hashing
- [ ] Add user profile management
