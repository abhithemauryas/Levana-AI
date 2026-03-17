import { ChevronRight } from "lucide-react";

export default function CampaignStatus() {

const campaigns = [1,2,3,4];

return (
<div className="w-full bg-gradient-to-r from-[#0c1220] via-[#1b1535] to-[#b89c60] p-4 rounded-2xl flex items-center gap-4">

<div className="flex items-center gap-2 text-sm text-gray-300">
Campaign Status
<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
<ChevronRight size={14}/>
</div>
</div>

{campaigns.map((c,i)=>(
<div key={i} className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">

<div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">
C
</div>

<div className="text-xs text-white">
#Campaign_ID
</div>

<div className="px-3 py-1 bg-white/40 text-xs rounded-full">
Status
</div>

</div>
))}

</div>
)
}