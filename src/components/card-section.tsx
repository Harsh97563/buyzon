import Card from "./card";


export default function CardSection({data, rows}: any){
    return (
            <div className={`grid grid-cols-3 w-full md:grid-cols-4 mt-6 grid-rows-${rows} gap-x-5 gap-y-5 md:px-[20px]`}>
                {data.map((res:any) => (
                    <Card
                    type = {res.type}
                    heading = {res.heading}
                    firstImgHeading = {res.firstImgHeading}
                    secondImgHeading = {res.secondImgHeading}
                    thirdImgHeading = {res.thirdImgHeading}
                    fourthImgHeading = {res.fourthImgHeading}
                    />
                ))}
            </div>

    )
}