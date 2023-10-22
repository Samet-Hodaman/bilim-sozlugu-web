import { Mail } from "@mui/icons-material";
import Logo from "../../layouts/main/header/logo";
import { SOCIAL_MEDIA_ACCOUNDS } from "../../utils/consts/social";
import { Divider } from "@mui/material";

export default function Socials(){
    
    return(
    <main className="flex flex-col justify-center items-center w-full max-w-[35rem] mx-auto">
        <section className="bg-slate-300 w-full rounded-t-xl shadow-xl">
            <div className="flex items-center montserrat justify-start pl-5 ">
                <Logo />
                <div>
                    <h1 className="primary font-bold roboto text-2xl md:text-3xl">Bilim Sözlüğü</h1>
                    <h5 className="text-[0.6rem] md:text-lg font-semibold md:indent-0.5 italic text-cyan-700">Bilimin izinde, hep birlikte daima ileriye...</h5>
                </div>
            </div>
            <div className="relative flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl text-center my-2 italic font-semibold text-orange-600">Sosyal Medya Hesaplarımız</h2>
            </div>
        </section>
        <section className="flex flex-col w-full gap-2 md:gap-3 bg-secondary p-4 py-8 shadow">
            {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                return(
                <a href={item.URL} className="bg-white p-0 rounded" key={index}>
                    <div className={"flex justify-between items-center p-1.5 md:p-2 rounded cursor-pointer opacity-100 hover:opacity-80 transition " + item.containerClass}>
                        <div>
                            {item.element}
                        </div>
                        <div className="font-semibold text-[#eee] text-xl md:text-2xl !opacity-100">
                            {item.platform}
                        </div>
                        <div>

                        </div>
                    </div>
                </a>
                )
            })}
        </section>
        <section className="flex text-sm flex-col items-center w-full bg-slate-800 gap-3 rounded-b-xl text-[#ddd] p-6">
            <h3 className="indent-4">Bilim Sözlüğü platformu kar amacı gütmeyen bir gönüllü öğrenci topluğudur ve tüm hakları saklıdır.</h3>
            <Divider flexItem/>
            <h3>Bize ulaşın: <Mail /> Gmail : bilimsozlugu0@gmail.com</h3>
        </section>
    </main>
    )
}