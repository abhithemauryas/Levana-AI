<!-- import React from "react";
import {
  Search,
  Moon,
  ChevronDown,
  FileSpreadsheet,
  Video,
} from "lucide-react";
import {
  SiWhatsapp,
  SiGooglesheets,
  SiGooglecalendar,
  SiGoogle,
  SiMeta,
} from "react-icons/si";
import { FaInstagram, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineViewGrid,
  HiOutlineDatabase,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineCog,
} from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi"
import { FiFilter } from "react-icons/fi";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F18] text-white flex p-4 gap-4">
      {/* ================= SIDEBAR ================= */}
     <div className="w-[270px] h-screen bg-[#0E1420] p-6 flex flex-col justify-between rounded-3xl border border-white/5">

  {/* TOP SECTION */}
  <div>

    {/* LOGO */}
    <div className="flex items-center gap-3 mb-10">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-400 to-blue-500"></div>
      <div>
        <h1 className="text-lg font-semibold tracking-wide">Levana</h1>
        <p className="text-xs text-gray-400 -mt-1">Digital</p>
      </div>
    </div>

    {/* SECTION TITLE */}
    <p className="text-gray-400 text-xs mb-3">General Dashboard</p>

    <div className="space-y-2 text-sm">

      {/* ACTIVE ITEM */}
      <button className="w-full flex items-center gap-3 bg-blue-600/90 hover:bg-blue-600 p-3 rounded-xl font-medium shadow-lg shadow-blue-900/30 transition">
        <HiOutlineViewGrid className="text-lg" />
        <span>General Dashboard</span>
      </button>

      {/* NORMAL ITEMS */}
      {/* <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:bg-white/5 transition">
        <HiOutlineDatabase className="text-lg" />
        <span>Data Pool</span>
      </button>

      <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:bg-white/5 transition">
        <FiLayers className="text-lg" />
        <span>Sectors</span>
      </button> */}

      {/* <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:bg-white/5 transition">
        <HiOutlineClock className="text-lg" />
        <span>Schedules</span>
      </button> */}

      {/* GRAY CARD STYLE ITEMS */}
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

  {/* BOTTOM HELP CARD */}
  <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl text-sm shadow-lg shadow-blue-900/40">
    <p className="font-medium mb-1">Need Help?</p>
    <p className="text-xs text-blue-100 opacity-80">
      Please feel free to contact us anytime.
    </p>
  </div>

