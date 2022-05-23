import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Loading from "./Loading";

function Assento({ numero, disponivel, id, idsSelecionados, setIdsSelecionados, numerosSelecionados, setNumerosSelecionados }) {

    const [selecionar, setSelecionar] = useState(true);

    function selecionarAssento(numero, id) {
        setSelecionar(!selecionar);
        if (selecionar) {
            setIdsSelecionados([...idsSelecionados, id]);
            setNumerosSelecionados([...numerosSelecionados, numero])
        }
        else {
            setIdsSelecionados(idsSelecionados.filter((item) => item !== id));
            setNumerosSelecionados(numerosSelecionados.filter((item) => item !== numero));
        }
    }

    return (
        <>
            {
                !disponivel ?
                    <button className="assento indisponivel" onClick={() => alert("Esse assento não está disponível. Por favor, selecione outro.")}>{numero}</button>
                    :
                    <button className={selecionar ? "assento" : "assento selecionado"}
                        onClick={() => selecionarAssento(numero, id)}>{numero}</button>
            }
        </>
    )
}

function Formulario({ reservar, assentos, idsSelecionados, numerosSelecionados }) {

    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const navigateTo = useNavigate();


    function enviarFormulario(event) {
        event.preventDefault();
        const dados = {
            filme: assentos.movie.title,
            data: assentos.day.date,
            hora: assentos.name,
            ids: idsSelecionados,
            numeros: numerosSelecionados,
            nome: nome,
            cpf: cpf
        }

        const dadosAPI = {
            ids: dados.ids,
            name: dados.nome,
            cpf: dados.cpf
        };

        if (idsSelecionados.length > 0 && nome.length > 0 && cpf.length === 11) {
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dadosAPI
            );

            promise.then(() => {
                console.log("Enviou")
                reservar(dados);
                navigateTo("/sucesso");
            });
        }
    }

    return (
        <form onSubmit={enviarFormulario}>
            <div className="informacao-assentos">
                <label htmlFor="campoNome">Nome do comprador:</label>
                <input type="text" id="campoNome" placeholder="Digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="campoCPF" >CPF do comprador:</label>
                <input type="text" id="campoCPF" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCPF(e.target.value)} ></input>
            </div>
            <div className="reservar">
                <button onClick={enviarFormulario}>Reservar assento(s)</button>
            </div>
        </form>
    )
}

export default function TelaAssentos({ reservar }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState({});
    const [idsSelecionados, setIdsSelecionados] = useState([]);
    const [numerosSelecionados, setNumerosSelecionados] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setAssentos({ ...response.data })
        })

    }, []);

    let qtosAssentos = assentos.seats;


    return (
        <section className="tela-assentos">
            <h2>Selecione o(s) assento(s)</h2>
            {
                !qtosAssentos ?
                    <Loading /> 
                    :
                    <div className="assentos-disponiveis">

                        {
                            qtosAssentos.map((item, index) => <Assento key={index} id={item.id} numero={item.name} disponivel={item.isAvailable} idsSelecionados={idsSelecionados} setIdsSelecionados={setIdsSelecionados}
                                numerosSelecionados={numerosSelecionados} setNumerosSelecionados={setNumerosSelecionados} />)

                        }

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

                        <Formulario reservar={reservar} assentos={assentos} idsSelecionados={idsSelecionados} numerosSelecionados={numerosSelecionados} />
                    </div>

            }

            {
                assentos.movie === undefined ?
                    <></>
                    :
                    <Footer imagem={assentos.movie.posterURL} filme={assentos.movie.title} dia={assentos.day.weekday} hora={assentos.name} />
            }

        </section>

    )
}