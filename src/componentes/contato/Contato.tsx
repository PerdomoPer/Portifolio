import './Contato.css'

export function Contato(){
    
  return(
    
             <div className="formulario">
                <h1 className="titulo">Contate-me</h1> 
                <label htmlFor="text">Nome:</label>
                <input className="box" type="text" placeholder="Digite seu Nome:"/>
                <label htmlFor="text">Email:</label>
                <input className="box" type="text" placeholder="Digite um endereço de email valido:"/>
                <  label htmlFor="text">Telefone:</label>
                <input className="box" type="text" placeholder="Digite seu numero de telefone no formato (xx) xxxxx-xxxx:" />
                <label htmlFor="text">Mensagem:</label>
                <input className="box-msg" type="text" placeholder="Escreve sua mensagem:"/>
                <button className="enviar">Enviar</button>
          </div>
 )
}

export default Contato