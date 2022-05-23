import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from "./Footer";

function Assento({ numero, disponivel, id }) {

    const [selecionar, setSelecionar] = useState("não");
    const [assentoSelecionado, setAssentoSelecionado] = useState([]);

    function selecionarAssento() {
        setSelecionar("sim")
        if (selecionar === "sim") {
            setSelecionar("não")
        }
        if (!disponivel) {
            alert("Esse assento não está disponível. Por favor, selecione outro.")
        }
    }

    if (!disponivel) {
        return (
            <button className="assento indisponivel" onClick={selecionarAssento}>{numero}</button>
        )
    }
    if (disponivel && selecionar === "sim") {
        return (
            <button className="assento selecionado" onClick={selecionarAssento}>{numero}</button>
        )
    }
    else {
        return (
            <button className="assento" onClick={selecionarAssento}>{numero}</button>
        )
    }


}

function Formulario() {

    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();

        const dados = {
            ids: [],
            name: nome,
            cpf: cpf
        }
        console.log(dados);

        //const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dados)

    }

    return (
        <form onSubmit={enviarFormulario}>
            <div className="informacao-assentos">
                <label for="campoNome">Nome do comprador:</label>
                <input type="text" id="campoNome" placeholder="Digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <label for="campoCPF" >CPF do comprador:</label>
                <input type="text" id="campoCPF" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCPF(e.target.value)} ></input>
            </div>
            <div className="reservar">
                <button onClick={enviarFormulario}>Reservar assento(s)</button>
            </div>
        </form>
    )
}

export default function TelaAssentos() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setAssentos({ ...response.data })
        })

    }, []);

    let qtosAssentos = assentos.seats;
    console.log(assentos)


    return (
        <section className="tela-assentos">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="assentos-disponiveis">

                {
                    !qtosAssentos ?
                        <h2>Carregando</h2>
                        :
                        qtosAssentos.map((item, index) => <Assento key={index} id={item.id} numero={item.name} disponivel={item.isAvailable} />)
                }

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
            <Formulario />

            {
                assentos.movie === undefined ?
                    <h2>Carregando</h2>
                    :
                    <Footer imagem={assentos.movie.posterURL} filme={assentos.movie.title} dia={assentos.day.weekday} hora={assentos.day.date} />
            }

        </section>

    )
}