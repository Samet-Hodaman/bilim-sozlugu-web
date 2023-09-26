import { Alert, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import {Mail} from '@mui/icons-material'
import { SOCIAL_MEDIA_ACCOUNDS } from '../../utils/consts/social'
import { useRef, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
export default function Contact() {
    const textRef = useRef(null)
    const [isSnackOpen, setIsSnackOpen] = useState(false)
    const [message,setMessage] = useState('')

    const copyToClipboard = (e) => {
        setMessage('panoya kopyanaldı.')
        setIsSnackOpen(true)
        e.preventDefault()
    }
    return <main className="container p-8 mt-5 rounded">
        <section className="flex flex-col bg-sky-800 w-auto rounded-xl px-3 py-2">
            <div className='indent-8 text-stone-100 p-4'>
                <p>
                    Web sitemizi ziyaret ettiğiniz için teşekkür ederiz. Bilim Sözlüğü Ailesi olarak, sizinle iletişim kurma fırsatını değerli buluyor ve iletilerinizle özenle ilgileniyoruz.
                    Sorularınızı ve merak ettiklerinizi bizimle paylaşmanız için buradayız. İster bilimsel bir merakınız olsun, isterse herhangi bir konuda danışmanlık arayışınız, biz size yardımcı olmaktan mutluluk duyarız. Her iletişimimizde, sizinle daha yakından tanışmak ve sizin için en iyi hizmeti sunmak için çaba gösteriyoruz.
                    Geri bildirimlerinizi her zaman bekliyoruz. Web sitemizi daha iyi hale getirmek ve içeriklerimizi daha da iyileştirmek için sizden gelen geri bildirimlere her zaman açığız.
                </p>
                    Web sitemizi ziyaret ettiğiniz için teşekkür ederiz.
                <p>
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
            <h2>Sosyal medya hesaplarımız</h2>
            <TableContainer component={Paper} sx={{
                backgroundColor: 'transparent',
                border: '1px solid wheat'
            }}>
            <Table >
                <TableBody>
            {SOCIAL_MEDIA_ACCOUNDS.map((item,index) => {
                return <TableRow key={index} className='text-base text-zinc-300'>
                    
                    <TableCell>
                    <a href={item.URL}>
                        {item.element}
                    </a>
                        {item.platform}
                    </TableCell>
                    <TableCell>
                        <a 
                            title='Adrese git'
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={item.URL}
                            >
                            {item.URL}
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