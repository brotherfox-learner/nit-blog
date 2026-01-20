import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

/**
 * Reusable image upload component
 * Follows SRP - single responsibility for image upload UI
 * Follows DRY - reusable for thumbnail and profile picture uploads
 */
export function ImageUpload({
  preview,
  onUpload,
  label = "Upload image",
  aspectRatio = "auto", // "auto" | "square" | "wide"
  className = "",
}) {
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    wide: "aspect-video",
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div
        className={`w-72 h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 relative ${aspectRatioClasses[aspectRatio]}`}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageIcon className="size-12 text-gray-400" />
        )}
      </div>
      <div>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          variant="outline"
          onClick={() => document.getElementById("image-upload").click()}
          className="rounded-full px-6"
        >
          {label}
        </Button>
      </div>
    </div>
  );
}
