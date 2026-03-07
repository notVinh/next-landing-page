import { ToastContainer } from "react-toastify";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-container">
      {/* Không có Sidebar ở đây */}
      {children}
      <ToastContainer />
    </div>
  );
}
