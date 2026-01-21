import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * ProtectedRoute - Component สำหรับป้องกันการเข้าถึง route ที่ต้องการ authentication
 * @param {ReactNode} children - Component ที่ต้องการป้องกัน
 * @param {string} requiredRole - Role ที่ต้องการ (optional: "admin", "user")
 * @param {string} redirectTo - Path ที่จะ redirect ถ้าไม่มีสิทธิ์ (default: "/login")
 */
export function ProtectedRoute({ 
  children, 
  requiredRole = null, 
  redirectTo = "/login" 
}) {
  const { isLoggedIn, user } = useAuth();

  // ถ้ายังไม่ login ให้ redirect ไป login page
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  // ถ้ากำหนด requiredRole แต่ user ไม่มี role ที่ต้องการ
  if (requiredRole && user?.role !== requiredRole) {
    // ถ้าเป็น user พยายามเข้า admin page ให้ไปที่ member page
    if (requiredRole === "admin") {
      return <Navigate to="/member" replace />;
    }
    // กรณีอื่นๆ ให้ไปที่ home
    return <Navigate to="/" replace />;
  }

  // ถ้าผ่านการตรวจสอบทั้งหมด ให้แสดง children
  return children;
}

/**
 * AdminRoute - Shorthand สำหรับ route ที่ต้องการ admin role
 */
export function AdminRoute({ children }) {
  return (
    <ProtectedRoute requiredRole="admin">
      {children}
    </ProtectedRoute>
  );
}

/**
 * MemberRoute - Shorthand สำหรับ route ที่ต้องการ login (ทุก role)
 */
export function MemberRoute({ children }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}
