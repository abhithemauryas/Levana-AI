export default function LeadMatrix() {

  const data = [
    { label: "Total Leads", width: "85%", color: "bg-[#B7C3D7]" },
    { label: "Total AI Agent", width: "45%", color: "bg-[#F4D35E]" },
    { label: "Total Human Agent", width: "65%", color: "bg-[#F4D35E]" },
    { label: "Total Lead Process", width: "60%", color: "bg-[#B7C3D7]" },
    { label: "Not Interested", width: "40%", color: "bg-[#F6B6B6]" },
    { label: "Re-Scheduled", width: "35%", color: "bg-[#D4B5F9]" },
    { label: "Interested", width: "25%", color: "bg-[#B7E4C7]" },
  ];

  return (
    <div className="col-span-4 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Lead Matrix
      </h3>

      {data.map((item,i)=>(
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
  );
}