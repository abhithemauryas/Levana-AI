export default function EmployeeCard() {
  return (
    <div className="bg-white rounded-2xl p-4 text-black shadow-sm">

      {/* IMAGE */}
      <div className="relative bg-gray-100 rounded-xl p-2">
        <img
          src="https://i.pravatar.cc/300?img=12"
          className="rounded-lg w-full h-[170px] object-cover"
        />

        {/* TAG */}
        <div className="absolute top-3 right-3 bg-blue-500 text-white text-[10px] px-2 py-[2px] rounded-full">
          Human
        </div>
      </div>

      {/* USERNAME */}
      <p className="text-sm mt-3 font-medium">@Username</p>

      {/* TONE */}
      <div className="flex items-center gap-2 mt-2 text-[10px]">
        <span className="text-gray-500">Team :</span>

        <span className="bg-gray-200 px-2 py-[2px] rounded-full">
          Support
        </span>
       
      </div>

      {/* LANGUAGE */}
      <div className="flex items-center gap-2 mt-2 text-[10px]">
        <span className="text-gray-500">Language :</span>

        <span className="bg-gray-200 px-2 py-[2px] rounded-full">
          English
        </span>
        <span className="bg-gray-200 px-2 py-[2px] rounded-full">
          Hindi
        </span>
      </div>

      {/* BUTTON */}
      <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-300 text-xs font-medium py-2 rounded-full transition">
        View Profile
      </button>

    </div>
  );
}