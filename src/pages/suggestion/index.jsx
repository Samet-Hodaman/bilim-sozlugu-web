import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import Comment from "../../components/Comment";
import { DUMMY_COMMENTS } from "../../utils/consts/dummy-data";
import { useEffect, useState } from "react";

export default function SuggestionRequest(){
    const [userInfo, setUserInfo] = useState({
        name: '',
    });
    const {isLogged, user} = useSelector(state => state.auth)
    useEffect(() => {
        setUserInfo(JSON.parse(user))
    }, []);
    
    return <main className="container text-[#333] relative">
        {/*** SHARE YOUR OPINION SECTION  ***/}
        <section className="flex flex-col justify-center mt-1 sm:mt-2">
            <h1 className="text-sm sm:text-base md:text-xl text-center text-[#444]">
                Düşüncelerinizi ve önerilerinizi bizimle paylaşın.
            </h1>
            <textarea 
                placeholder="Buraya yazın..."
                className="flex rounded-lg indent-3 md:indent-5 placeholder-[#fdfdfd] overflow-hidden shadow-xl shadow-blue-600/30 resize-none min-h-[10rem] text-base md:text-lg p-3 m-4 bg-primary montserrat fifth"/>
            <div className="flex justify-between px-2">
                <div>
                {!isLogged ? <div className="secondary">
                    <label for="name">Kim: </label>
                    <input name="name" id="name" type='name' className="rounded ml-1 bg-primary shadow-inner shadow-slate-500 " />
                    <span className="ml-2 ">
                        ya da <NavLink className='underline underline-offset-2' to='/auth/giris-yap'>giriş yapın.</NavLink>
                    </span>
                    <div>
                        <input type="checkbox" id="private" name="private" value="Açık paylaş" title="açık paylaş" />
                        <label for="private" className="ml-2 ">Açık paylaş</label>
                    </div>
                </div>:
                <div className="flex flex-row gap-1 ml-4"><p>Gönderen:</p>{userInfo.name} {userInfo.surname}</div>
                }
                    <div className="my-3">
                        <Button >Gönder</Button> 
                    </div>
                </div>
            </div>
        </section>

        {/*** SHARE YOUR OPINION SECTION  ***/}
        <section className="mt-14">
            <h1 className="text-base md:text-xl p-2 ml-4 font-semibold">
                Açık paylaşılan yorumlar:
            </h1>
            <div className="flex flex-col bg-secondary  flex-col items-center my-2 p-2">
                <div className="flex flex-col w-full m-2 ">
                    {DUMMY_COMMENTS.map((c,key) => {
                        return (<Comment name={c.name} date={c.date} key={key}>"{c.text}"</Comment>)
                    })}
                </div>
            </div>
        </section>
        </main>
}