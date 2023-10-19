import './Contato.css'

export function Contato(){
  return(
            <div className="formulario">
                <h1 className="titulo">Contato</h1>
            <input className="nome" type="text" placeholder="Nome:"/>
            <input className="email" type="text" placeholder="Email:"/>
            <input className="telefone" type="text" placeholder="Telefone:" />
            <input className="mensagem" type="text" placeholder="Mensagem:"/>
            <button className="enviar">Enviar</button>
            </div>
  )
}

export default Contato