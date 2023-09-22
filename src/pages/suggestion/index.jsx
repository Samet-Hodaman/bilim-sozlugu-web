import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import Comment from "../../components/Comment";
import { DUMMY_COMMENTS } from "../../utils/consts/dummy-data";

export default function SuggestionRequest(){
    const { user } = useSelector(state=> state.auth)
    
    return <main className="container relative">
        {/*** SHARE YOUR OPINION SECTION  ***/}
        <section className="flex flex-col justify-center mt-1 sm:mt-2">
            <h1 className="text-sm sm:text-base md:text-xl text-center text-white">
                Düşüncelerinizi ve önerilerinizi bizimle paylaşın.
            </h1>
            <textarea 
                placeholder="Buraya yazın..."
                className="flex rounded-lg indent-3 md:indent-5 overflow-hidden resize-none min-h-[10rem] text-base md:text-lg p-3 m-4"/>
            <div className="flex justify-between px-2">
                <div>
                {!user && <>
                    <label for="name" className="text-white ">Kim: </label>
                    <input name="name" id="name" type='name' className="rounded ml-1 " />
                    <span className="ml-2 text-white ">
                        ya da <NavLink className='underline underline-offset-2' to='/auth/giris-yap'>giriş yapın.</NavLink>
                    </span>
                    <div>
                        <input type="checkbox" id="private" name="private" value="Açık paylaş" title="açık paylaş" />
                        <label for="private" className="ml-2 ">Açık paylaş</label>
                    </div>
                </>
                }
                    <div className="my-2">
                        <Button >Gönder</Button> 
                    </div>
                </div>
            </div>
        </section>

        {/*** SHARE YOUR OPINION SECTION  ***/}
        <section className="mt-14">
            <h1 className="text-base md:text-xl p-2 ml-4 font-semibold text-white">
                Açık paylaşılan yorumlar:
            </h1>
            <div className="flex flex-col bg-sky-200  flex-col items-center my-2 p-2">
                <div className="flex flex-col w-full m-2 ">
                    {DUMMY_COMMENTS.map((c,key) => {
                        return (<Comment name={c.name} date={c.date}>"{c.text}"</Comment>)
                    })}
                </div>
            </div>
        </section>
        </main>
}