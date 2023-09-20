import { NavLink, Navigate, Outlet} from "react-router-dom";
import Logo from "../main/header/logo";
import { useSelector } from "react-redux";

export default function AuthLayout(){
    const { user } = useSelector(state => state.auth)
    
    if (user ) return <Navigate to="/" />
    
    return(
            <section>
            <div className="flex justify-center items-center flex-col w-full h-[40rem]">
            <NavLink to='/'>
                <Logo text="BİLİM SÖZLÜĞÜ"/>
            </NavLink>
            <main className="bg-white rounded p-2 mt-2">
                <Outlet />
            </main>
            </div>
        </section>
    )
}