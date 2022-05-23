import { Link } from "react-router-dom";

export default function TelaSucesso({ dadosPedido }) {
    
    return (
        <section className="tela-sucesso">
            <h2>Pedido feito
                com sucesso!</h2>
            <div className="informacoes-pedido">
                <div className="info">
                    <h3>Filme e sessão</h3>
                    <p>{dadosPedido.filme}</p>
                    <p>{dadosPedido.data} {dadosPedido.hora}</p>
                </div>
                <div className="info">
                    <h3>Ingressos</h3>
                    {
                        dadosPedido.numeros.map((numero, index) => <p key={index} >Assento {numero}</p>)
                    }
                </div>
                <div className="info">
                    <h3>Comprador</h3>
                    <p>Nome: {dadosPedido.nome}</p>
                    <p>CPF: {dadosPedido.cpf}</p>
                </div>
            </div>
            <div className="voltar-home">
                <Link to={"/"}>
                    <button>Voltar pra Home</button>
                </Link>
            </div>
        </section>
    )
}