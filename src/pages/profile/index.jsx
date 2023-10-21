import { ExpandMore, MoreVert } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardHeader, CardMedia, CircularProgress, IconButton, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import InputBox from '../../components/InputBox'

export default function Profile() {
	const [userInfo, setUserInfo] = useState({});
	const [loading, setLoading] = useState(true)
	const storedInfo = useSelector(state => state.auth.user)
	const [expanded, setExpanded] = useState(false)
	const [form, setForm] = useState({
		name:'',
		surname:'',
		password:'',
		confirmPassword:'',
		email: ''
})
	
	useEffect(() => {
		setUserInfo(JSON.parse(storedInfo))
		setTimeout(() => {
			setLoading(false)
		}, 1500)
	}, []);

	const handleChange = (isExpanded, panel) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<main className="container">
		<section className="flex flex-col items-center ">
		<Card sx={{width:'100%'}}>
			<CardHeader
				avatar={
					loading ? (
						<Skeleton animation='wave' variant="circular" width='5rem' height='5rem' />
					) : (
						<Avatar 
							alt={userInfo.name}
							src={"img/avatar/"+userInfo.img}
							sizes="large"
							className="min-w-[5rem] min-h-[5rem]"
						/>
					)
				}
				action={
					loading ? null : (
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					)
				}
				title={
					loading ? (
						<Skeleton
							animation="wave"
							height={10}
							width="80%"
							style={{marginBottom: 6}}
						/>
					) : (
						<p>
							{userInfo.name} {userInfo.surname}
						</p>
					)
				}
				subheader={
					loading ? (
						<Skeleton animation='wave' height={10} width={139}/>
					) : (
						<p>5 saat önce</p>
					)
				}
			/>
			<CardMedia sx={{backgroundColor: '#eee'}}>
			<Accordion 
				expanded={expanded === 'panel1'} 
				onChange={(event, isExpanded) => handleChange(isExpanded,'panel1')}
				>
			<AccordionSummary 
				id="panel1-header" 
				aria-controls="panel1-content" 
				expandIcon={<ExpandMore />}
			>
				<Typography>Bilgilerimi güncelle</Typography>
			</AccordionSummary>
			<AccordionDetails className="bg-gray-100 ">
				<Typography className="max-w-3xl ">
					<InputBox
						title="İsim:" 
						type="name"
						name="name" 
						value={form.name} 
						handleChange={(e) => {setForm({...form,name:e.target.value}) 
						console.log(e.target.value)}}
					/>
					<InputBox
						title="Soyisim:" 
						type="surname"
						name="surname" 
						value={form.surname} 
						handleChange={(e) => {setForm({...form,surname:e.target.value}) 
						console.log(e.target.value)}}
					/>
				</Typography>
			</AccordionDetails>
		</Accordion>

		<Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded,'panel2')}>
			<AccordionSummary 
				id="panel2-header" 
				aria-controls="panel2-content" 
				expandIcon={<ExpandMore />}
			>
				<Typography>Şifre değiştir</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
				<InputBox
						title="Eski şifre:" 
						type="password"
						name="prevPassword" 
						value={form.password} 
						handleChange={(e) => {setForm({...form,password:e.target.value}) 
						console.log(e.target.value)}}
					/>
					<InputBox
						title="Yeni şifre:" 
						type="password"
						name="newPassword" 
						value={form.confirmPassword} 
						handleChange={(e) => {setForm({...form,email:e.target.value}) 
						console.log(e.target.value)}}
					/>
					<InputBox
						title="Yeni şifre tekrar:" 
						type="password"
						name="newPasswordAgain" 
						value={form.email} 
						handleChange={(e) => {setForm({...form,email:e.target.value}) 
						console.log(e.target.value)}}
					/>				
					</Typography>
			</AccordionDetails>
		</Accordion>

		<Accordion 
			expanded={expanded === 'panel3'} 
			onChange={(event, isExpanded) => handleChange(isExpanded,'panel3')}	
		>
			<AccordionSummary 
				id="panel3-header" 
				aria-controls="panel3-content" 
				expandIcon={<ExpandMore />}
			>
				<Typography>E-posta adresini güncelle</Typography>
			</AccordionSummary>
			<AccordionDetails className="bg-gray-100">
					<InputBox
						title="Email:" 
						type="email"
						name="email" 
						value={form.email} 
						handleChange={(e) => {setForm({...form,email:e.target.value}) 
						console.log(e.target.value)}}
					/>
					Email: 
					<input 
						title="Email" 
						type="email" 
						name="email" 
						value={form.email} 
						onChange={(e) => {setForm({...form,email:e.target.value})
						console.log(e.target.value)}} 
					/>
			</AccordionDetails>
		</Accordion>

		<Accordion expanded={expanded === 'panel4'} onChange={(event, isExpanded) => handleChange(isExpanded,'panel4')}>
			<AccordionSummary 
				id="panel4-header" 
				aria-controls="panel4-content" 
				expandIcon={<ExpandMore />}
			>
				<Typography>Çıkış yap</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Çıkış yapmak için tıkladınız emin misiniz
				</Typography>
			</AccordionDetails>
		</Accordion>
			</CardMedia>
		</Card>
		</section>
		
		
	</main>
	);
}