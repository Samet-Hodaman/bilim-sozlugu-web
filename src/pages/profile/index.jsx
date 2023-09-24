import { Avatar, Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function Profile() {
    const [userInfo, setUserInfo] = useState({});
    const storedInfo = useSelector(state => state.auth.user)
    useEffect(() => {
        setUserInfo(JSON.parse(storedInfo))
    }, []);
    
    return (
        <main className="container">
        <section className="flex flex-col items-center ">
            <Card className="w-full p-10">
                <CardMedia 
                    component={Avatar}
                    height='140'
                    image="img/avatar/sh.jpg"
                    alt="Avatar"
                />
            </Card>
            <div className="flex">
                Profil {userInfo.name}
            </div>
            <Avatar 
                alt={userInfo.name}
                src={"img/avatar/"+userInfo.img}
            />
        </section>
        </main>
    );
}