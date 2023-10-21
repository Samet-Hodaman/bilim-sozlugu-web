import { Mail } from "@mui/icons-material";
import Logo from "../../layouts/main/header/logo";
import { SOCIAL_MEDIA_ACCOUNDS } from "../../utils/consts/social";
import { Divider } from "@mui/material";

export default function Socials(){
    return(<main className="flex flex-cols justify-center">
        <section className="bg-cyan-200 rounded-xl w-[35rem] mt-5 shadow-xl">
            <div className="flex items-center text-4xl montserrat justify-start pl-5 ">
                <Logo />
                <h1 className="text-blue-500 font-bold roboto text-4xl">Bilim Sözlüğü</h1>
            </div>
            <div className="relative flex flex-col justify-center">
                <h2 className="text-2xl text-center my-2 italic font-semibold text-orange-600">Sosyal Medya Hesaplarımız</h2>
                <div class="w-auto h-2 shadow-inner"></div> {/* Divider */}
            </div>
            <div className="flex flex-col gap-2 bg-gray-200 p-4">
                {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                    return(
                    <a href={item.URL} className="bg-white p-0" key={index}>
                        <div className={"flex w-auto rounded cursor-pointer opacity-100 hover:opacity-80 transition " + item.containerClass}>
                            <div className="m-2 ">
                                {item.element}
                            </div>
                            <div className="m-2 font-semibold text-white !opacity-100">
                                {item.platform}
                            </div>
                        </div>
                    </a>
                    )
                })}
            </div>
            <div className="flex bg-black rounded-b-xl text-[#ddd] p-2">
                <div>
                    <h3>Bilim Sözlüğü</h3>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </div>
                <div>
                    <h3>Tüm hakları saklıdır.</h3>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </div>
                <div>
                    <h3>Bize ulaşın <Mail /> Gmail : bilimsozlugu0@gmail.com</h3>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </div>
            </div>
        </section>
    </main>
    )
}