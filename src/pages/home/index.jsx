import { useState } from "react";
import Button from "../../components/Button";
import Post from "../../components/Post";
import { DUMMY_POSTS } from "../../utils/consts/dummy-data";

export default function Home(){
    const [isClicked, setIsClicked] = useState(false)
    const [text,setText] = useState('')

    return <main className="container relative ">
        <section className=" p-2 ">
            <div className="p-5 pt-1 flex flex-col justify-center ">
                <h2 className="text-white my-2 ml-3">
                    Bize bir mesaj bırakın.
                </h2>
                <textarea
                    placeholder="Buraya yazın.."
                    onClick={() => setIsClicked(true)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full max-w-3xl h-52 rounded-lg resize-none indent-5 p-2 lg:tracking-wide text-xl focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />
            {isClicked &&
            <div className="flex justify-end mr-5">
                <Button onClick={() => console.log(text)}>Gönder</Button>
            </div>
            }
            </div> 
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {DUMMY_POSTS.map((post,key) =>{
            return (<Post data={post} key={key}/>)
        })}
        </section>
    </main>
}