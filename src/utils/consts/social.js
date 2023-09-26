import { AlternateEmail, Facebook, Instagram, Language, LinkedIn, Twitter, Web, YouTube } from "@mui/icons-material";

export const SOCIAL_MEDIA_ACCOUNDS = [
    {
        name: "@bilimsozlugutr",
        URL: "https://www.instagram.com/bilimsozlugutr/",
        platform: "Instagram",
        element: <Instagram />
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.facebook.com/bilimsozlugutr/",
        platform: "Facebook",
        element: <Facebook />
    },
    {
        name: "@bilim_sozlugu",
        URL: "https://www.twitter.com/bilim_sozlugu",
        platform: "Twitter",
        element: <Twitter />
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.threads.net/@bilimsozlugutr",
        platform: "Threads",
        element: <AlternateEmail />
    },
    {
        name: "@bilimsozlugu",
        URL: "https://www.linkedin.com/company/bilimsozlugu/",
        platform: "Linkedin",
        element: <LinkedIn />
    },
    {
        name: "@bilimsozlugutr",
        URL: "https://www.tiktok.com/@bilimsozlugutr",
        platform: "Tiktok",
        element: <><svg
            fill='#000'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20"
            height="20"
            className="inline"
            >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg></>
    },
    {
        name: "@bilimsozlugu",
        URL: "https://www.youtube.com/channel/UC5q1qrEtDEzRl0bNY9jcLmw",
        platform: "YouTube",
        element: <YouTube />
    },
    {
        name: "Bilim Sözlüğü",
        URL: "https://bilim-sozlugu-web.vercel.app/",
        platform: "Web Site",
        element: <Language />
    },
]