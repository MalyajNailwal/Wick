"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { ExternalLink, Lock, StickyNote, Save, Wrench } from "lucide-react";
import { useState, useEffect } from "react";

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
  const userNote = useQuery(api.notes.getUserNote, { userId: user.userId as never });
  const saveNote = useMutation(api.notes.saveNote);
  
  const [noteContent, setNoteContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (userNote?.content) {
      setNoteContent(userNote.content);
    }
  }, [userNote]);

  const handleSaveNote = async () => {
    setIsSaving(true);
    try {
      await saveNote({
        userId: user.userId as never,
        content: noteContent,
      });
      setLastSaved(new Date());
    } catch (error) {
      console.error("Failed to save note:", error);
    } finally {
      setIsSaving(false);
    }
  };

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
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Compact Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user.email}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Role: <span className="font-semibold capitalize">{user.role}</span>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Links Section - Takes 3 columns */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Access</h2>
          
          {!links ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow">
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
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {links.map((link) => {
                const isWickInsight = link.title.toLowerCase().includes('wick data insights') || 
                                     link.title.toLowerCase().includes('wick insight');
                
                if (isWickInsight) {
                  return (
                    <div
                      key={link._id}
                      className="relative bg-gray-50 border border-gray-300 rounded-2xl p-6 cursor-not-allowed opacity-75"
                    >
                      <div className="absolute inset-0 bg-gray-900/5 rounded-2xl flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-1">
                            <Wrench className="text-orange-500" size={18} />
                            <p className="font-bold text-gray-900 text-sm">Under Development</p>
                          </div>
                          <p className="text-xs text-gray-600">Publishing soon...</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-500 leading-tight">
                          {link.title}
                        </h3>
                        <Lock 
                          className="text-gray-400 flex-shrink-0 ml-2" 
                          size={20} 
                        />
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  );
                }
                
                return (
                  <a
                    key={link._id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition leading-tight">
                        {link.title}
                      </h3>
                      <ExternalLink 
                        className="text-gray-400 group-hover:text-blue-600 transition flex-shrink-0 ml-2" 
                        size={20} 
                      />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Notes Section - Takes 1 column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 sticky top-4">
            <div className="flex items-center gap-2 mb-4">
              <StickyNote className="text-yellow-500" size={20} />
              <h2 className="text-xl font-bold text-gray-900">Notes</h2>
            </div>
            
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Your personal notes..."
              className="w-full h-80 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm text-gray-700 placeholder-gray-400"
            />
            
            <div className="mt-3">
              <button
                onClick={handleSaveNote}
                disabled={isSaving}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm"
              >
                <Save size={16} />
                {isSaving ? "Saving..." : "Save Note"}
              </button>
              
              {lastSaved && (
                <p className="text-xs text-gray-500 text-center mt-2">
                  Saved at {lastSaved.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
