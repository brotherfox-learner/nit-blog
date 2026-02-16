import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { useArticleForm } from "@/hooks/useArticleForm";
import { ImageUpload } from "../shared/ImageUpload";
import { createPost, updatePost } from "@/api/postsAPI";
import { fetchCategories } from "@/api/categoryAPI";
import { useAuth } from "@/contexts";

/**
 * CreateArticle - Form component for creating/editing articles
 * Follows SRP - single responsibility for article form
 * Uses hook for form state management (loose coupling)
 */
export function CreateArticle({ onBack, initialData, onDelete }) {
  const { token, session, profile } = useAuth();
  const accessToken = token ?? session?.access_token;

  const isEditMode = !!initialData;
  const [categories, setCategories] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  const {
    formData,
    thumbnailPreview,
    updateField,
    handleThumbnailUpload,
    setFormData,
  } = useArticleForm(initialData);

  // Fetch categories from API
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    loadCategories();
  }, []);

  // Get status_id from status name
  // Database: id 1 = draft, id 2 = published
  const getStatusIdFromName = (statusName) => {
    if (!statusName) return 1; // Default to Draft (id=1)
    const lower = statusName.toLowerCase();
    if (lower === "published") return 2;
    return 1; // Draft (id=1)
  };

  // Initialize form for edit mode
  useEffect(() => {
    if (initialData) {
      setFormData({
        thumbnailImage: null,
        category: initialData.category_name || initialData.category || "",
        authorName: initialData.author || profile?.name || "Unknown",
        title: initialData.title || "",
        introduction: initialData.description || "",
        content: initialData.content || "",
        category_id: initialData.category_id || null,
        status_id: initialData.status_id || getStatusIdFromName(initialData.status),
      });
    }
  }, [initialData, profile, setFormData]);

  const handleSaveAsDraft = async () => {
    await saveArticle(1); // status_id 1 = Draft
  };

  const handleSaveAndPublish = async () => {
    await saveArticle(2); // status_id 2 = Published
  };

  const handleSaveWithCurrentStatus = async () => {
    // In edit mode, save with the currently selected status
    await saveArticle(formData.status_id || 1);
  };

  const saveArticle = async (statusId) => {
    if (!accessToken) {
      setError("You must be logged in to save articles");
      return;
    }

    // Find category_id from category name
    const selectedCategory = categories.find((c) => c.name === formData.category);
    if (!selectedCategory) {
      setError("Please select a category");
      return;
    }

    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    if (!formData.content.trim()) {
      setError("Content is required");
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const postData = {
        title: formData.title,
        description: formData.introduction,
        content: formData.content,
        category_id: selectedCategory.id,
        status_id: statusId,
        image: initialData?.image || "", // Keep existing image if no new upload
      };

      if (isEditMode) {
        await updatePost(initialData.id, postData, formData.thumbnailImage, accessToken);
      } else {
        if (!formData.thumbnailImage) {
          setError("Thumbnail image is required");
          setIsSaving(false);
          return;
        }
        await createPost(postData, formData.thumbnailImage, accessToken);
      }

      if (onBack) onBack();
    } catch (err) {
      console.error("Failed to save article:", err);
      setError(err.response?.data?.message || err.message || "Failed to save article");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteArticle = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          {isEditMode ? "Edit article" : "Create article"}
        </h1>
        <div className="flex gap-3 items-center">
          {isEditMode ? (
            <>
              {/* Status selector for edit mode */}
              <Select
                value={String(formData.status_id || 1)}
                onValueChange={(value) => updateField("status_id", parseInt(value, 10))}
              >
                <SelectTrigger className="w-[140px] bg-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Draft</SelectItem>
                  <SelectItem value="2">Published</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleSaveWithCurrentStatus}
                disabled={isSaving}
                className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
              >
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={handleSaveAsDraft}
                disabled={isSaving}
                className="rounded-full px-6 border-gray-300"
              >
                {isSaving ? "Saving..." : "Save as draft"}
              </Button>
              <Button
                onClick={handleSaveAndPublish}
                disabled={isSaving}
                className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
              >
                {isSaving ? "Saving..." : "Save and publish"}
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        {/* Thumbnail Image */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Thumbnail image
          </Label>
          <ImageUpload
            preview={thumbnailPreview || initialData?.image}
            onUpload={handleThumbnailUpload}
            label="Upload thumbnail image"
          />
        </div>

        {/* Category */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Category
          </Label>
          <Select
            value={formData.category}
            onValueChange={(value) => updateField("category", value)}
          >
            <SelectTrigger className="w-full max-w-md bg-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
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
            value={profile?.name || profile?.username || "Unknown"}
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
            onChange={(e) => updateField("title", e.target.value)}
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
            onChange={(e) => updateField("introduction", e.target.value)}
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
            onChange={(e) => updateField("content", e.target.value)}
            placeholder="Content"
            rows={12}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Delete Article Button - Only in Edit Mode */}
        {isEditMode && (
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={handleDeleteArticle}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              <Trash2 className="size-4" />
              Delete article
            </button>
            <Button className="rounded-full px-6 my-4 border-gray-300" onClick={onBack}>Cancel</Button>

          </div>
        )}
      </div>
      {!isEditMode && <Button className="rounded-full px-6 my-4 border-gray-300" onClick={onBack}>Cancel</Button>}
    </div>
  );
}
