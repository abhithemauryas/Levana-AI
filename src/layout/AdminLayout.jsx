import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="h-screen bg-[#0B0F18] text-white">

      {/* SIDEBAR (FIXED + INDEPENDENT SCROLL) */}
      <div className="fixed left-4 top-4 bottom-4 w-[270px]">
        <div className="h-full overflow-y-auto no-scrollbar">
          <Sidebar />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-[290px] h-full flex flex-col p-4 gap-4">

        {/* HEADER (FIXED INSIDE RIGHT) */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* CONTENT SCROLL */}
        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          <Outlet />
        </div>

      </div>

    </div>
  );
}