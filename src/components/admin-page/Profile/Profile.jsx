import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfileForm } from "@/hooks/useProfileForm";
import { ImageUpload } from "../shared/ImageUpload";

/**
 * Profile - Profile management component
 * Follows SRP - single responsibility for profile management
 * Uses hook for form state management (loose coupling)
 */
export function Profile() {
  const {
    formData,
    profilePicturePreview,
    updateField,
    handleProfilePictureUpload,
  } = useProfileForm({
    name: "Thompson P.",
    username: "thompson",
    email: "thompson.p@gmail.com",
    bio: "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness. When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.",
    profilePictureUrl: null, // In real app, this would be a URL
  });

  const handleSave = () => {
    console.log("Save profile:", formData);
    // TODO: Implement save logic
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        <Button
          onClick={handleSave}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          Save
        </Button>
      </div>

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
                <div className="w-full h-full bg-gray-200"></div>
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
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Email
          </Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full max-w-md bg-white"
          />
        </div>

        {/* Bio */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Bio (max 120 letters)
          </Label>
          <textarea
            value={formData.bio}
            onChange={(e) => updateField("bio", e.target.value)}
            placeholder="Bio"
            maxLength={120}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
