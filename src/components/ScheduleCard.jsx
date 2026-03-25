export default function ScheduleCard({ style }) {
  return (
    <div
      style={style}
      className="absolute bg-white text-black rounded-xl px-4 py-3 w-[220px] shadow-md border border-blue-200"
    >
      <p className="text-[10px] text-purple-500 font-medium mb-1">
        #CMPIJIA01
      </p>

      <p className="text-xs font-medium text-gray-800 mb-1">
        Campaign Objective Here
      </p>

      <p className="text-[10px] text-green-500">
        11:00 AM - 12:10 PM
      </p>
    </div>
  );
}