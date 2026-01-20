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

const categories = ["Cat", "General", "Inspiration", "Technology", "Lifestyle"];

/**
 * CreateArticle - Form component for creating/editing articles
 * Follows SRP - single responsibility for article form
 * Uses hook for form state management (loose coupling)
 */
export function CreateArticle({ onBack, initialData, onDelete }) {
  const isEditMode = !!initialData;
  const {
    formData,
    thumbnailPreview,
    updateField,
    handleThumbnailUpload,
  } = useArticleForm(initialData);

  const handleSaveAsDraft = () => {
    console.log("Save as draft:", formData);
    // TODO: Implement save as draft logic
  };

  const handleSaveAndPublish = () => {
    console.log("Save and publish:", formData);
    // TODO: Implement save and publish logic
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
        <div className="flex gap-3">
          {!isEditMode && (
            <Button
              variant="outline"
              onClick={handleSaveAsDraft}
              className="rounded-full px-6 border-gray-300"
            >
              Save as draft
            </Button>
          )}
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
          <ImageUpload
            preview={thumbnailPreview}
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
            onChange={(e) => updateField("authorName", e.target.value)}
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
