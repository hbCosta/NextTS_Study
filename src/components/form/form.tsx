import Button from "../button/button";
import Input from "../inputs/input";

export default function Form(){
    return(
        <>
            <form  action="">
                <div className="flex flex-col gap-2 text-[#fff]">
                    <Input placeholder='Email' fplaceholder='Digite seu Email'/>
                    <Input placeholder='Senha' fplaceholder='Digite sua Senha'/>
                    <a href="#">Esqueceu a senha?</a>
                    <Button botao='Iniciar Sessão'/>    
                </div>
            </form>
        </>
    )
}