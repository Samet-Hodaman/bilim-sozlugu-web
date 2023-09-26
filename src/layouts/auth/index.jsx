import { NavLink, Navigate, Outlet} from "react-router-dom";
import Logo from "../main/header/logo";
import { useSelector } from "react-redux";

export default function AuthLayout(){
    const { user } = useSelector(state => state.auth)
    
    if (user ) return <Navigate to="/" />
    
    return(
            <section>
            <div className="flex flex-col justify-center items-center w-screen h-[40rem]">
            <main className="flex flex-col bg-white rounded p-2 mt-2">
                <NavLink to='/'>
                    <h1 className="primary font-semibold italic opacity-90 text-xl sm:text-3xl mooli text-center">Bilim sözlüğü</h1>
                </NavLink>
                <Outlet />
            </main>
            </div>
        </section>
    )
}