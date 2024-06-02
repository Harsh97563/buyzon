import {  ChevronLeft, ChevronRight } from "lucide-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e:any) => e.preventDefault();
const imgSrc = [
    <img src="banner.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="banner2.jpg" onDragStart={handleDragStart} role="presentation"/>,
    <img src="banner3.jpg" onDragStart={handleDragStart} role="presentation" />
]

export default function Carousel(){

   return (
        <div className="absolute w-full md:w-[1500px]">
            <div className="absolute z-20 border w-full h-full bg-gradient-to-b from-transparent to-[#E3E6E6]"/>
            <AliceCarousel
            infinite
            autoPlay
            mouseTracking
            items={imgSrc}
            animationDuration={2300}
            disableDotsControls
            renderPrevButton={()=> (
                <button className="absolute w-24 h-20 md:h-60 z-30 top-0 left-0"><ChevronLeft/></button>
            )}
            renderNextButton={()=> (
                <button className="absolute h-20 w-24 md:h-60 z-30 top-0 md:-right-10 -right-[72px]"><ChevronRight/></button>
            )}
            />
        </div>
    )
}