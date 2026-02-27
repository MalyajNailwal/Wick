"use client";

import { useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthModal from "@/components/auth/AuthModal";
import Dashboard from "@/components/auth/Dashboard";
import AdminPanel from "@/components/auth/AdminPanel";
import { LogOut, Shield } from "lucide-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function AuthPageContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  } | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAdminPanel(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Wick Portal</h1>
          
          {currentUser ? (
            <div className="flex items-center gap-4">
              {currentUser.role === "admin" && (
                <button
                  onClick={() => setShowAdminPanel(!showAdminPanel)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  <Shield size={18} />
                  {showAdminPanel ? "Dashboard" : "Admin Panel"}
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        {!currentUser ? (
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Wick
            </h2>
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold text-lg"
            >
              Get Started
            </button>
          </div>
        ) : showAdminPanel && currentUser.role === "admin" ? (
          <AdminPanel adminId={currentUser.userId as never} />
        ) : (
          <Dashboard user={currentUser} />
        )}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
          setShowAuthModal(false);
        }}
      />
    </div>
  );
}

export default function AuthPage() {
  return (
    <ConvexProvider client={convex}>
      <AuthPageContent />
    </ConvexProvider>
  );
}
