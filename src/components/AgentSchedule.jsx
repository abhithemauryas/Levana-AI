export default function AgentSchedule() {

const schedules = [
{ top: "12%", left: "6%" },
{ top: "38%", left: "20%" },
{ top: "58%", left: "18%" },
{ top: "28%", left: "58%" },
{ top: "12%", left: "78%" }
];

const dates = ["11 Jan","12 Jan","13 Jan","14 Jan","15 Jan"];

const times = [
"11:00 AM","11:00 AM","11:00 AM","11:00 AM",
"11:00 AM","11:00 AM","11:00 AM","11:00 AM"
];

return (

<div className="rounded-2xl p-6 relative h-[420px] overflow-hidden
bg-gradient-to-r from-[#3b4657] via-[#59606d] to-[#b5a36b]">

{/* TIME HEADER */}
<div className="grid grid-cols-8 ml-20 text-xs text-gray-200 mb-4">
{times.map((t,i)=>(
<div key={i} className="text-center">{t}</div>
))}
</div>

{/* GRID AREA */}
<div className="relative h-full">

{/* LEFT DATE LABELS */}
<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-200">
{dates.map((d,i)=>(
<div key={i} className="h-[70px] flex items-center">{d}</div>
))}
</div>

{/* VERTICAL GRID LINES */}
<div className="absolute left-20 right-0 top-0 bottom-0 grid grid-cols-8">
{Array.from({length:8}).map((_,i)=>(
<div key={i} className="border-l border-white/20"></div>
))}
</div>

{/* HORIZONTAL GRID LINES */}
<div className="absolute left-20 right-0 top-0 bottom-0 flex flex-col justify-between">
{Array.from({length:5}).map((_,i)=>(
<div key={i} className="border-t border-white/20"></div>
))}
</div>

{/* SCHEDULE CARDS */}
{schedules.map((item,i)=>(
<div
key={i}
style={{ top:item.top, left:item.left }}
className="absolute bg-white rounded-xl px-4 py-3 w-[220px] shadow-md"
>

<p className="text-[11px] text-purple-600 font-semibold">
#CMPIJIA01
</p>

<p className="text-xs text-gray-700">
Campaign Objective Here
</p>

<p className="text-[11px] text-green-600 mt-1">
11:00 AM - 12:10 PM
</p>

</div>
))}

</div>

</div>

);

}