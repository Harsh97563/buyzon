
import './App.css'
import Carousel from './components/Carousel'
import CardSection from './components/card-section'
import SlideDisplay from './components/slide-display'
const data = [
  {
      "type": "grid",
      "heading": "Appliances for your home | Up to 55% off",
      "firstImgSrc": "",
      "firstImgHeading": "Air conditioners",
      "secondImgSrc": "",
      "secondImgHeading": "Refrigerators",
      "thirdImgSrc": "",
      "thirdImgHeading": "Microwaves",
      "fourthImgSrc": "",
      "fourthImgHeading": "Washing machines"
  },
  {
      "type": "grid",
      "heading": "Electronics Sale | Up to 50% off",
      "firstImgSrc": "",
      "firstImgHeading": "Televisions",
      "secondImgSrc": "",
      "secondImgHeading": "Laptops",
      "thirdImgSrc": "",
      "thirdImgHeading": "Smartphones",
      "fourthImgSrc": "",
      "fourthImgHeading": "Speakers"
  },
  {
      "type": "grid",
      "heading": "Home Decor | Starting at ₹199",
      "firstImgSrc": "",
      "firstImgHeading": "Wall art",
      "secondImgSrc": "",
      "secondImgHeading": "Rugs",
      "thirdImgSrc": "",
      "thirdImgHeading": "Curtains",
      "fourthImgSrc": "",
      "fourthImgHeading": "Cushions"
  },
  {
      "type": "grid",
      "heading": "Furniture Fest | Up to 40% off",
      "firstImgSrc": "",
      "firstImgHeading": "Sofas",
      "secondImgSrc": "",
      "secondImgHeading": "Dining tables",
      "thirdImgSrc": "",
      "thirdImgHeading": "Beds",
      "fourthImgSrc": "",
      "fourthImgHeading": "Wardrobes"
  },
  {
      "type": "grid",
      "heading": "Garden Essentials | Up to 30% off",
      "firstImgSrc": "",
      "firstImgHeading": "Lawn mowers",
      "secondImgSrc": "",
      "secondImgHeading": "Garden furniture",
      "thirdImgSrc": "",
      "thirdImgHeading": "Planters",
      "fourthImgSrc": "",
      "fourthImgHeading": "Outdoor lighting"
  },
  {
      "type": "grid",
      "heading": "Kitchen Appliances | Starting at ₹299",
      "firstImgSrc": "",
      "firstImgHeading": "Cookware",
      "secondImgSrc": "",
      "secondImgHeading": "Blenders",
      "thirdImgSrc": "",
      "thirdImgHeading": "Toasters",
      "fourthImgSrc": "",
      "fourthImgHeading": "Coffee makers"
  },
  {
      "type": "grid",
      "heading": "Fitness Equipment | Up to 35% off",
      "firstImgSrc": "",
      "firstImgHeading": "Treadmills",
      "secondImgSrc": "",
      "secondImgHeading": "Dumbbells",
      "thirdImgSrc": "",
      "thirdImgHeading": "Exercise bikes",
      "fourthImgSrc": "",
      "fourthImgHeading": "Yoga mats"
  },
  {
      "type": "grid",
      "heading": "Office Supplies | Starting at ₹149",
      "firstImgSrc": "",
      "firstImgHeading": "Desks",
      "secondImgSrc": "",
      "secondImgHeading": "Office chairs",
      "thirdImgSrc": "",
      "thirdImgHeading": "Lamps",
      "fourthImgSrc": "",
      "fourthImgHeading": "Stationery"
  }
]
const datatwo = [
  {
      "type": "flex",
      "heading": "Minimum 50% off | Indoor plants"
  },
  {
      "type": "flex",
      "heading": "Special Deals | Electronics Clearance"
  },
  {
      "type": "flex",
      "heading": "Fashion Fiesta | Up to 70% off"
  },
  {
      "type": "flex",
      "heading": "Home Essentials | Big Savings"
  }
]

function App() {

  return (
    <>
      <div className='flex flex-col z-0 w-full md:w-[1500px] mx-auto'
      >
        <div className='relative z-20'>
          <Carousel/>
        </div>
        <div className='flex mt-12 md:mt-64 z-30'>
          <CardSection data={data} rows={2}/>
        </div>
        <SlideDisplay/> 
        <SlideDisplay/>
        <CardSection data={datatwo} rows={1} />

      </div>
    </>
  )
}

export default App
