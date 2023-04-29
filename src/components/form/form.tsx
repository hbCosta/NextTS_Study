import Button from "../button/button";
import Input from "../inputs/input";

export default function Form(){
    return(
        <>
            <form  action="">
                <h1 className="mb-9 text-center font-bold text-lg text-[#fff]">LOGIN DE ADMINISTRADOR</h1>
                <div className=" p-8 bg-blue-800 h-96 flex flex-col justify-center gap-4 text-[#fff] w-80 ">
                    <Input placeholder='Digite seu email'/>
                    <Input placeholder='Digite sua senha' />
                    <a className="bg-blue-800" href="#">Esqueceu a senha?</a>
                    <Button botao='Iniciar Sessão'/>  

                </div>
            </form>
        </>
    )
}