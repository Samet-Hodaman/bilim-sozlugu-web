import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { DUMMY_POSTS } from "../../utils/consts/dummy-data";
import { Button } from "@mui/material";

export default function Home(){
    const [isClicked, setIsClicked] = useState(false)
    const [text,setText] = useState('')

    return <main className="container relative ">
        {/*** LEAVE A MESSAGE SECTION  ***/}
        <section className="p-4 md:p-5 mx-auto max-w-3xl ">
            <div className="flex flex-col items-center pt-1 ">
                <h2 className="secondary font-bold my-2 ml-3">
                    Bize bir mesaj bırakın.
                </h2>
                <textarea
                    placeholder="Buraya yazın.."
                    onClick={() => setIsClicked(true)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full fifth bg-primary shadow-xl shadow-blue-600/30 h-40 rounded-lg resize-none indent-5 p-2 m-1 lg:tracking-wide text-xl focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" 
                />
                {isClicked && <div className="flex justify-end w-full m-3 ">
                    <Button onClick={() => console.log(text)} color="primary" variant="contained"> Gönder</Button>
                </div>}
            </div>
        </section>

         {/*** POSTS SECTION  ***/}
        <section className="grid gap-x-3 gap-y-4 mx-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {DUMMY_POSTS.map((post,key) =>{
            return (<Post data={post} key={key}/>)
        })}
        </section>
    </main>
}