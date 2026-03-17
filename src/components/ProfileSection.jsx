export default function ProfileSection() {
  return (
    <div className="col-span-3 flex flex-col gap-4">
      <div className="rounded-3xl overflow-hidden h-[360px] bg-gray-200">
        <img
          src="https://i.pravatar.cc/500?img=12"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-white/20 text-black rounded-2xl p-4 flex justify-between items-center">
        <div>
          <p className="text-blue-600 font-semibold">@JimButton</p>
          <p className="text-xs text-gray-600">HR Admin</p>
        </div>
        <button className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  );
}