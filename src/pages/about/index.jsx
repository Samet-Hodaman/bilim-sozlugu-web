import classNames from "classnames"
import { ABOUT_CONTENT } from "../../utils/consts/about"
import { useEffect, useState } from "react";
import { ArrowDownward } from "@mui/icons-material";

export default function About(){
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
    const elements = document.querySelectorAll('.element');
    const handleScroll = () => {
        setIsScrolled(true)
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight - 250;
            if (isVisible) {
            element.classList.add('revealed');
            }
        });
    }

      // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
})


    return <main className="w-full p-3 relative ">
    <h1 className="font-bold text-xl sm:text-3xl my-1 sm:my-2 mooli italic text-center text-[#1d4ed8]">
        Bilim Sözlüğü'ne Hoş geldiniz
    </h1>
    <p className="m-2 pl-2 inline sm:m-4 text-[0.7rem] sm:text-base mooli">
        Bilimin izinde, hep birlikte daima ileriye… 
    </p>
    {!isScrolled && <ArrowDownward className="bg-[#fdfdfd] rounded-full animate-bounce mr-2 shadow-xl" />}
    <section className="flex flex-col gap-20 mx-auto mt-5  max-w-5xl " >
    {/* About Contents are displayed here !*/}
    {ABOUT_CONTENT.map((item, index) => {
        const isOdd = index % 2 === 0
        return <div className={classNames('flex flex-row gap-6 sm:gap-10 p-4 rounded-xl shadow-xl shadow-blue-300/20 element reveal ',{'bg-forth flex-row ': isOdd},{'bg-gradient-to-r bg-third flex-row-reverse ' : !isOdd})} key={index}>
            <img src="img/about/question_tag.png" className="opacity-80 w-20 h-20 sm:w-40 sm:h-40 my-6 rounded-xl "/>
            <div className="flex flex-col gap-2">
            <h2 className='font-semibold text-rose-700 indent-1 '>
                {item.title}
            </h2>
            <p className={classNames('indent-5 text-base sm:text-lg ',{'text-[#003366] ': isOdd},{'text[#111] ' : !isOdd})}>
                {item.content}
            </p>
            </div>
        </div>
    })}
    </section>
    <img src="img/Wallpaper.png" className="opacity-80 my-6 rounded-xl "/>
    </main>
}


