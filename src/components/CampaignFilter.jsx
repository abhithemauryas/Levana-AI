import { ChevronDown, LayoutGrid, Calendar } from "lucide-react";

export default function CampaignFilter() {
  return (
    <div className="relative rounded-full px-6 py-3 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#2f3f63] to-[#7a4b5a] opacity-90"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">

        {/* LEFT TEXT */}
        <p className="text-yellow-400 text-sm font-medium">
          Select The Date and Time to View the Pin Data
        </p>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 flex-wrap">

          {/* VIEW TOGGLE (GRID / CALENDAR) */}
          <div className="flex items-center bg-white/80 rounded-full p-1">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
              <LayoutGrid size={14} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600">
              <Calendar size={14} />
            </div>
          </div>

          {/* FILTER PILLS */}
          {[
            { label: "Day", value: "09" },
            { label: "Month", value: "09" },
            { label: "Year", value: "09" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/80 text-black px-4 py-1.5 rounded-full text-xs shadow-sm"
            >
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium">{item.value}</span>

              <div className="w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full">
                <ChevronDown size={10} />
              </div>
            </div>
          ))}

          {/* VIEW SCHEDULED */}
          <div className="flex items-center gap-2 bg-white/80 text-black px-4 py-1.5 rounded-full text-xs shadow-sm">
            View Scheduled
          </div>

          {/* CAMPAIGN TOGGLE */}
          <div className="flex items-center gap-2 bg-white/80 text-black px-4 py-1.5 rounded-full text-xs shadow-sm">
            Campaign
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
}