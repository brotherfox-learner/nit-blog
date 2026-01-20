import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon, Trash2 } from "lucide-react";

const categories = ["Cat", "General", "Inspiration", "Technology", "Lifestyle"];

export function CreateArticle({ onBack, initialData }) {
  const [formData, setFormData] = useState({
    thumbnailImage: null,
    category: "",
    authorName: "Thompson P.",
    title: "",
    introduction: "",
    content: "",
  });

  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...formData,
        category: initialData.category || "",
        title: initialData.title || "",
        // For dummy data simulation, we might not have all fields in initialData
        // but normally we would populate them here
      });
      // specific logic if we had thumbnail url in initialData
    }
  }, [initialData]);

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, thumbnailImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAsDraft = () => {
    console.log("Save as draft:", formData);
    // TODO: Implement save as draft logic
  };

  const handleSaveAndPublish = () => {
    console.log("Save and publish:", formData);
    // TODO: Implement save and publish logic
  };

  const handleDeleteArticle = () => {
    console.log("Delete article");
    // TODO: Implement delete logic
  };

  const isEditMode = !!initialData;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create article</h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleSaveAsDraft}
            className="rounded-full px-6"
          >
            Save as draft
          </Button>
          <Button
            onClick={handleSaveAndPublish}
            className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
          >
            {isEditMode ? "Save" : "Save and publish"}
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Thumbnail Image */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Thumbnail image
          </Label>
          <div className="flex items-start gap-4">
            <div className="w-72 h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 relative">
              {thumbnailPreview || (isEditMode && initialData?.thumbnailUrl) ? (
                <img
                  src={thumbnailPreview || initialData?.thumbnailUrl || "/placeholder.svg"} 
                  // In a real app, initialData would have a valid URL.
                  // For this dummy demo, if we don't have a real URL, we might want to show a placeholder or just the icon if no preview.
                  // Let's assume for this specific simulated "edit" flow (pic 2) there is an image.
                  // But since we don't have real images in dummy data, I will just stick to the upload behavior
                  // or if it's the specific dummy item, maybe hardcode a cat image for demo?
                  // For now, let's keep it simple: if preview exists, show it.
                  alt="Thumbnail preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageIcon className="size-12 text-gray-400" />
              )}
            </div>
            <div>
              <input
                type="file"
                id="thumbnail-upload"
                accept="image/*"
                onChange={handleThumbnailUpload}
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById("thumbnail-upload").click()}
                className="rounded-full px-6"
              >
                Upload thumbnail image
              </Button>
            </div>
          </div>
        </div>

        {/* Category */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Category
          </Label>
          <Select
            value={formData.category}
            onValueChange={(value) =>
              setFormData({ ...formData, category: value })
            }
          >
            <SelectTrigger className="w-full max-w-md bg-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Author Name */}
        <div>
          <Label className="text-sm font-medium text-gray-400 mb-2 block">
            Author name
          </Label>
          <Input
            value={formData.authorName}
            onChange={(e) =>
              setFormData({ ...formData, authorName: e.target.value })
            }
            className="w-full max-w-md bg-gray-50 text-gray-400"
            disabled
          />
        </div>

        {/* Title */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Title
          </Label>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Article title"
            className="w-full bg-white"
          />
        </div>

        {/* Introduction */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Introduction (max 120 letters)
          </Label>
          <textarea
            value={formData.introduction}
            onChange={(e) =>
              setFormData({ ...formData, introduction: e.target.value })
            }
            placeholder="Introduction"
            maxLength={120}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Content */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Content
          </Label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            placeholder="Content"
            rows={12}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Delete Article Button - Only in Edit Mode */}
        {isEditMode && (
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleDeleteArticle}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              <Trash2 className="size-4" />
              Delete article
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
