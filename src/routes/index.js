import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Categories from "../pages/categories";
import About from "../pages/about";
import Contact from "../pages/contact";
import SuggestionRequest from "../pages/suggestion";
import AuthLayout from "../layouts/auth";
import { LOGIN_LINK } from "../utils/consts/auth";
import Profile from "../pages/profile";
import Login from "../layouts/auth/login";
import Register from "../layouts/auth/register";
import ForgotPassword from "../layouts/auth/forgotPassword";
import Socials from "../pages/socials";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Socials />
            },
            {
                path: '/kategoriler',
                element: <Categories />
            },
            {
                path: '/hakkimizda',
                element: <About />
            },
            {
                path: '/profil',
                element: <Profile />
            },
            {
                path: '/iletisim',
                element: <Contact />
            },
            {
                path: '/oneri-istek',
                element: <SuggestionRequest />
            },
        ]
    },
        {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/giris-yap',
                element: <Login link={LOGIN_LINK}/>
            },
            {
                path: '/auth/sifremi-unuttum',
                element: <ForgotPassword link={LOGIN_LINK}/>
            },
            {
                path: '/auth/uye-ol',
                element: <Register link={LOGIN_LINK}/>
            }
        ]
    },
    {
        path: 'sosyal-medya',
        element: <Socials />
    }
])