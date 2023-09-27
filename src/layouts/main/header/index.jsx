import { NavLink } from "react-router-dom"
import Logo from "./logo"
import { LOGIN_LINK } from "../../../utils/consts/auth"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../store/auth"

export default function Header(){
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return <header className="h-auto bg-header">
    <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center gap-2">
            <div className=" rounded-full flex-row ">
                <a href="/">
                    <Logo text="BİLİM SÖZLÜĞÜ"/>
                </a>
            </div>
            <div>
            <h2 className="montserrat text-red-600 font-semibold">
                HENÜZ TEST AŞAMASINDADIR!
            </h2>
            </div>
            <div>
            {user ? 
            <a href='/'>
                <button onClick={() => dispatch(logout())}>Çıkış yap</button>
            </a>
            :
            <a href={LOGIN_LINK.login.path}>
                {LOGIN_LINK.login.title}
            </a> 
            }
            </div>
        </div>
    </div>
    </header>
}