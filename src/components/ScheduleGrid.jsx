import ScheduleCard from "./ScheduleCard";

export default function ScheduleGrid() {

  const cards = [
    { top: "10%", left: "8%" },
    { top: "25%", left: "35%" },
    { top: "25%", left: "60%" },
    { top: "40%", left: "70%" },
    { top: "55%", left: "10%" },
    { top: "55%", left: "30%" },
    { top: "70%", left: "35%" },
    { top: "70%", left: "65%" },
  ];

  const times = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06",
  ];

  const days = [
    "11 Jan",
    "12 Jan",
    "13 Jan",
    "14 Jan",
    "15 Jan",
    "16 Jan",
    "17 Jan",
  ];

  return (
    <div className="relative mt-4 rounded-3xl p-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#3b4b6b] to-[#8a4c5c] opacity-90"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

      <div className="relative z-10">

        {/* TIME HEADER */}
        <div className="ml-16 grid grid-cols-8 text-xs text-gray-300 mb-3">
          {times.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="flex">

          {/* LEFT DAYS */}
          <div className="w-16 flex flex-col justify-between text-xs text-gray-300">
            {days.map((d, i) => (
              <span key={i} className="h-[80px] flex items-start">
                {d}
              </span>
            ))}
          </div>

          {/* GRID */}
          <div className="flex-1 relative">

            {/* HORIZONTAL LINES */}
            {days.map((_, i) => (
              <div
                key={i}
                className="h-[80px] border-b border-white/10"
              />
            ))}

            {/* VERTICAL LINES */}
            <div className="absolute inset-0 grid grid-cols-8">
              {times.map((_, i) => (
                <div
                  key={i}
                  className="border-r border-white/10"
                />
              ))}
            </div>

            {/* CARDS */}
            {cards.map((item, i) => (
              <ScheduleCard key={i} style={item} />
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}