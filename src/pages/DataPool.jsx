import { MoreVertical, ChevronDown } from "lucide-react";


export default function DataPool() {
  const rows = new Array(12).fill(0);

  // 🔹 Reusable Pill Component
  const Pill = ({ text, textColor = "text-black" }) => (
    <div className="flex items-center justify-between bg-white/90 rounded-full px-3 py-1 text-xs min-w-[140px]">
      <span className={textColor}>{text}</span>

      {/* Blue Dropdown Button */}
      <div className="ml-2 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full">
        <ChevronDown size={10} />
      </div>
    </div>
  );

  return (
    <>
      <div className="rounded-3xl p-5 text-white relative overflow-hidden">
     
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#2f3f63] to-[#7a4b5a] opacity-90"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

      <div className="relative z-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">

          <h2 className="text-yellow-400 font-semibold text-lg">
            7925 Leads
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Device",
              "Assigned To",
              "Sector",
              "Lead Status",
              "Lead Type",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-white/20"
              >
                <span className="text-gray-200">{item}</span>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>

        </div>

        {/* TABLE */}
        <div className="w-full overflow-x-auto">

          <table className="w-full text-sm border-collapse">

            {/* HEADER */}
            <thead>
              <tr className="text-gray-300 text-xs border-b border-white/20">

                {[
                  "",
                  "Unique ID",
                  "Name",
                  "Number",
                  "Interested In",
                  "Assigned To",
                  "Sector",
                  "Status",
                  "",
                ].map((head, i) => (
                  <th
                    key={i}
                    className="text-left py-3 px-4 border-r border-white/10 last:border-r-0"
                  >
                    {head}
                  </th>
                ))}

              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {rows.map((_, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >

                  <td className="px-4 py-3 border-r border-white/10">
                    <input type="radio" />
                  </td>

                  <td className="px-4 border-r border-white/10 text-gray-200">
                    #HashCodeForMapping
                  </td>

                  <td className="px-4 border-r border-white/10 text-gray-300">
                    @UserID
                  </td>

              <td className="px-4 border-r border-white/10 text-gray-300 whitespace-nowrap min-w-[100px]">
      +91 9876543214
      </td>

                  {/* Interested */}
                  <td className="px-4 border-r border-white/10">
                    <Pill text="Distributorship" />
                  </td>

                  {/* Assigned */}
                  <td className="px-4 border-r border-white/10">
                    <Pill text="Harsh Jaiswal" />
                  </td>

                  {/* Sector */}
                  <td className="px-4 border-r border-white/10">
                    <Pill text="P3SBIN43" textColor="text-blue-600" />
                  </td>

                  {/* Status */}
                  <td className="px-4 border-r border-white/10">
                    <Pill text="Interested" textColor="text-blue-600" />
                  </td>

                  {/* ACTION */}
                  <td className="px-4 text-right">
                    <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
                      <MoreVertical size={16} />
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-6 text-xs text-gray-300">

          <div className="bg-white/20 px-3 py-1 rounded-full border border-white/20">
            Display 10 Out of 100
          </div>

          <div className="flex items-center gap-3">

            <button className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
              {"<"}
            </button>

            <div>1 2 3 4 ... 794</div>

            <button className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
              {">"}
            </button>

          </div>

        </div>

      </div>
    </div> 
    </>
 
  );
}