export default function ChartSection() {
  return (
    <div className="col-span-9 p-8 rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b1a33] border border-white/5 shadow-2xl shadow-purple-900/20">
      <div className="relative h-[380px]">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-sm pr-4">
          <span>70x</span>
          <span>60x</span>
          <span>50x</span>
          <span>40x</span>
          <span>30x</span>
          <span>20x</span>
          <span>10x</span>
        </div>

        <div className="ml-16 h-full flex flex-col">
          <div className="flex-1 relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gray-600"></div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between pl-4 pr-2">
              {[4,6,10,6,7,5,3,6,8,4,4,5,7,4,6].map((value,i)=>(
                <div key={i} className="flex flex-col items-center gap-1">
                  {Array.from({ length: value }).map((_, j) => (
                    <div
                      key={j}
                      className="w-4 h-4 rounded-full bg-gray-200"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}