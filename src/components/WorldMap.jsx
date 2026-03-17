export default function WorldMap(){

return(

<div className="col-span-5 bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white">

{/* Header */}
<div className="flex items-center justify-between mb-4">
<p className="text-sm text-gray-300">Lead World Wide</p>

{/* Toggle */}
<div className="w-10 h-5 bg-white/30 rounded-full relative">
<div className="w-4 h-4 bg-blue-500 rounded-full absolute top-[2px] right-[2px]"></div>
</div>
</div>

{/* Map */}
<div className="flex justify-center items-center">
<img
src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
className="w-full max-w-[520px] opacity-80"
/>
</div>

</div>

)

}