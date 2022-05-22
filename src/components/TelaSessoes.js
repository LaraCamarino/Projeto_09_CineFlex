import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Sessao({ dia, data, horario, id }) {
    return (
        <>
            <p>{dia} - {data}</p>
            <Link to={`/assentos/${id}`}>
            <div className="opcoes-horario">
                {horario.map((item, index) => <button key={index}>{item.name}</button>)}
            </div>
            </Link>
        </>
    )
}

export default function TelaSessoes() {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setSessoes({ ...response.data })
        });



    }, []);

    let diaSessao = sessoes.days;

    return (
        <section className="tela-horarios">
            <h2>Selecione o horário</h2>
            <div className="horario">
                {
                    !diaSessao ?
                        <h2>Carregando</h2>
                    :
                        diaSessao.map((item, index) => <Sessao key={index} id={item.id} dia={item.weekday} data={item.date} horario={item.showtimes} />)
                }
            </div>

            <footer className="footer">
                <img src={sessoes.posterURL} alt="" ></img>
                <p>{sessoes.title}</p>
            </footer>
        </section>
    )
}