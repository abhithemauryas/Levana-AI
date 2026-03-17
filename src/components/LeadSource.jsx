import { FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { SiMeta, SiWhatsapp, SiGoogle } from "react-icons/si";
import { FiFilter } from "react-icons/fi";

export default function LeadSource() {
  const bars = [
    { height: "45%", icon: <FaInstagram className="text-pink-500" /> },
    { height: "75%", icon: <SiMeta className="text-blue-500" /> },
    { height: "35%", icon: <FaFacebookMessenger className="text-blue-400" /> },
    { height: "65%", icon: <SiWhatsapp className="text-green-500" /> },
    { height: "85%", icon: <SiGoogle className="text-red-500" /> },
    { height: "20%" },
    { height: "20%" },
  ];

  return (
    <div className="col-span-5 bg-black/30 backdrop-blur-xl rounded-2xl p-4 flex flex-col justify-between border border-white/5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-gray-300">Lead Source</h3>

        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs">
          Filter <FiFilter />
        </button>
      </div>

      <div className="flex items-end justify-between h-[260px]">
        {bars.map((bar,i)=>(
          <div key={i} className="w-[45px] bg-white rounded-2xl relative flex items-start justify-center" style={{height:bar.height}}>
            <div className="absolute top-2 text-sm">{bar.icon}</div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Campaign Details <br />
        Look more about the campaign who brought the lead for you
      </p>
    </div>
  );
}