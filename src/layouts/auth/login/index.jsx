import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "../../../components/Button"
import InputBox from "../../../components/InputBox"
import { TextField } from "@mui/material"
 
export default function Login({link}){
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (<>
        <h1 className="p-4 text-xl font-semibold">
            {link.login.title}
        </h1>
        <form method="post" action="/" className="flex flex-col bg-zinc-100 p-8 w-[28rem]">
        <div className="flex flex-col gap-2">
            <TextField label='email' type="email" autoComplete="none" placeholder="birisi@gmail.com"/>
            <TextField label='Şifre' type="password" placeholder="****" />
        </div>
            <InputBox 
                title="Email:" 
                type="email"
                name="email" 
                value={form.email} 
                handleChange={handleChange}
            />
            <InputBox 
                title="Şifre:" 
                type="password" 
                name="password" 
                value={form.password} 
                handleChange={handleChange}
            />
            <div className="flex justify-end my-1 mr-5">
                <NavLink to={link.forgotPassword.path}>
                    <p className="cursor-pointer hover:underline">
                        {link.forgotPassword.title}
                    </p>
                </NavLink>
            </div>
            <div className="flex justify-center my-1">
                <Button type='submit' className='text-lg'>
                    <p className='text-'>
                        Giriş yapmak için tıklayın
                    </p>
                </Button>
            </div>
            <div>
                <h2 className="ml-4 mt-2 text-base">
                    Henüz üye değilseniz  
                    <a href={link.register.path}
                    className="ml-2 border-b-2 border-blue-500 ">
                        {link.register.title}
                    </a>
                </h2>
            </div>
        </form>
    </>
    )
}