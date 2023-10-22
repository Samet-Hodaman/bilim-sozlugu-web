import { AlternateEmail, Facebook, Instagram, Language, LinkedIn, Twitter, Web, YouTube } from "@mui/icons-material";

export const SOCIAL_MEDIA_ACCOUNDS = [
    {
        name: "@bilimsozlugutr",
        URL: "https://www.instagram.com/bilimsozlugutr/",
        platform: "Instagram",
        element: <Instagram className="text-white rounded"/>,
        containerClass: "bg-gradient-to-br from-[#8134AF] to-[#FEDA77] via-[#DD2A7B]"
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.facebook.com/bilimsozlugutr/",
        platform: "Facebook",
        element: <Facebook sx={{color:'#fff',backgroundColor:'transparent',borderRadius:'15px'}}/>,
        containerClass: "bg-[#4267B3]" //bg-gradient-to-tl from-[#E9EBEE] to-[#4267B3] via-[#4267B3]
    },
    {
        name: "@bilim_sozlugu",
        URL: "https://www.twitter.com/bilim_sozlugu",
        platform: "Twitter (X)",
        element: <Twitter sx={{color:'#fff',borderRadius:'15px'}}/>,
        containerClass: "bg-[#08A0E9]" //bg-gradient-to-tl from-[#E8F5FD] to-[#0084B4] via-[#08A0E9]
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.threads.net/@bilimsozlugutr",
        platform: "Threads",
        element: <AlternateEmail sx={{color:'#fff',borderRadius:'15px'}} />,
        containerClass: "bg-[#333]" //bg-gradient-to-br from-[#333] to-[#eee] via-[#333]
    },
    {
        name: "@bilimsozlugu",
        URL: "https://www.linkedin.com/company/bilimsozlugu/",
        platform: "Linkedin",
        element: <LinkedIn className="rounded-full text-white"/>,
        containerClass: "bg-gradient-to-br from-[#0077B5] to-[#777] via-[#0077B5]"
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.tiktok.com/@bilimsozlugutr",
        platform: "Tiktok",
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width={18} height={18} viewBox="-25 0 448 512">
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
        </svg>,
        containerClass: "bg-gradient-to-r from-[#25F4EE] to-[#0077B5] via-[#0077B5]" // bg-gradient-to-tl from-[#25F4EE] to-[#FE2C55] via-[#0077B5]

    },
    {
        name: "@bilimsozlugu",
        URL: `https://www.youtube.com/channel/UC5q1qrEtDEzRl0bNY9jcLmw`,
        platform: "YouTube",
        element: <YouTube className="text-[#fff] rounded"/>,
        containerClass: "bg-gradient-to-r from-[#FF0000] to-[#282828]"
    },
    {
        name: "Bilim Sözlüğü",
        URL: "https://bilim-sozlugu.vercel.app/",
        platform: "Web",
        element: <Language className="text-white rounded-xl"/>,
        containerClass: "bg-gradient-to-r from-[#2DA2E1] to-[#18ACB6]"
    },
]