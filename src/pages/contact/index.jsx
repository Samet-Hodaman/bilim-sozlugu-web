import { Box,List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import {Instagram} from '@mui/icons-material'
export default function Contact() {
    return <main className="container p-8 mt-5 rounded">
        <section className="flex flex-col bg-sky-800 rounded-xl px-3 py-2">
            <h2 className="text-white ">
                Görüş, öneri ve işbirliği için
            </h2>
            <div className="text-white text-xl ">
                Bize Ulaşın: 
            </div>
            <div>
            <List>
                <ListItem>
                    <ListItemIcon><Instagram /></ListItemIcon>
                    <ListItemText>Instagram: </ListItemText>
                    <ListItemText>@bilimsozlugu_</ListItemText>
                </ListItem>
            </List>
                 <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Facebook: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Twitter: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Threads: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Linkedin: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Tiktok: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Youtube: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
                Web: <a href="https://www.instagram.com/bilimsozlugu_/">@bilimsozlugu_</a>
            </div>
            <Box></Box>
        </section>
    </main>
}