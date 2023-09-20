import { useEffect, useState } from "react"

export default function Profile(){
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('auth')
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo))
        }
    }, [])
    console.log(userInfo);

    return <main className="flex flex-col p-8 text-white">
        <div className="flex">
            Profil
        </div> + {userInfo.name}
    </main>
}