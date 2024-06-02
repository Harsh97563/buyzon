

export default function Card({
    type,
    heading,
    firstImgHeading,
    secondImgHeading,
    thirdImgHeading,
    fourthImgHeading
}:any){
    return (
        <div className="bg-white flex flex-col md:space-y-3 w-[33vw] md:w-[350px] px-5 py-4">
            <h1 className=" font-bold text-[8px] md:text-[21px] md:h-24">{heading}</h1>
            <div className={`${type === "grid" ? "grid": "hidden"}  grid-cols-2 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-9 w-full h-full`}>
                <div className=" text-[6px] md:text-[12px] font-medium">
                    <img src="/firstsection.jpg" alt="test"  />
                    {firstImgHeading}
                </div>
                <div className=" text-[6px] md:text-[12px] font-medium">
                    <img src="/firstsection.jpg" alt="test"  />
                    {secondImgHeading}
                </div>
                <div className=" text-[6px] md:text-[12px] font-medium">
                    <img src="/firstsection.jpg" alt="test"  />
                    {thirdImgHeading}
                </div>
                <div className=" text-[6px] md:text-[12px] font-medium">
                    <img src="/firstsection.jpg" alt="test"  />
                    {fourthImgHeading}
                </div>
            </div>
            <div className={`${type === "flex" ? "flex": "hidden"} `}>
                <img src="bigImage.jpg" alt="image" />
            </div>
            <div className=" text-blue-600 text-[6px] md:text-sm">
                See more
            </div>
        </div>
    )
}