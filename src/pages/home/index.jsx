import { useState } from "react";
import Button from "../../components/Button";
import Post from "../../components/Post";

export default function Home(){
    const [isClicked, setIsClicked] = useState(false)
    const [text,setText] = useState('')

    return <main className="container relative">
        <section className="p-8 pb-2">
            <div className="p-5 pt-1">
                <h2 className="text-white my-2 ml-3">
                    Bize bir mesaj bırakın.
                </h2>
                <textarea
                    placeholder="Buraya yazın.."
                    onClick={() => setIsClicked(true)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-52 rounded-lg resize-none indent-5 p-2 lg:tracking-wide text-xl focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />
            </div> 
            {isClicked &&
            <div className="flex justify-end mr-5">
                <Button onClick={() => console.log(text)}>Gönder</Button>
            </div>
            }
        </section>
        <section className="flex flex-col justify-center items-center">
            <Post />
            <Post />
            <Post />
            <Post />
        </section>
    </main>
}