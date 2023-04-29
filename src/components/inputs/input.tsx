
export default function InputEmail(props: any){
    return(
        <>

            <label  htmlFor="fplaceholder">{props.fplaceholder}</label>
            <input className="bg-white rounded-lg  w-72 p-1" type="text" placeholder={props.placeholder} />


        </>
    )
}

