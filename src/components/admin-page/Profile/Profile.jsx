import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts";
import { updateMe } from "@/api/authAPI";

/**
 * Profile - Profile management component
 * Follows SRP - single responsibility for profile management
 * Uses AuthContext for user data
 */
export function Profile() {
  const { token, session, profile, user, fetchProfile } = useAuth();
  const accessToken = token ?? session?.access_token;

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    profile_pic: null,
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Initialize form with profile data from AuthContext
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        username: profile.username || "",
        email: user?.email || profile.email || "",
        bio: profile.bio || "",
        profile_pic: profile.profile_pic || null,
      });
      if (profile.profile_pic) {
        setProfilePicturePreview(profile.profile_pic);
      }
    }
  }, [profile, user]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfilePictureUpload = (file) => {
    if (file) {
      setProfilePictureFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!accessToken) {
      setError("You must be logged in");
      return;
    }

    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const updateData = {
        name: formData.name,
        username: formData.username,
        bio: formData.bio,
      };

      // If there's a new profile picture, convert to base64 or handle upload
      if (profilePictureFile) {
        // For now, we'll use the base64 preview as profile_pic
        // In a real app, you might want to upload to cloud storage
        updateData.profile_pic = profilePicturePreview;
      }

      await updateMe(updateData, accessToken);

      // Refresh profile in AuthContext
      if (fetchProfile) {
        await fetchProfile(accessToken);
      }

      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Failed to save profile:", err);
      setError(err.response?.data?.message || err.message || "Failed to save profile");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        {/* Profile Picture */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Profile picture
          </Label>
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-200 relative">
              {profilePicturePreview ? (
                <img
                  src={profilePicturePreview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl font-bold">
                  {formData.name?.charAt(0)?.toUpperCase() || "?"}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleProfilePictureUpload(file);
                  }
                }}
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById("profile-upload").click()}
                className="rounded-full px-6"
              >
                Upload profile picture
              </Button>
            </div>
          </div>
        </div>

        {/* Name */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Name
          </Label>
          <Input
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full max-w-md bg-white"
          />
        </div>

        {/* Username */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Username
          </Label>
          <Input
            value={formData.username}
            onChange={(e) => updateField("username", e.target.value)}
            className="w-full max-w-md bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <Label className="text-sm font-medium text-gray-400 mb-2 block">
            Email (cannot be changed)
          </Label>
          <Input
            type="email"
            value={formData.email}
            disabled
            className="w-full max-w-md bg-gray-50 text-gray-400"
          />
        </div>

        {/* Bio */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Bio (max 500 letters)
          </Label>
          <textarea
            value={formData.bio}
            onChange={(e) => updateField("bio", e.target.value)}
            placeholder="Tell us about yourself..."
            maxLength={500}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
