import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import Comment from "../../components/Comment";
import { DUMMY_COMMENTS } from "../../utils/consts/dummy-data";

export default function SuggestionRequest(){
    const { user } = useSelector(state=> state.auth)
    console.log(user);
    return <main className="container p-8">
    <section className="flex flex-col justify-center ">
        <div className="flex flex-col ">
            <h1 className="text-xl text-center text-white">
                Düşüncelerinizi ve önerilerinizi bizimle paylaşın.
            </h1>
        </div>
        <textarea className="flex rounded-lg indent-5 overflow-hidden resize-none min-h-[10rem] text-lg p-4 m-4"/>
        <div className="flex justify-between px-3.5">
            <div>
            {!user && <>
                <label for="name" className="text-white">Kim: </label>
                <input name="name" id="name" type='name' className="rounded ml-1" />
                <span className="ml-2 text-white">
                    ya da <NavLink className='underline underline-offset-2' to='/auth/giris-yap'>giriş yapın.</NavLink>
                </span>
                <div>
                    <input type="checkbox" id="private" name="private" value="Açık paylaş" title="açık paylaş" />
                    <label for="private" className="ml-2 text-white">Açık paylaş</label>
                </div>
            </>
            }
            </div>
                <Button >Gönder</Button> 
        </div>
    </section>
    <div className="mt-14">
        <h1 className="text-xl p-2 ml-4 font-semibold text-white">
            Açık paylaşılan yorumlar:
        </h1>
        <section className="flex flex-col bg-sky-200 rounded-xl flex-col items-center my-2 p-2">
            <div className="flex flex-col w-full m-2 ">
                {DUMMY_COMMENTS.map((c,key) => {
                    return (<Comment name={c.name} date={c.date}>"{c.text}"</Comment>)
                })}
            </div>
        </section>
    </div>
    </main>
}