export default function AddEmployeeCard() {
  return (
    <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center h-[300px] text-center">

      <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xl font-bold mb-2">
        +
      </div>

      <p className="text-xs text-gray-300 px-4">
        Create new AI Employee for your needs
      </p>

    </div>
  );
}