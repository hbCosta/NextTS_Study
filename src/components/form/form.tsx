import Button from "../button/button";
import Input from "../inputs/input";

export default function Form(){
    return(
        <>
            <form  action="">
            <h1 className="mb-9 text-center font-bold text-lg text-[#fff]">LOGIN DE ADMINISTRADOR</h1>
                <div className=" flex flex-col justify-center gap-4 text-[#fff] h-56 w-72">
                    <Input placeholder='Digite seu email'/>
                    <Input placeholder='Digite sua senha' />
                    <a href="#">Esqueceu a senha?</a>
                    <Button botao='Iniciar Sessão'/>  

                </div>
            </form>
        </>
    )
}