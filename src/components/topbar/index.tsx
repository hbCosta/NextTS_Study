import Image from 'next/image'

export default function TopBar(){

    return(
        <div className="flex items-center h-28 border-b-solid border-b-2 border-[#808080] mr-32">
            <div>
                <Image className='cursor-pointer'  src='/images/logo.png' width='150' height='150' alt='logo'></Image>
            </div>
            <h1 className='text-white font-bold text-2xl ml-[500px]'>Login de Administrador</h1>
        </div>
    )    
}