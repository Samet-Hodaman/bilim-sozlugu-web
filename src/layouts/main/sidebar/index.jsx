import { NavLink } from "react-router-dom"
import { SIDEBAR_MENU } from "../../../utils/consts/sidebar"
import classNames from 'classnames'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { setNavbar } from "../../../store/site";
import { login,logout} from "../../../store/auth";
import { useEffect, useState } from "react";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";


export default function SideBar() {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLogged)
    const navbar = useSelector(state => state.site.navbar)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    
    const [isMobileWidth, setIsMobileWidth] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth<640)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    }, [])

    useEffect(() => {
        const handleNavbar = () => {
            console.log(`Before:\nnavbar ${navbar}\ndrawer ${isDrawerOpen}`);
            dispatch(setNavbar(false))
            setIsDrawerOpen(false)
            console.log(`navbar ${navbar}\ndrawer ${isDrawerOpen}`);
        }
        handleNavbar()
    }, [isMobileWidth])

    const handleClick = () => {
        console.log(isDrawerOpen);
        if(isMobileWidth){
            setIsDrawerOpen(true)
        } else {
            dispatch(setNavbar(!navbar))
        }
    }

    const person = {
        name: 'Samet',
        surname: 'Hodaman',
        email: 'samethodaman@gmail.com',
        img: 'sh.jpg'
    }


    
    return <>
    <aside className={classNames("flex sticky z-10 duration-300 absolute rounded-l-lg w-60 ml-3 pt-1 top-0 bg-blue-500 bg-opacity-30 h-[100vh] ", 
    {' !w-0 bg-transparent ' : !navbar})}>
    
    <div className="pl-0.5 sm:pl-2 duration-400 w-auto sm:w-72 ">
    {navbar && 
        <nav className="grid gap-y-2 ml-1.5 sm:ml-2 mt-3">
        {SIDEBAR_MENU.map((menu,key) => {
            if (menu.isLogged === isLogged || menu.isLogged === undefined) 
                return(
                <NavLink 
                    to={menu.path}
                    key={key}
                    className='flex shadow-md gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-zinc-50 hover:shadow-sky-200/10 '
                >
                    <div className="text-sky-500 " >
                        {menu.element}
                    </div>
                    {menu.title}
                </NavLink>
            )
        })}
        {isLogged &&<>
            <hr />
            <button className="text-left flex gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-white" onClick={() => dispatch(logout())}>
                <div className="text-sky-500 " >
                <LogoutIcon fontSize='small' />
                </div>
                Çıkış yap
            </button>
        </> }
        </nav>}
    </div>
    <div 
        className="flex rounded-full cursor-pointer p-2 justify-center items-center m-1 w-8 h-8 opacity-80 bg-zinc-200 hover:bg-zinc-100 hover:opacity-100 " onClick={handleClick}>
        {navbar ? <ArrowBackIcon /> : <DehazeRoundedIcon />}
    </div>

    <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
        >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Menü
            </Typography>
            <List>
            {/* This part will be updated according to Material-ui components */}
            {SIDEBAR_MENU.map((menu,key) => {
                if (menu.isLogged === isLogged || menu.isLogged === undefined) 
                return(
                    <NavLink 
                        to={menu.path}
                        key={key}
                        className='flex shadow-md gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-zinc-50 hover:shadow-sky-200/10 '
                    >
                <ListItem>
                    <ListItemIcon>
                        <NavLink to={menu.path}>
                            {menu.element}
                        </NavLink>
                    </ListItemIcon>
                    <ListItemText primary={menu.title} />
                </ListItem>
                    </NavLink>
                )
            })}
            {/* ************************************************************* */}
            </List>
        </Box>
    </Drawer>
    </aside>
    </>



/*
NAVBAR ///////////////////////////////////
        {navbar && 
        <nav className="grid gap-y-2 ml-1.5 sm:ml-2 mt-3">
        {SIDEBAR_MENU.map((menu,key) => {
            if (menu.isLogged === isLogged || menu.isLogged === undefined) 
                return(
                <NavLink 
                    to={menu.path}
                    key={key}
                    className='flex shadow-md gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-zinc-50 hover:shadow-sky-200/10 '
                >
                    <div className="text-sky-500 " >
                        {menu.element}
                    </div>
                    {menu.title}
                </NavLink>
            )
        })}
        {isLogged &&<>
            <hr />
            <button className="text-left flex gap-x-1 tracking-wider bg-zinc-100 px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 rounded-lg max-w-[15rem] text-lg hover:bg-white" onClick={() => dispatch(logout())}>
                <div className="text-sky-500 " >
                <LogoutIcon fontSize='small' />
                </div>
                Çıkış yap
            </button>
        </> }
        </nav>}
////////////////////////////////////////////



*/}







        {/* ******************************* 
        <div className="text-sm md:text-base">
        {isLogged ? 
                <button onClick={() => dispatch(logout())}>Burasi cikis yap</button>
        :
                <button onClick={() => dispatch(login(JSON.stringify(person)))}>Burasi giris yap</button>
        }
        </div>
         ******************************* */}
        {/* This part will be deleted soon */}