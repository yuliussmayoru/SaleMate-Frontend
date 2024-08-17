
export function SavedOrder() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4 m-4">
            <div className="text-lg font-semibold mb-2 text-center">Saved Order</div>
            <div className="bg-orange-400 p-4 rounded-lg text-white max-w-[150px]">

              <div className="text-center">
                <div className="text-sm">ST00562</div>
                <div className="text-xs">13.00 29/07/24</div>
              </div>

              <div className="text-center bg-[#BF7E4E] rounded-lg">
                <div className="font-semibold mt-2">Alan Walker</div>
                <div className="text-[40px] font-bold">3</div>
                <div className="text-sm">Item(s)</div>
              </div>
            </div>
        </div>
    )
}