</div>

      {/* ================= MAIN AREA ================= */}
      <div className="flex-1 space-y-6">
        {/* ================= HEADER ================= */}
        <div className="w-full px-8 py-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#0c1220] via-[#1b1535] to-[#3a0d2f]">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold">Welcome</h2>
            <p className="text-sm text-gray-300">
              <span className="text-blue-400 font-medium">@Username</span>{" "}
              hoping you are doing great :)
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md hover:bg-white/20 transition cursor-pointer">
              Dashboard · All
              <ChevronDown size={16} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer">
              <Search size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer">
              <Moon size={18} />
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm">USERNAME</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-12 gap-4">
          {/* ===== BIG CHART ===== */}
          <div className="col-span-9 p-8 rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b1a33] border border-white/5 shadow-2xl shadow-purple-900/20">
            <div className="relative h-[380px]">
              {/* Y AXIS LABELS */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-sm pr-4">
                <span>70x</span>
                <span>60x</span>
                <span>50x</span>
                <span>40x</span>
                <span>30x</span>
                <span>20x</span>
                <span>10x</span>
              </div>

              {/* GRAPH CONTAINER */}
              <div className="ml-16 h-full flex flex-col">
                {/* TOP SPACE */}
                <div className="flex-1 relative">
                  {/* LEFT VERTICAL LINE */}
                  <div className="absolute left-0 top-0 h-full w-px bg-gray-600"></div>

                  {/* DASHED GRID LINE (60x example) */}
                  <div className="absolute top-[20%] left-0 w-full border-t border-dashed border-gray-600"></div>

                  {/* DOTS */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between pl-4 pr-2">
                    {[
                      4, 6, 10, 6, 7, 5, 3, 6, 8, 4, 4, 5, 7, 4, 6, 10, 6, 7, 5,
                      3, 5, 3, 7, 5, 8, 3, 6,
                    ].map((value, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        {Array.from({ length: value }).map((_, j) => (
                          <div
                            key={j}
                            className={`w-4 h-4 rounded-full ${
                              i === 2
                                ? "bg-blue-500 shadow-lg shadow-blue-500/40"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM X AXIS LINE */}
                <div className="border-t border-gray-600 mt-4 pt-4 pl-4">
                  {/* DATES */}
                  <div className="flex justify-between text-gray-400 text-sm">
                    {[
                      "Jan 01",
                      "Jan 02",
                      "Jan 03",
                      "Jan 04",
                      "Jan 05",
                      "Jan 06",
                      "Jan 07",
                      "Jan 08",
                      "Jan 09",
                      "Jan 10",
                      "Jan 11",
                      "Jan 12",
                      "Jan 13",
                      "Jan 14",
                      "Jan 15",
                      "Jan 16",
                      "Jan 17",
                      "Jan 18",
                    ].map((date, i) => (
                      <span
                        key={i}
                        className={`whitespace-nowrap ${
                          i === 2 ? "text-blue-500 font-medium" : ""
                        }`}
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT PROFILE ===== */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden h-[360px] bg-gray-200">
              <img
                src="https://i.pravatar.cc/500?img=12"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white/20 text-black rounded-2xl p-4 flex justify-between items-center">
              <div>
                <p className="text-blue-600 font-semibold">@JimButton</p>
                <p className="text-xs text-gray-600">HR Admin</p>
              </div>
              <button className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#1b1e3a] to-[#5b1a6b]">
          <div className="grid grid-cols-12 gap-4">
            {/* ===== ACTIVE INTEGRATION ===== */}
            <div className="col-span-3 bg-black/40 backdrop-blur-xl rounded-2xl p-4">
              <h3 className="text-sm mb-4">Active Integration</h3>

              {[
                {
                  name: "WhatsApp API",
                  icon: <FaWhatsapp className="text-green-500 w-5 h-5" />,
                },
                {
                  name: "Excel",
                  icon: <FileSpreadsheet className="text-green-600 w-5 h-5" />,
                },
                {
                  name: "Google Sheets",
                  icon: <SiGooglesheets className="text-green-500 w-5 h-5" />,
                },
                {
                  name: "Google Calendar",
                  icon: <SiGooglecalendar className="text-blue-500 w-5 h-5" />,
                },
                {
                  name: "Zoom",
                  icon: <Video className="text-blue-500 w-5 h-5" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-4 py-3 mb-3 text-sm text-gray-700 flex items-center gap-3 shadow-md hover:scale-[1.02] transition"
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>

            {/* ===== LEAD SOURCE ===== */}
           <div className="col-span-5 bg-black/30 backdrop-blur-xl rounded-2xl p-4 flex flex-col justify-between border border-white/5">

  {/* HEADER */}
 {/* HEADER */}
<div className="flex items-center justify-between mb-4">
  <h3 className="text-sm text-gray-300">Lead Source</h3>

  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs transition">
    <span>Filter</span>
    <FiFilter className="text-sm" />
   
  </button>
</div>


  {/* BARS */}
  <div className="flex items-end justify-between h-[260px]">
    {[
      { height: "45%", icon: <FaInstagram className="text-pink-500" /> },
      { height: "75%", icon: <SiMeta className="text-blue-500" /> },
      { height: "35%", icon: <FaFacebookMessenger className="text-blue-400" /> },
      { height: "65%", icon: <SiWhatsapp className="text-green-500" /> },
      { height: "85%", icon: <SiGoogle className="text-red-500" /> },
      { height: "20%" },
      { height: "20%" },
    ].map((bar, i) => (
      <div
        key={i}
        className="w-[45px] bg-white rounded-2xl relative flex items-start justify-center"
        style={{ height: bar.height }}
      >
        <div className="absolute top-2 text-sm">
          {bar.icon}
        </div>
      </div>
    ))}
  </div>

  {/* FOOTER TEXT */}
  <p className="text-xs text-gray-400 mt-4">
    Campaign Details <br />
    Look more about the campaign who brought the lead for you
  </p>
</div>


            {/* ===== LEAD MATRIX ===== */}
            <div className="col-span-4 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col justify-between">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Lead Matrix
              </h3>

              {[
                { label: "Total Leads", width: "85%", color: "bg-[#B7C3D7]" },
                {
                  label: "Total AI Agent",
                  width: "45%",
                  color: "bg-[#F4D35E]",
                },
                {
                  label: "Total Human Agent",
                  width: "65%",
                  color: "bg-[#F4D35E]",
                },
                {
                  label: "Total Lead Process",
                  width: "60%",
                  color: "bg-[#B7C3D7]",
                },
                {
                  label: "Not Interested",
                  width: "40%",
                  color: "bg-[#F6B6B6]",
                },
                { label: "Re-Scheduled", width: "35%", color: "bg-[#D4B5F9]" },
                { label: "Interested", width: "25%", color: "bg-[#B7E4C7]" },
              ].map((item, i) => (
                <div key={i} className="mb-3">
                  <p className="text-xs text-gray-600 mb-1">{item.label}</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} -->
