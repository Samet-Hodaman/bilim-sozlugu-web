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
        element: <><svg
            fill='#213D83'
            fillOpacity={0.93}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 40 40"
            width="20"
            height="20"
            className="inline bg-white "
            >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg></>,
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