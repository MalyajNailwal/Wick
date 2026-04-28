"use client";

import { useState, useEffect } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthModal from "@/components/auth/AuthModal";
import Dashboard from "@/components/auth/Dashboard";
import AdminPanel from "@/components/auth/AdminPanel";
import { LogOut, Shield } from "lucide-react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

function AuthPageContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  } | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("wickAuthUser");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("wickAuthUser");
      }
    }
  }, []);

  const handleLogin = (user: {
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  }) => {
    setCurrentUser(user);
    localStorage.setItem("wickAuthUser", JSON.stringify(user));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAdminPanel(false);
    localStorage.removeItem("wickAuthUser");
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
      <main id="main-content" className="py-12">
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
        onSuccess={handleLogin}
      />
    </div>
  );
}

export default function AuthPage() {
  if (!convex) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Authentication system is not configured.</p>
        </div>
      </div>
    );
  }
  return (
    <ConvexProvider client={convex}>
      <AuthPageContent />
    </ConvexProvider>
  );
}
