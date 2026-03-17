import { ArrowRight } from "lucide-react";

export default function EmployeeCards() {

const employees = [1,2,3];

return (

<div className="col-span-7 bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white">

{/* Employee Cards */}
<div className="grid grid-cols-3 gap-5">

{employees.map((e,i)=>(
<div key={i} className="bg-white rounded-2xl p-4 text-black shadow-sm">

{/* IMAGE */}
<div className="relative bg-gray-200 rounded-xl p-2">
<img
src="https://i.pravatar.cc/200?img=12"
className="rounded-lg w-full h-[170px] object-cover"
/>

{/* AI TAG */}
<div className="absolute top-3 right-3 bg-purple-500 text-white text-[10px] px-2 py-[2px] rounded-full">
AI
</div>
</div>

{/* USERNAME */}
<p className="text-sm mt-3 font-medium">@Username</p>

{/* TONE */}
<div className="flex items-center gap-2 mt-2 text-[10px]">
<span className="text-gray-500">Tone :</span>

<span className="bg-gray-200 px-2 py-[2px] rounded-full">Soft</span>
<span className="bg-gray-200 px-2 py-[2px] rounded-full">Simple</span>
<span className="bg-gray-200 px-2 py-[2px] rounded-full">Straight</span>
</div>

{/* LANGUAGE */}
<div className="flex items-center gap-2 mt-2 text-[10px]">
<span className="text-gray-500">Language :</span>

<span className="bg-gray-200 px-2 py-[2px] rounded-full">English</span>
<span className="bg-gray-200 px-2 py-[2px] rounded-full">Hindi</span>
</div>

{/* BUTTON */}
<button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-300 text-xs font-medium py-2 rounded-full">
View More
</button>

</div>
))}

</div>


{/* Bottom Section */}
<div className="flex items-center justify-between mt-6">

<div className="flex items-center gap-4">

{/* AVATARS */}
<div className="flex -space-x-3">
<img
src="https://i.pravatar.cc/40?img=1"
className="w-8 h-8 rounded-full border-2 border-white"
/>

<img
src="https://i.pravatar.cc/40?img=2"
className="w-8 h-8 rounded-full border-2 border-white"
/>

<img
src="https://i.pravatar.cc/40?img=3"
className="w-8 h-8 rounded-full border-2 border-white"
/>
</div>

<div>
<p className="text-sm font-medium">137 More</p>

<p className="text-xs text-gray-300 max-w-[380px]">
Click here and you can also view the report of every employee working for you including AI
</p>
</div>

</div>

{/* Arrow Button */}
<div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
<ArrowRight size={16}/>
</div>

</div>

</div>

);
}