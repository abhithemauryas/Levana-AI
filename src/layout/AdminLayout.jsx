import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="h-screen bg-[#0B0F18] text-white flex p-4 gap-4 overflow-hidden">

      {/* ===== SIDEBAR (FIXED + NO SCROLL) ===== */}
      <div className="w-[270px] h-full flex-shrink-0">
        <Sidebar />
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* HEADER (FIXED) */}
        <Header />

        {/* CONTENT (ONLY THIS SCROLLS) */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 no-scrollbar">
          <Outlet />
        </div>

      </div>

    </div>
  );
}