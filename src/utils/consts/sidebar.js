import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
import { Login } from '@mui/icons-material';
const fontSize = 'small'

export const SIDEBAR_MENU = [
    {
        path: '/',
        title: 'Anasayfa',
        element: <HomeIcon fontSize={fontSize} />
    },
    {
        path: '/kategoriler',
        title: 'Kategoriler',
        element: <CategoryIcon fontSize={fontSize} />
    },
    {
        path: '/hakkimizda',
        title: 'Hakkımızda',
        element: <InfoIcon fontSize={fontSize} />
    },
    {
        path: '/profil',
        title: 'Profil',
        element: <PersonIcon fontSize={fontSize} />,
        isLogged: true
    },
    {
        path: '/iletisim',
        title: 'İletişim',
        element: <AlternateEmailIcon fontSize={fontSize} />
    },
    {
        path: '/oneri-istek',
        title: 'Öneri-İstek',
        element: <ContactSupportIcon fontSize={fontSize} />
    },
    {
        path: '/auth/giris-yap',
        title: 'Giris yap',
        element: <Login fontSize={fontSize} />,
        isLogged: false
    },
]

