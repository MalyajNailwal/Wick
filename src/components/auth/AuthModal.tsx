"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: {
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  }) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"admin" | "employee">("employee");
  const [adminKey, setAdminKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = useMutation(api.auth.signup);
  const login = useMutation(api.auth.login);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const result = await login({ email, password });
        onSuccess({
          userId: result.userId as string,
          email: result.email,
          role: result.role as "admin" | "member",
          approved: result.approved,
        });
      } else {
        // For employee, use a dummy key
        const keyToUse = selectedRole === "admin" ? adminKey : "employee";
        
        if (selectedRole === "admin" && !adminKey) {
          setError("Admin key is required for admin signup");
          setLoading(false);
          return;
        }
        
        const result = await signup({ 
          email, 
          password, 
          adminKey: keyToUse
        });
        onSuccess({
          userId: result.userId as string,
          email: result.email,
          role: result.role as "admin" | "member",
          approved: result.approved,
        });
      }
      onClose();
    } catch (err) {
      const error = err as Error;
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          {isLogin ? "Welcome Back" : "Join Wick"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection - Only for Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I am signing up as <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedRole("employee")}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition ${
                    selectedRole === "employee"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Employee
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole("admin")}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition ${
                    selectedRole === "admin"
                      ? "border-purple-500 bg-purple-50 text-purple-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              required
            />
          </div>

          {/* Admin Key - Only show if Admin is selected */}
          {!isLogin && selectedRole === "admin" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Access Key <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter admin access key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 bg-white"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Contact your administrator for the admin key
              </p>
            </div>
          )}

          {/* Employee Info */}
          {!isLogin && selectedRole === "employee" && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-700">
                ℹ️ Your account will need admin approval before you can access the portal
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setSelectedRole("employee");
              setAdminKey("");
            }}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
