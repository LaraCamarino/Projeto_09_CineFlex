export default function TelaAssentos() {
    return (
        <section className="tela-assentos">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="assentos-disponiveis">
                <button className="assento">1</button>
                <button className="assento">2</button>
                <button className="assento">3</button>
                <button className="assento">4</button>
                <button className="assento">5</button>
                <button className="assento">6</button>
                <button className="assento">7</button>
                <button className="assento">8</button>
                <button className="assento indisponivel">9</button>
                <button className="assento selecionado">10</button>
                <button className="assento">1</button>
                <button className="assento">2</button>
                <button className="assento">3</button>
                <button className="assento">4</button>
                <button className="assento">5</button>
                <button className="assento">6</button>
                <button className="assento">7</button>
                <button className="assento">8</button>
            </div>
            <div className="assentos-opcoes">
                <div>
                    <button className="assento selecionado"></button>
                    <p>Selecionado</p>
                </div>
                <div>
                    <button className="assento"></button>
                    <p>Disponível</p>
                </div>
                <div>
                    <button className="assento indisponivel"></button>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="informacao-assentos">
                <h3>Nome do comprador:</h3>
                <input type="text" placeholder="Digite seu nome..."></input>
                <h3>CPF do comprador:</h3>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>
            <div className="reservar">
                <button>Reservar assento(s)</button>
            </div>
            <footer className="footer">
                <img src="/assets/cartaz_batman.jpeg" alt=""></img>
                <div>
                    <p>The Batman</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </section>

    )
}