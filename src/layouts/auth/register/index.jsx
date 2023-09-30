import { useState } from "react";
import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";

export default function Register({link}){
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (<>
        <h1 className="p-2 md:p-4 text-xl font-semibold">
                {link.register.title}
            </h1>
                <form method="post" action="/" className="flex flex-col text-sm md:text-base bg-zinc-100 p-2 md:p-8 md:w-[28rem]">
                    <InputBox 
                        title="Adı:" 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        handleChange={handleChange}
                    />
                    <InputBox 
                        title="Soyadı:" 
                        type="text" 
                        name="surname" 
                        value={form.surname} 
                        handleChange={handleChange}
                    />
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
                    <InputBox 
                        title="Şifre tekrar:" 
                        type="password" 
                        name="password2" 
                        value={form.password2} 
                        handleChange={handleChange}
                    />
                    <div className="flex justify-end">
                        <h2 className="ml-4 text-sm">
                            Hesabınız varsa  
                            <a href={link.login.path}
                            className="ml-2 border-b-2 border-blue-500 hover:border-blue-700">
                                {link.login.title}
                            </a>
                        </h2>
                    </div>
                    <div className="flex justify-center mt-2">
                        <Button type="submit">
                            {link.register.title}
                        </Button>
                    </div>
                </form>
    </>)
}