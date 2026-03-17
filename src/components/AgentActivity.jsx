export default function AgentActivity(){

const users = [1,2,3,4];

return(

<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 h-full">

<div className="flex justify-between items-center mb-4">
<p className="text-sm text-gray-300">
Active AI & Real Calling Agent
</p>

<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
→
</div>
</div>

<div className="flex gap-4 mb-3 text-sm">
<button className="text-blue-400">On Site Agents</button>
<button className="text-gray-400">AI Agents</button>
</div>

<div className="space-y-3 h-[250px] overflow-y-auto pr-2">

{users.map((u,i)=>(
<div key={i} className="bg-white text-gray-700 rounded-xl px-4 py-3 flex items-center gap-3">

<img
src="https://i.pravatar.cc/40"
className="w-8 h-8 rounded-full"
/>

<p className="text-sm">@Username</p>

</div>
))}

</div>

</div>

)

}