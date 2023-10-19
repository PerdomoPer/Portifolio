import { useState } from 'react'
import './Contato.css'

export function Contato(){
    const [texto,setTexto]=useState("")
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)}

  return(
    <>
            <div className="formulario">
                <h1 className="titulo">Contato</h1>
                <div className='pes'>
            <input className='pesquisa' 
            type="text" 
            placeholder='O que você está procurando?'
            onChange={TrataTexto} />
            {texto && <p className='pesquisa1'>Resultados Para: {texto} </p>}
                
        </div>
            <input className="email" type="text" placeholder="Email:"/>
            <input className="telefone" type="text" placeholder="Telefone:" />
            <input className="mensagem" type="text" placeholder="Mensagem:"/>
            <button className="enviar">Enviar</button>
            </div>
            </>
  )
}

export default Contato
