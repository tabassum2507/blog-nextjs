import React from 'react'
import Author from '../../components/_child/author'
import Related from '../../components/_child/related'
import Image from 'next/image'
import Format from '../../layout/Format'

const pages = () => {
  return (
    <div><Article /></div>
  )
}

function Article(){
    return(
    <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                    <Author />
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>Title</h1>

                    <p className='text-gray-500 text-xl text-center'>subtitle</p>

                    <div className="py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        description
                    </div>

                </div>  

                <Related ></Related>
            </section>
        </Format>
    )
}


export default pages


export async function getStaticProps( { params } ){
    const posts = await getPost(params.postId)

    return {
       props : {
            fallback : {
                '/api/posts' : posts
            }
       }
    }
}

export async function getStaticPaths(){
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params : {
                postId : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }

}