import {
  HiOutlineViewGrid,
  HiOutlineUser,
  HiOutlineCog,
} from "react-icons/hi";
import { FiLayers, FiArrowRight } from "react-icons/fi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-[270px] h-screen bg-[#0E1420] p-6 flex flex-col justify-between rounded-3xl border border-white/5">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-400 to-blue-500"></div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Levana</h1>
            <p className="text-xs text-gray-400 -mt-1">Digital</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs mb-3">General Dashboard</p>

        <div className="space-y-2 text-sm">
          <button className="w-full flex items-center gap-3 bg-blue-600/90 hover:bg-blue-600 p-3 rounded-xl font-medium shadow-lg shadow-blue-900/30 transition">
            <HiOutlineViewGrid className="text-lg" />
            <span>General Dashboard</span>
          </button>

          {[
            { name: "All Integration", icon: <MdOutlineIntegrationInstructions /> },
            { name: "General Integration", icon: <MdOutlineIntegrationInstructions /> },
            { name: "Load Management", icon: <FiLayers /> },
            { name: "User Management", icon: <HiOutlineUser /> },
            { name: "Settings", icon: <HiOutlineCog /> },
          ].map((item) => (
            <button
              key={item.name}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 p-3 rounded-xl text-gray-300 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-xs">
                <FiArrowRight />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl text-sm shadow-lg shadow-blue-900/40">
        <p className="font-medium mb-1">Need Help?</p>
        <p className="text-xs text-blue-100 opacity-80">
          Please feel free to contact us anytime.
        </p>
      </div>
    </div>
  );
}