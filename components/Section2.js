import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import getPost from "../lib/helper"
import fetcher from "../lib/fetcher"

const Section2 = () => {
  


  return (
    <section className="container mx-auto md:px-20 py-10">
       <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
       </div>
    </section>
  )
}

function Post(){
  return(
    <div className="item">
      <div className="images">
         <Link href={"/"}><Image src={"/images/img1.jpg"} className="rounded" alt="image" width={500} height={350}></Image></Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Category</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Published </Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Title</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author/>
                </div>
    </div>
  )
}

export default Section2