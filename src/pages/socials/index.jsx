import Logo from "../../layouts/main/header/logo";
import { SOCIAL_MEDIA_ACCOUNDS } from "../../utils/consts/social";

export default function Socials(){
    return(
        <main className="flex flex-col items-center bg-[#fff] w-full max-w-[35rem] mx-auto rounded-b-xl">
            <section>
                <div className="flex flex-col items-center">
                    <Logo />
                    <h1 className="text-xl font-extrabold primary">Bilim Sözlüğü</h1>
                    <h3 className="primary font-semibold">Bilimin izinde, hep birlikte daima ileriye</h3>
                </div>
            </section>
            <section className="flex flex-col gap-2 md:gap-3 m-5 w-full">
            {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                return(
                <a href={item.URL} className="mx-4 rounded-full">
                    <div className="flex justify-between items-center w-full p-2 px-4 bg-primary rounded-full">
                        {item.element}
                        <h3 className="text-md md:text-lg text-white font-semibold">
                            <div>
                                {item.platform}
                            </div>
                        </h3>
                        <div></div>
                    </div>
                </a>

                )
            })}
            <h1 className="text-lg primary font-semibold text-center px-6 mt-2">
                Tüm sosyal medya hesaplarımıza yukarıdaki bağlantılardan ulaşabilirsiniz
            </h1>
            </section>
        </main>
    )
}