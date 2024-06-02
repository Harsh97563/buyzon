
export default function Footer(){
    const scrollToTop = ()=> {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <div className=" text-white mt-24">
            <button className="bg-[#0F1111] w-full h-[49px] flex items-center justify-center"
            onClick={scrollToTop}
            >
                Back To Top
            </button>
            <div className="flex justify-center space-x-16 pt-10 h-[320px] bg-[#232F3E]">
                <div>
                    <h1 className=" font-bold">Get to Know Us</h1>
                </div>
                <div>
                    <h1  className=" font-bold">Connect with Us</h1>
                </div>
                <div>
                    <h1  className=" font-bold">Make Money with Us</h1>
                </div>
                <div>
                    <h1 className=" font-bold">Let Us Help You</h1>
                </div>
            </div>
        </div>
    )
}