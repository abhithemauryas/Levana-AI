import { Search, Moon, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full px-8 py-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#0c1220] via-[#1b1535] to-[#3a0d2f]">
      <div>
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="text-sm text-gray-300">
          <span className="text-blue-400 font-medium">@Username</span> hoping
          you are doing great :)
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md">
          Dashboard · All
          <ChevronDown size={16} />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
          <Search size={18} />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
          <Moon size={18} />
        </div>

        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
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
  );
}