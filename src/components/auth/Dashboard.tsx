"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { ExternalLink, Lock } from "lucide-react";

interface DashboardProps {
  user: {
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  };
}

export default function Dashboard({ user }: DashboardProps) {
  const canAccess = user.role === "admin" || user.approved;
  const links = useQuery(api.links.getActiveLinks);

  if (!canAccess) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <Lock className="mx-auto mb-4 text-yellow-600" size={48} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Approval Pending
          </h2>
          <p className="text-gray-600">
            Your account is waiting for admin approval. You&apos;ll receive access once approved.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Logged in as: {user.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome, {user.email}
        </h1>
        <p className="text-gray-600">
          Role: <span className="font-semibold capitalize">{user.role}</span>
        </p>
      </div>

      {!links ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-4">Loading links...</p>
        </div>
      ) : links.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <p className="text-gray-500">No links available yet.</p>
          {user.role === "admin" && (
            <p className="text-sm text-gray-400 mt-2">
              Go to Admin Panel to add links
            </p>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {link.title}
                </h3>
                <ExternalLink 
                  className="text-gray-400 group-hover:text-blue-600 transition" 
                  size={20} 
                />
              </div>
              <p className="text-gray-600 text-sm">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
