import { Box,List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import {Instagram} from '@mui/icons-material'
import { SOCIAL_MEDIA_ACCOUNDS } from '../../utils/consts/social'
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
            <List sx={' gap-5'}>
            {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                return <ListItem key={index}>
                
                    <ListItemIcon>{item.element} </ListItemIcon>
                    <ListItemText className='mr-16'>{item.social}:</ListItemText>
                    <ListItemText>{item.name} </ListItemText>
                </ListItem>
                {/* Use Table React Component for this */}
            })}
            </List>
            </div>
        </section>
    </main>
}