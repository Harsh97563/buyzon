import SlideDisplayItem from "./slide-display-items";

const data = [
    { "discountHeading": "Up to 50% off" },
    { "discountHeading": "Up to 70% off" },
    { "discountHeading": "Up to 60% off" },
    { "discountHeading": "Up to 80% off" },
    { "discountHeading": "Up to 75% off" },
    { "discountHeading": "Up to 55% off" },
    { "discountHeading": "Up to 65% off" },
    { "discountHeading": "Up to 90% off" },
    { "discountHeading": "Up to 85% off" },
    { "discountHeading": "Up to 40% off" }
]

export default function SlideDisplay(){
    return (
        <div className="mt-6 md:px-[20px]">
            <div className="bg-white px-4 h-[200px] md:h-[360px] py-2 space-y-2">
                <div className="flex">
                    <div className=" font-bold text-[21px]">Today's Deals</div>
                    <div className=" text-blue-600 pl-2">See all deals</div>
                </div>
                <div className="flex overflow-x-auto w-full space-x-4">
                    {data.map((res) => (
                        <SlideDisplayItem
                        discount = {res.discountHeading}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}