import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

const Section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
    <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

    <Post />
    </section>


  )
}

function Post() {
  return(
    <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src={"/images/img1.jpg"} width={600} height={400} alt="logo" /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}className="text-orange-600 hover:text-orange-800">category</Link>
                    <Link href={"/"}className="text-gray-800 hover:text-gray-600">- published</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">title</Link>
                </div>
                <p className="text-gray-500 py-3">
                </p>
                <Author />
            </div>
        </div>
  )
}

export default Section3