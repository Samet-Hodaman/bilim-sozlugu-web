import { Avatar } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function Profile() {
    const [userInfo, setUserInfo] = useState({});
    const storedInfo = useSelector(state => state.auth.user)
    useEffect(() => {
        setUserInfo(JSON.parse(storedInfo))
    }, []);
    
    return (
        <main className="flex flex-col p-8 text-white">
            <div className="flex">
                Profil {userInfo.name}
            </div>
            <Avatar 
                alt={userInfo.name}
                src="img/avatar/sh.jpg"
            />
        </main>
    );
}