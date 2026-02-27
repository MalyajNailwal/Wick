"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Check, X, Users, Plus, Trash2, Link as LinkIcon, Edit2 } from "lucide-react";
import type { Id } from "../../../convex/_generated/dataModel";
import { useState } from "react";

interface AdminPanelProps {
  adminId: Id<"users">;
}

export default function AdminPanel({ adminId }: AdminPanelProps) {
  const pendingApprovals = useQuery(api.admin.getPendingApprovals, { adminId });
  const allUsers = useQuery(api.admin.getAllUsers, { adminId });
  const allLinks = useQuery(api.links.getAllLinks, { adminId });
  const reviewApproval = useMutation(api.admin.reviewApproval);
  const addLink = useMutation(api.links.addLink);
  const deleteLink = useMutation(api.links.deleteLink);
  const updateLink = useMutation(api.links.updateLink);
  const deleteUser = useMutation(api.admin.deleteUser);

  const [showAddLink, setShowAddLink] = useState(false);
  const [editingLink, setEditingLink] = useState<Id<"protectedLinks"> | null>(null);
  const [newLink, setNewLink] = useState({
    title: "",
    url: "",
    description: "",
  });
  const [editLink, setEditLink] = useState({
    title: "",
    url: "",
    description: "",
  });

  const handleReview = async (requestId: Id<"approvalRequests">, approve: boolean) => {
    try {
      await reviewApproval({ adminId, requestId, approve });
    } catch (err) {
      console.error("Failed to review:", err);
    }
  };

  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addLink({
        adminId,
        title: newLink.title,
        url: newLink.url,
        description: newLink.description,
      });
      setNewLink({ title: "", url: "", description: "" });
      setShowAddLink(false);
    } catch (err) {
      console.error("Failed to add link:", err);
    }
  };

  const handleUpdateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLink) return;
    
    try {
      await updateLink({
        adminId,
        linkId: editingLink,
        title: editLink.title,
        url: editLink.url,
        description: editLink.description,
      });
      setEditingLink(null);
      setEditLink({ title: "", url: "", description: "" });
    } catch (err) {
      console.error("Failed to update link:", err);
    }
  };

  const handleDeleteLink = async (linkId: Id<"protectedLinks">) => {
    if (confirm("Are you sure you want to delete this link?")) {
      try {
        await deleteLink({ adminId, linkId });
      } catch (err) {
        console.error("Failed to delete link:", err);
      }
    }
  };

  const handleDeleteUser = async (userId: Id<"users">) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      try {
        await deleteUser({ adminId, userId });
      } catch (err) {
        const error = err as Error;
        alert(error.message || "Failed to delete user");
        console.error("Failed to delete user:", err);
      }
    }
  };

  const startEditing = (link: {
    _id: Id<"protectedLinks">;
    title: string;
    url: string;
    description: string;
  }) => {
    setEditingLink(link._id);
    setEditLink({
      title: link.title,
      url: link.url,
      description: link.description,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Panel</h1>

      {/* Manage Links Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <LinkIcon size={24} />
            Manage Links
          </h2>
          <button
            onClick={() => setShowAddLink(!showAddLink)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Add Link
          </button>
        </div>

        {/* Add Link Form */}
        {showAddLink && (
          <form onSubmit={handleAddLink} className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Add New Link</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newLink.title}
                  onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <input
                  type="url"
                  value={newLink.url}
                  onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  placeholder="https://example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newLink.description}
                  onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  rows={2}
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add Link
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddLink(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Links List */}
        {!allLinks ? (
          <p className="text-gray-500">Loading...</p>
        ) : allLinks.length === 0 ? (
          <p className="text-gray-500">No links added yet</p>
        ) : (
          <div className="space-y-3">
            {allLinks.map((link) => (
              <div key={link._id}>
                {editingLink === link._id ? (
                  // Edit Form
                  <form onSubmit={handleUpdateLink} className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Edit Link</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={editLink.title}
                          onChange={(e) => setEditLink({ ...editLink, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          URL
                        </label>
                        <input
                          type="url"
                          value={editLink.url}
                          onChange={(e) => setEditLink({ ...editLink, url: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          value={editLink.description}
                          onChange={(e) => setEditLink({ ...editLink, description: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                          rows={2}
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingLink(null);
                            setEditLink({ title: "", url: "", description: "" });
                          }}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  // Display Link
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{link.title}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        {link.url}
                      </a>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => startEditing(link)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteLink(link._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pending Approvals */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Users size={24} />
          Pending Approvals
        </h2>

        {!pendingApprovals ? (
          <p className="text-gray-500">Loading...</p>
        ) : pendingApprovals.length === 0 ? (
          <p className="text-gray-500">No pending approvals</p>
        ) : (
          <div className="space-y-4">
            {pendingApprovals.map((request) => (
              <div
                key={request._id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-900">{request.userEmail}</p>
                  <p className="text-sm text-gray-500">
                    Requested: {new Date(request.requestedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleReview(request._id, true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                  >
                    <Check size={18} />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReview(request._id, false)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                  >
                    <X size={18} />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Users */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">All Users</h2>

        {!allUsers ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Joined</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {allUsers.map((user) => (
                  <tr key={user.userId} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin" 
                          ? "bg-purple-100 text-purple-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.approvalStatus === "rejected"
                          ? "bg-red-100 text-red-700"
                          : user.approved 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {user.approvalStatus === "rejected" ? "Rejected" : user.approved ? "Approved" : "Pending"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDeleteUser(user.userId)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm"
                        title="Delete user"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
