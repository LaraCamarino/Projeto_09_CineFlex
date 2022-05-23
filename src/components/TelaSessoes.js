import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Footer from "./Footer";
import Loading from "./Loading";

function Sessao({ dia, data, horario }) {
    return (
        <>
            <p>{dia} - {data}</p>

            <div className="opcoes-horario">
                {horario.map((item, index) =>
                    <Link to={`/assentos/${item.id}`} key={index}>
                        <button key={index}>{item.name}</button>
                    </Link>)}
            </div>

        </>
    )
}

export default function TelaSessoes() {
        useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <Loading />
                        :
                        diaSessao.map((item, index) => <Sessao key={index} dia={item.weekday} data={item.date} horario={item.showtimes} />)
                }
            </div>

            <Footer imagem={sessoes.posterURL} filme={sessoes.title} />

        </section>
    )
}