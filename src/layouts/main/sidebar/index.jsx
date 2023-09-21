import { NavLink } from "react-router-dom"
import { SIDEBAR_MENU } from "../../../utils/consts/sidebar"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../../store/auth"
import { setNavbar } from "../../../store/site"
import classNames from 'classnames'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import LogoutIcon from '@mui/icons-material/Logout';

export default function SideBar() {
    const {isLogged} = useSelector(state=>state.auth)
    const {navbar} = useSelector(state=>state.site)
    const dispatch = useDispatch()
    console.log(navbar)
    const person = {
        name: 'Samet',
        surname: 'Hodaman',
        email: 'samethodaman@gmail.com'
    }
    
    return <>
    <aside className={classNames("flex z-10 duration-300 absolute rounded-l-lg w-64 sticky ml-3 pt-1 top-0 bg-blue-500 bg-opacity-30 h-[100vh] ", 
    {' !w-0 bg-sky-700 ' : !navbar})}>
    <div className="pl-0.5 sm:pl-2 duration-400 w-auto  sm:w-72 ">
        {navbar && 
        <nav className="grid gap-y-2 ml-1.5 sm:ml-4 mt-3">
        {SIDEBAR_MENU.map((menu,key) => {
            if (menu.isLogged === isLogged || menu.isLogged === undefined) 
                return(
                <NavLink 
                    to={menu.path}
                    key={key}
                    className='flex gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-white'
                >
                    <div className="text-sky-500 " >
                        {menu.element}
                    </div>
                    {menu.title}
                </NavLink>
            )
        })}
        {isLogged && 
            <button className="text-left flex gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-white" onClick={() => {dispatch(logout())}}>
                <div className="text-sky-500 " >
                <LogoutIcon fontSize='small' />
                </div>
                Çıkış yap
            </button>
        }


        {/* ******************************* */}
        {isLogged ? 
                <button onClick={() => {dispatch(logout())}}>Burasi cikis yap</button>
        :
                <button onClick={() => {dispatch(login(JSON.stringify(person)))}}>Burasi giris yap</button>
        }
        {/* ******************************* */}
        {/* This part will be deleted soon */}
        
        </nav>
        }
    </div>
    <button className="flex rounded-full p-2 justify-center items-center m-2 w-6 h-6 sm:w-8 sm:h-8 opacity-80 bg-zinc-200 hover:bg-zinc-100 hover:opacity-100 " onClick={() => dispatch(setNavbar(!navbar))}> 
        {navbar ? <ArrowBackIcon /> : <DehazeRoundedIcon />}
    </button>
    </aside>
    </>
}