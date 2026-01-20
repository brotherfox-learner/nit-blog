import { ArticleManagement } from "../components/admin-page/ArticleManagement";
import { AdminSidebar } from "../components/admin-page/AdminSidebar";

export default function AdminPage() {
    return (
        <div className="flex h-screen bg-gray-50">
            <AdminSidebar activeItem="article" />
            <main className="flex-1 overflow-y-auto p-8 ml-64">
                <ArticleManagement />
            </main>
        </div>
    );
}