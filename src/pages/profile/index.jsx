import { MoreVert } from "@mui/icons-material";
import { Avatar, Card, CardHeader, CardMedia, CircularProgress, IconButton, Skeleton } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function Profile() {
	const [userInfo, setUserInfo] = useState({});
	const [loading, setLoading] = useState(true)
	const storedInfo = useSelector(state => state.auth.user)
	
	useEffect(() => {
		setUserInfo(JSON.parse(storedInfo))
		setTimeout(() => {
			setLoading(false)
		}, 1500)
	}, []);

	return (
		<main className="container">
		<section className="flex flex-col items-center ">
		<Card sx={{width:500}}>
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
			>
			</CardHeader>
		</Card>
			<Skeleton animation={false} variant="circular" width={40} height={40} />
			<Skeleton variant="rectangular" width={210} height={60} />
			<Skeleton variant="rounded" width={210} height={60} />
			<Skeleton variant="text" sx={{ fontSize: '1rem' ,width: '100%'}} />
		</section>
		<div>   
			Bilim Sözlüğü Ailesi olarak, sizinle iletişim kurma fırsatını değerli buluyor ve iletilerinizle özenle ilgileniyoruz.
			Sorularınızı ve merak ettiklerinizi bizimle paylaşmanız için buradayız. İster bilimsel bir merakınız olsun, isterse herhangi bir konuda danışmanlık arayışınız, biz size yardımcı olmaktan mutluluk duyarız.
			Geri bildirimleriniz bizim için çok önemli. Web sitemizi daha iyi hale getirmek ve içeriklerimizi daha da iyileştirmek için sizden gelen geri bildirimlere her zaman açığız.                
		</div>
		<div className="flex">
			Profil {userInfo.name}
		</div>
		<h2>bilgilerimi guncelle/sifre degistir/E-posta adresini guncelle/cikis yap</h2>
		</main>
	);
}