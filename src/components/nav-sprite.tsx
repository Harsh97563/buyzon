import { Menu } from "lucide-react";
import { NavSpriteItems } from "./nav-sprite-items";

const NavSpriteData = [
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Today's Deals",
    "Electronics",
    "Prime",
    "Fashion",
    "Customer Service",
    "Home & Kitchen",
    "New Releases",
    "Amazon Pay",
    "Computers",
    "Gift Ideas",
    "Books",
    "Car & Motorbike",
    "Home Improvement"
]

export default function NavSprite(){
    return(
        <div className="w-full h-[30px] md:h-[39px] bg-[#232F3E] overflow-hidden text-white flex items-center pl-2 md:pl-6 md:text-[14px]">
            <div className="flex items-center justify-center">
                <Menu/>
                <div className=" text-[12px] font-normal md:font-bold">All</div>
            </div>
            <div className="flex space-x-2 pl-2 md:space-x-3 items-center">
                {NavSpriteData.map((data) => (
                    <NavSpriteItems children={data} />
                ))}
            </div>

        </div>
    )
}