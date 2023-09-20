import { NavLink } from "react-router-dom"
import Logo from "./logo"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../store/auth"
import { LOGIN_LINK } from "../../../utils/consts/auth"

export default function Header(){
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    return <header className="w-full h-auto temples">
    <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
            <div className=" rounded-full flex-row ">
                <NavLink to='/'>
                    <Logo text="BİLİM SÖZLÜĞÜ"/>
                </NavLink>
            </div>
            <div>
            {user ? 
            <NavLink to='/'>
                <button onClick={() => dispatch(logout())}>Çıkış yap</button>
            </NavLink>
            :
            <NavLink to={LOGIN_LINK.login.path}>
                {LOGIN_LINK.login.title}
            </NavLink> 
            }
            </div>
        </div>
    </div>
    </header>
}