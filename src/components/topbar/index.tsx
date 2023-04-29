/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function TopBar(){

    return(
        <div className="flex justify-center items-center  border-b-solid border-b-2 border-[#808080] mr-32 ml-32">
            <Image className='cursor-pointer '  src='/images/logo.png' width='150' height='150' alt='logo'></Image>
        </div>
    )    
}