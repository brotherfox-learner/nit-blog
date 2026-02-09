import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * ProtectedRoute - protect routes that require authentication (and optional role)
 */
export function ProtectedRoute({
  children,
  requiredRole = null,
  redirectTo = "/login",
}) {
  const { loading, isLoggedIn, profile } = useAuth();
  const location = useLocation();

  // 1) รอให้ Supabase restore session ก่อน (กัน refresh แล้วเด้ง)
  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  // 2) ยังไม่ login -> ส่งไป login พร้อมจำหน้าที่จะเข้า
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  // 3) เช็ค role จาก profile (ไม่ใช่ user)
  if (requiredRole && profile?.role !== requiredRole) {
    if (requiredRole === "admin") return <Navigate to="/member" replace />;
    return <Navigate to="/" replace />;
  }

  return children;
}

export function AdminRoute({ children }) {
  return <ProtectedRoute requiredRole="admin">{children}</ProtectedRoute>;
}

export function MemberRoute({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
