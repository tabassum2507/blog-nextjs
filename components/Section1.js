import Link from "next/link"
const Section1 = () => {
  
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

  return (
    <section className="py-16" style={bg} >
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Slide />
            
        </div>
    </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                <img src={"/images/img1.jpg"} width={600} height={600} />
                </Link>
            </div>

            <div className="info flex justify-center flex-col">
               <div className="cat">
                <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                <Link href={"/"} className="text-gray-800 hover:text-gray-600"> - July, 2022</Link>
               </div>

               <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">title</Link>
                </div>

                <p className="text-gray-500 py-3">
                    description
                </p>
                <h1>Author</h1>
            </div>
        </div>
    )
}

export default Section1