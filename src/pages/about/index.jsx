import classNames from "classnames"
import { ABOUT_CONTENT } from "../../utils/consts/about"
import { useEffect } from "react";

export default function About(){
    useEffect(() => {
    const elements = document.querySelectorAll('.element');
    const handleScroll = () => {
        console.log(elements);  
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight - 100;
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
    <p className="m-2 pl-2 sm:m-4 text-[0.7rem] sm:text-base mooli">Bilimin izinde, hep birlikte daima ileriye…</p>
    <section className="flex flex-col gap-20 mx-auto m-2 p-2 max-w-5xl " >
    <img src="img/Wallpaper.png" className="opacity-80 rounded-xl "/>
    
    {/* About Contents are displayed here !*/}
    {ABOUT_CONTENT.map((item, index) => {
        const isOdd = index % 2 === 0
        return <div className={classNames('flex flex-col gap-4 p-4 rounded-xl shadow-xl shadow-blue-300/20 element reveal ',{'bg-forth ': isOdd},{'bg-gradient-to-r bg-third' : !isOdd})} key={index}>
            <h2 className={classNames('font-semibold text-rose-900 ',{'indent-2 ': isOdd},{'text-right mr-5  ' : !isOdd})}>
                {item.title}
            </h2>
            <p className={classNames('indent-5 text-base sm:text-lg ',{'text-[#003366] ': isOdd},{'text[#111] ' : !isOdd})}>
                {item.content}
            </p>
        </div>
    })}
    </section>
    </main>
}


