import Sidebar from "../components/Sidebar";


export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F18] text-white flex p-4 gap-4">
      <Sidebar />

      <div className="flex-1 space-y-6">
        {children}
      </div>
    </div>
  );
}