import { Pencil, Trash2 } from "lucide-react";

/**
 * Reusable article table component
 * Follows SRP - single responsibility for displaying articles in a table
 * Follows DRY - reusable table structure
 */
export function ArticleTable({ articles, onEdit, onDelete }) {
  if (articles.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-8 text-center text-gray-500">
          No articles found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mx-15 mt-10">
      {/* Table Header */}
      <div className="grid grid-cols-10 justify-items-start items-center gap-4 h-12 px-6 py-4 bg-white border-b  border-gray-200">
        <div className="text-sm font-medium text-left text-gray-700 col-span-5">Article title</div>
        <div className="text-sm font-medium text-gray-700 w-32 col-span-2">Category</div>
        <div className="text-sm font-medium text-gray-700 w-32 col-span-3">Status</div>
        <div className="w-20"></div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {articles.map((article,index) => (
          <div
            key={article.id}
            className={`grid grid-cols-10 gap-4 px-6 py-4 opacity-80 hover:opacity-300 transition-colors items-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div className="text-sm col-span-5 text-gray-900 truncate">{article.title}</div>
            <div className="text-sm col-span-2 text-gray-700 w-32">{article.category}</div>
            <div className="col-span-2 w-32">
              <span className={`inline-flex items-center gap-1.5 text-sm ${article.status === 'Published' ? 'text-green-600' : 'text-gray-600'}`}>
                <span className={`size-1.5 rounded-full ${article.status === 'Published' ? 'bg-green-600' : 'bg-gray-600'}`}></span>
                {article.status}
              </span>
            </div>
            <div className="flex items-center gap-2 w-20">
              <button
                onClick={() => onEdit(article)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                aria-label="Edit article"
              >
                <Pencil className="size-4 text-gray-600" />
              </button>
              <button
                onClick={() => onDelete(article)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                aria-label="Delete article"
              >
                <Trash2 className="size-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
