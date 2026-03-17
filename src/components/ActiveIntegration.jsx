import { FaWhatsapp } from "react-icons/fa";
import { SiGooglesheets, SiGooglecalendar } from "react-icons/si";
import { FileSpreadsheet, Video } from "lucide-react";

export default function ActiveIntegration() {
  const data = [
    { name: "WhatsApp API", icon: <FaWhatsapp className="text-green-500 w-5 h-5"/> },
    { name: "Excel", icon: <FileSpreadsheet className="text-green-600 w-5 h-5"/> },
    { name: "Google Sheets", icon: <SiGooglesheets className="text-green-500 w-5 h-5"/> },
    { name: "Google Calendar", icon: <SiGooglecalendar className="text-blue-500 w-5 h-5"/> },
    { name: "Zoom", icon: <Video className="text-blue-500 w-5 h-5"/> }
  ];

  return (
    <div className="col-span-3 bg-black/40 backdrop-blur-xl rounded-2xl p-4">
      <h3 className="text-sm mb-4">Active Integration</h3>

      {data.map((item,i)=>(
        <div key={i} className="bg-white rounded-xl px-4 py-3 mb-3 text-sm text-gray-700 flex items-center gap-3 shadow-md">
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
}