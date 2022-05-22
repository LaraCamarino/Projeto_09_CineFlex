export default function TelaSucesso() {
    return (
        <section className="tela-sucesso">
            <h2>Pedido feito
                com sucesso!</h2>
            <div className="informacoes-pedido">
                <div className="info">
                    <h3>Filme e sessão</h3>
                    <p>The Batman</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div className="info">
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div className="info">
                    <h3>Comprador</h3>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </div>

            </div>
            <div className="voltar-home">
            
            <button>Voltar pra Home</button>

     
            </div>
        </section>
    )
}