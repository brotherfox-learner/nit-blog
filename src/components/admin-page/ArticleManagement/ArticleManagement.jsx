import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SearchBox } from "@/components/common/SearchBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2, Plus } from "lucide-react";
import { DeleteArticleDialog } from "./DeleteArticleDialog";
import { CreateArticle } from "./CreateArticle";

// Dummy data for demonstration
const dummyArticles = [
  {
    id: 1,
    title: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They D...",
    category: "Cat",
    status: "Published",
  },
  {
    id: 2,
    title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    category: "Cat",
    status: "Published",
  },
  {
    id: 3,
    title: "Finding Motivation: How to Stay Inspired Through Life's Challenges",
    category: "General",
    status: "Published",
  },
  {
    id: 4,
    title: "The Science of the Cat's Purr: How It Benefits Cats and Humans Alike",
    category: "Cat",
    status: "Published",
  },
  {
    id: 5,
    title: "Top 10 Health Tips to Keep Your Cat Happy and Healthy",
    category: "Cat",
    status: "Published",
  },
  {
    id: 6,
    title: "Unlocking Creativity: Simple Habits to Spark Inspiration Daily",
    category: "Inspiration",
    status: "Published",
  },
];

const categories = ["All", "Cat", "General", "Inspiration"];
const statuses = ["All", "Published", "Draft"];

export function ArticleManagement() {
  /* 
    State for view management: 'list' | 'create' | 'edit' 
  */
  const [view, setView] = useState("list");
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // State for articles data
  const [articles, setArticles] = useState(dummyArticles);
  
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  
  // State for delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  // Filter articles based on search and filters
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || article.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteClick = (article) => {
    setArticleToDelete(article);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (articleToDelete) {
      setArticles(articles.filter((a) => a.id !== articleToDelete.id));
      setDeleteDialogOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleEditClick = (article) => {
    setSelectedArticle(article);
    setView("edit");
  };

  const handleCreateArticle = () => {
    setSelectedArticle(null);
    setView("create");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedArticle(null);
  };

  if (view === "create" || view === "edit") {
    return (
      <CreateArticle 
        onBack={handleBackToList} 
        initialData={view === "edit" ? selectedArticle : null} 
      />
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Article management
        </h1>
        <Button
          onClick={handleCreateArticle}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6 flex items-center gap-2"
        >
          <Plus className="size-4" />
          Create article
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <SearchBox
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Category" />
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

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,auto,auto,auto] gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-700">Article title</div>
          <div className="text-sm font-medium text-gray-700 w-32">Category</div>
          <div className="text-sm font-medium text-gray-700 w-32">Status</div>
          <div className="w-20"></div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {filteredArticles.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No articles found
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="grid grid-cols-[1fr,auto,auto,auto] gap-4 px-6 py-4 hover:bg-gray-50 transition-colors items-center"
              >
                <div className="text-sm text-gray-900 truncate">
                  {article.title}
                </div>
                <div className="text-sm text-gray-700 w-32">
                  {article.category}
                </div>
                <div className="w-32">
                  <span className="inline-flex items-center gap-1.5 text-sm text-green-600">
                    <span className="size-1.5 rounded-full bg-green-600"></span>
                    {article.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 w-20">
                  <button
                    onClick={() => handleEditClick(article)}
                    className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Edit article"
                  >
                    <Pencil className="size-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(article)}
                    className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Delete article"
                  >
                    <Trash2 className="size-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Delete Dialog */}
      <DeleteArticleDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        articleTitle={articleToDelete?.title}
      />
    </div>
  );
}
