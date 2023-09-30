import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";

export default function ForgotPassword({link}) {
  const [form, setForm] = useState({
		email: ''
	})

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}
    
	return (<>
		<h1 className="p-4 text-xl font-semibold">
			{link.forgotPassword.title}
		</h1>
		<form method="post" action="/" className="flex flex-col text-sm md:text-base bg-zinc-100 p-2 md:p-8 md:w-[28rem]">
			<p className="ml-6 mb-3">
				Email adresinizi girin.
			</p>
			<InputBox 
				title="Email:" 
				type="email" 
				name="email" 
				value={form.email} 
				handleChange={handleChange}
			/>
			<div>
				<h2 className="flex justify-end ml-4 text-sm">
					Hesabınız varsa  
					<a href={link.login.path}
						className="ml-2 border-b-2 border-blue-500 hover:border-blue-700">
							{link.login.title}
					</a>
				</h2>
			</div>
			<div className="flex justify-center my-2">
				<Button type='submit'>
					Kod gönder
				</Button>
			</div>
			<div>
				<h2 className="ml-4 text-base my-1">
					Henüz üye değilseniz  
					<a href={link.register.path}
						className="ml-2 border-b-2 border-blue-500 ">
						{link.register.title}
					</a>
				</h2>
			</div>
		</form>
	</>)
}