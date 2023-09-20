import logo from '../../../../assets/img/Ana Logo.png'
export default function Logo({text}){
    return (
    <div className='flex items-center m-2'>
        <img src={logo} alt={text} className='w-12 sm:w-16 md:w-20 lg:w-20 m-2 '/>
        <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl  cursor-pointer pt-3'>
            {text}
        </h1>
    </div>
    )
}