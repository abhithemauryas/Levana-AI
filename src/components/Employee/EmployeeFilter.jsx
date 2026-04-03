export default function EmployeeFilter() {
  return (
    <div className="rounded-full px-6 py-3 flex items-center justify-between flex-wrap gap-3 relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#2f3f63] to-[#7a4b5a] opacity-90"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

      <div className="relative z-10 flex items-center justify-between w-full flex-wrap gap-3">

        {/* LEFT */}
        <h2 className="text-yellow-400 font-semibold">
          14 Employees (AI)
        </h2>

        {/* FILTERS */}
        <div className="flex items-center gap-2 flex-wrap">

          {[
            { label: "Gender", value: "Male" },
            { label: "Category", value: "Post Sales" },
            { label: "Voice Tone", value: "Professional" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs flex items-center gap-2"
            >
              <span className="text-gray-200">{item.label}</span>

              <span className="bg-white/80 text-black px-2 py-[2px] rounded-full text-[10px]">
                {item.value}
              </span>

              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          ))}

          {/* FILTER */}
          <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
            Filter
          </div>

          {/* APPLY */}
          <div className="bg-white/90 text-black px-3 py-1 rounded-full text-xs flex items-center gap-2">
            Apply
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>

        </div>

      </div>
    </div>
  );
}