import { useState } from 'react'
import './Contato.css'

export function Contato(){
  const [nome,setNome]=useState("")
  const [email,setEmail]=useState("")
  const [telefone,setTelefone]=useState("")
  const [mensagem,setMensagem]=useState("")
  
  function TrataNome(e:React.ChangeEvent<HTMLInputElement>){
    setNome(e.target.value)
}
function TrataEmail(e:React.ChangeEvent<HTMLInputElement>){
  setEmail(e.target.value)
}
function TrataTelefone(e:React.ChangeEvent<HTMLInputElement>){
  setTelefone(e.target.value)
}
function TrataMensagem(e:React.ChangeEvent<HTMLInputElement>){
  setMensagem(e.target.value)
}
  return(
    
             <div className="formulario">
                <h1 className="titulo">Contate-me</h1> 
                <label htmlFor="text">Nome:</label>
                <input className="box" type="text" placeholder="Digite seu Nome:"
            onChange={TrataNome} />
            {nome && <p className='box2'> {nome} </p>}
          
                <label htmlFor="text">Email:</label>
                <input className="box" type="text" placeholder="Digite um endereço de email valido:" onChange={TrataEmail} />
            {email && <p className='box2'> {email} </p>}

                <  label htmlFor="text">Telefone:</label>
                <input className="box" type="text" placeholder="Digite seu numero de telefone no formato (xx) xxxxx-xxxx:" onChange={TrataTelefone} />
            {telefone && <p className='box2'> {telefone} </p>}

                <label htmlFor="text">Mensagem:</label>
                <input className="box-msg" type="text" placeholder="Escreve sua mensagem:" onChange={TrataMensagem} />
            {mensagem && <p className='box2'> {mensagem} </p>}

                <button className="enviar">Enviar</button>
          </div>
 )
}

export default Contato
