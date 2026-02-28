"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { ExternalLink, Lock, StickyNote, Save, Wrench, Plus, Trash2, Edit2, X } from "lucide-react";
import { useState } from "react";
import { Id } from "../../../convex/_generated/dataModel";

interface DashboardProps {
  user: {
    userId: string;
    email: string;
    role: "admin" | "member";
    approved: boolean;
  };
}

interface Note {
  _id: Id<"userNotes">;
  userId: Id<"users">;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

export default function Dashboard({ user }: DashboardProps) {
  const canAccess = user.role === "admin" || user.approved;
  const links = useQuery(api.links.getActiveLinks);
  const userNotes = useQuery(api.notes.getUserNotes, { userId: user.userId as never });
  const createNote = useMutation(api.notes.createNote);
  const updateNote = useMutation(api.notes.updateNote);
  const deleteNote = useMutation(api.notes.deleteNote);
  
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleCreateNote = async () => {
    if (!noteTitle.trim() || !noteContent.trim()) {
      alert("Please enter both title and content");
      return;
    }
    
    setIsSaving(true);
    try {
      await createNote({
        userId: user.userId as never,
        title: noteTitle,
        content: noteContent,
      });
      setNoteTitle("");
      setNoteContent("");
      setIsCreatingNote(false);
    } catch (error) {
      console.error("Failed to create note:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateNote = async () => {
    if (!editingNoteId || !noteTitle.trim() || !noteContent.trim()) {
      alert("Please enter both title and content");
      return;
    }
    
    setIsSaving(true);
    try {
      await updateNote({
        noteId: editingNoteId as never,
        title: noteTitle,
        content: noteContent,
      });
      setNoteTitle("");
      setNoteContent("");
      setEditingNoteId(null);
    } catch (error) {
      console.error("Failed to update note:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm("Are you sure you want to delete this note?")) return;
    
    try {
      await deleteNote({ noteId: noteId as never });
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const startEditNote = (note: Note) => {
    setEditingNoteId(note._id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setIsCreatingNote(false);
  };

  const cancelEdit = () => {
    setEditingNoteId(null);
    setIsCreatingNote(false);
    setNoteTitle("");
    setNoteContent("");
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
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 sticky top-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <StickyNote className="text-yellow-500" size={20} />
                <h2 className="text-xl font-bold text-gray-900">Notes</h2>
              </div>
              {!isCreatingNote && !editingNoteId && (
                <button
                  onClick={() => setIsCreatingNote(true)}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  title="Create new note"
                >
                  <Plus size={18} />
                </button>
              )}
            </div>
            
            {/* Create/Edit Note Form */}
            {(isCreatingNote || editingNoteId) && (
              <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {editingNoteId ? "Edit Note" : "New Note"}
                  </h3>
                  <button
                    onClick={cancelEdit}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Note title..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 mb-2"
                />
                
                <textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Write your note..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm text-gray-700"
                />
                
                <button
                  onClick={editingNoteId ? handleUpdateNote : handleCreateNote}
                  disabled={isSaving}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm font-semibold"
                >
                  <Save size={16} />
                  {isSaving ? "Saving..." : editingNoteId ? "Update" : "Save Note"}
                </button>
              </div>
            )}

            {/* Notes List */}
            <div className="space-y-3">
              {!userNotes ? (
                <p className="text-sm text-gray-500 text-center py-4">Loading notes...</p>
              ) : userNotes.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  No notes yet. Click + to create one!
                </p>
              ) : (
                userNotes.map((note) => (
                  <div
                    key={note._id}
                    className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-sm flex-1">
                        {note.title}
                      </h3>
                      <div className="flex gap-1 ml-2">
                        <button
                          onClick={() => startEditNote(note)}
                          className="p-1 text-blue-600 hover:bg-blue-100 rounded transition"
                          title="Edit note"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(note._id)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded transition"
                          title="Delete note"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 whitespace-pre-wrap break-words">
                      {note.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
