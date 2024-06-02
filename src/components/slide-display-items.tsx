
export default function SlideDisplayItem({discount}: any){
    return(
        <div className=" flex-shrink-0">
            <div className="flex flex-col space-y-2 w-[90px] md:w-[200px]">
                <div className="w-[80px] h-[80px] md:w-[200px] md:h-[200px]">
                    <img src="slideimage.jpg" alt="text" />
                </div>
                <div className="text-[6px] pt-4 md:text-[12px]">
                    <span className=" bg-red-700 text-white p-1">{discount}</span>
                    <span className="text-red-700 font-medium">Limited time deal</span>
                </div>
                <div className=" text-xs">
                    Best offers
                </div>
            </div>

        </div>
    )
}