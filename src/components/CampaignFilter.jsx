// export default function CampaignFilter() {
//   return (
//     <div className="rounded-full px-6 py-3 flex items-center justify-between flex-wrap gap-3 relative overflow-hidden">

//       {/* BG */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#2f3f63] to-[#7a4b5a] opacity-90"></div>
//       <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

//       <div className="relative z-10 flex items-center justify-between w-full flex-wrap gap-3">

//         {/* LEFT TEXT */}
//         <p className="text-yellow-400 text-sm">
//           Select The Date and Time to View the Pin Data
//         </p>

//         {/* FILTERS */}
//         <div className="flex items-center gap-2 flex-wrap">

//           {["Date", "Day", "Month", "Year"].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs flex items-center gap-2"
//             >
//               <span>{item}</span>
//               <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
//             </div>
//           ))}

//           {/* VIEW ALL */}
//           <div className="bg-white/80 text-black px-4 py-1 rounded-full text-xs font-medium">
//             View All
//           </div>

//           {/* CAMPAIGN TOGGLE */}
//           <div className="bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs flex items-center gap-2">
//             Campaign
//             <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }