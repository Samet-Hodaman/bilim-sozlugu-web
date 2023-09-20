import { CSSTransition } from 'react-transition-group'
export default function Post({show}){
    return (
        <article className="flex flex-col m-7 bg-rose-300 bg-opacity-100 cursor-pointer rounded shadow-2xl scroll-smooth rev ">
            <div className="ml-7 my-2">
                Tür buraya
            </div>
            <div className="bg-white h-80 mx-7">
                Resim Buraya
            </div>
            <div className="ml-7 my-2 font-bold">
                Baslık buraya
            </div>
            <div className="ml-7 my-2 mb-5">
                Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya -
                Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya -
                Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - Kisa yazi buraya - 
                <a className="underline ml-1">Devamı...</a>
            </div>
        </article>
    )
}