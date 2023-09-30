import { Alert, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import {Mail} from '@mui/icons-material'
import { SOCIAL_MEDIA_ACCOUNDS } from '../../utils/consts/social'
import { useRef, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
export default function Contact() {
    const textRef = useRef(null)
    const [isSnackOpen, setIsSnackOpen] = useState(false)
    const [message,setMessage] = useState('')
    window.scrollTo(0,0)

    const copyToClipboard = (e) => {
        setMessage('panoya kopyanaldı.')
        setIsSnackOpen(true)
        e.preventDefault()
    }
    return <main className="p-8 mt-5 rounded">
        <section className="flex flex-col bg-sky-800 rounded-xl px-3 py-2">
            <div className='indent-8 text-[#eee] sm:font-semibold p-4'>
                <p>
                    Bilim Sözlüğü Ailesi olarak, sizinle iletişim kurma fırsatını değerli buluyor ve iletilerinizle özenle ilgileniyoruz.
                    Sorularınızı ve merak ettiklerinizi bizimle paylaşmanız için buradayız. İster bilimsel bir merakınız olsun, isterse herhangi bir konuda danışmanlık arayışınız, biz size yardımcı olmaktan mutluluk duyarız.
                    Geri bildirimleriniz bizim için çok önemli. Web sitemizi daha iyi hale getirmek ve içeriklerimizi daha da iyileştirmek için sizden gelen geri bildirimlere her zaman açığız.                
                </p>
                    Sevgiler,
                <p>
                    Bilim Sözlüğü
                </p>
            </div>
            <h2 className="text-green-400 ">
                Görüş, öneri ve işbirlikleri için bize ulaşın.
            </h2>
            <CopyToClipboard text='bilimsozlugu0@gmail.com'>
            <div onClick={copyToClipboard} title='Panoya kopyala' ref={textRef} className='cursor-pointer my-4' >
                <Mail /> Gmail : bilimsozlugu0@gmail.com
            </div>
            </CopyToClipboard>
            <h2 className='mb-6'>Sosyal medya hesaplarımız</h2>
            <TableContainer component={Paper} sx={{
                backgroundColor: 'transparent',
                border: '1px solid #626262'
            }}>
            <Table className='bg-secondary'>
                <TableBody>
            {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                return <TableRow key={index} className='border-b border-zinc-200'>
                    <TableCell sx={{padding:'4px', borderBottom: '2px solid #626262',color:'#f7f7f7',fontFamily:'Montserrat','@media (min-width: 600px)': {padding:'8px'}}}>
                        <a href={item.URL}>
                            {item.element}
                        </a>
                        <span className='ml-1 sm:ml-2 lg:ml-3 text-[0.8rem] sm:text-base font-semibold'>
                            <a href={item.URL}>
                                {item.platform}
                            </a>
                        </span>
                    </TableCell>
                    <TableCell sx={{padding:'4px',borderBottom: '2px solid #626262'}}>
                        <a
                            title='Adrese git'
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.URL}
                            >
                            <p className='text-sky-300 text-[0.8rem] sm:text-base w-[9.3rem] sm:w-80 md:w-auto word-wrap'>{item.URL}</p>
                        </a>
                    </TableCell>
                </TableRow>
                {/* Use Table React Component for this */}
            })}
                </TableBody>
            </Table>
            </TableContainer>
        </section>
        <Snackbar open={isSnackOpen} autoHideDuration={2000} onClose={() => setIsSnackOpen(false)}>
            <Alert elevation={2} variant="filled" severity="success">
                {message}
            </Alert>
        </Snackbar>
    </main>
}