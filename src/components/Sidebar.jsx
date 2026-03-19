import { NavLink } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineUser,
  HiOutlineCog,
} from "react-icons/hi";
import { FiLayers, FiArrowRight, FiClock } from "react-icons/fi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";

export default function Sidebar() {

  const topMenu = [
    { name: "Dashboard", icon: <HiOutlineViewGrid />, path: "/" },
    { name: "Data Pool", icon: <BsBarChart />, path: "/data-pool" },
    { name: "Real Time Campaign", icon: <FiClock />, path: "/realtime" },
    { name: "Scheduled Campaign's", icon: <FiClock />, path: "/scheduled" },
    { name: "All Employees", icon: <HiOutlineUser />, path: "/employees" },
    { name: "All Ai Agents", icon: <FiLayers />, path: "/ai-agents" },
    { name: "All Organization", icon: <FiLayers />, path: "/organization" },
    { name: "All Projects", icon: <FiLayers />, path: "/projects" },
    { name: "AI Integration", path: "/ai-integration" },
    { name: "General Integration", path: "/general-integration" },
    { name: "Lead Management", path: "/lead-management" },
    { name: "User Management", path: "/user-management" },
    { name: "Settings", path: "/settings" },
  ];

  // const bottomMenu = [
  //   { name: "AI Integration", path: "/ai-integration" },
  //   { name: "General Integration", path: "/general-integration" },
  //   { name: "Lead Management", path: "/lead-management" },
  //   { name: "User Management", path: "/user-management" },
  //   { name: "Settings", path: "/settings" },
  // ];

  return (
  <div className="w-full bg-[#0E1420] p-6 flex flex-col justify-between rounded-3xl border border-white/5">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            VOK
          </h1>
        </div>

        <p className="text-gray-400 text-xs mb-3">General Dashboard</p>

        {/* TOP MENU */}
        <div className="space-y-2">

          {topMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl text-sm transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}

        </div>

        {/* BOTTOM MENU */}
        {/* <div className="mt-6 space-y-2">

          {bottomMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 p-3 rounded-xl text-gray-300 text-sm transition"
            >
              <span>{item.name}</span>

              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600">
                <FiArrowRight size={14} />
              </div>
            </NavLink>
          ))}

        </div> */}

      </div>

      {/* HELP CARD */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl text-sm shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Need Help?</p>

          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
            <FiArrowRight size={14}/>
          </div>
        </div>

        <p className="text-xs text-blue-100 opacity-80 leading-relaxed">
          Please feel free to contact us at anytime, we have team of professionals working 24x7 to make your experience smooth and hassle free
        </p>
      </div>

    </div>
  );
}