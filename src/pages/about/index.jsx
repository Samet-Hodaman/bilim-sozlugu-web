import { Divider } from "@mui/material"
import { ABOUT_CONTENT } from "../../utils/consts/about"
export default function About(){
    return <main className="w-full p-3 relative ">
    <h1 className="font-bold text-xl sm:text-3xl my-1 sm:my-2 mooli italic text-center text-[#1d4ed8]">
        Bilim Sözlüğü'ne Hoş geldiniz
    </h1>
    <p className="m-2 pl-2 sm:m-4 text-[0.7rem] sm:text-base mooli">Bilimin izinde, hep birlikte daima ileriye…</p>
    <section className="flex flex-col gap-20 mx-auto m-2 p-2 max-w-5xl " >
    {ABOUT_CONTENT.map((item, index) => {
        if((index % 2) === 0) {
            return <div className="flex flex-col bg-third gap-4 p-4 rounded-xl " key={index}>
                <h2 className="font-semibold text-rose-900 indent-2 ">
                    {item.title}
                </h2>
                <p className="text-[#111] indent-5 text-base sm:text-lg ">
                    {item.content}
                </p>
            </div>
        }
        return <div className="flex flex-col bg-forth gap-4 p-4 rounded-xl " key={index}>
            <h2 className="font-semibold text-rose-900 text-left text-right mr-5">
                {item.title}
            </h2>
            <p className="text-[#003366] indent-5 text-base sm:text-lg">
                {item.content}
            </p>
        </div>
    })}
    </section>
    </main>
}