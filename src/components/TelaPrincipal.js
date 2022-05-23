import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from "./Loading";

function Filme({ source, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <img src={source} alt=""></img>
        </Link>
    )
}

export default function TelaPrincipal() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => { setFilmes([...response.data]) });
    }, []);

    return (
        <section className="tela-principal">
            <h2>Selecione o filme</h2>
            
            {
                filmes.length === 0 ?
                    <Loading />
                    : <div className="filmes">
                        {

                            filmes.map((item, index) => <Filme key={index} id={item.id} source={item.posterURL} />)
                        }
                    </div>
            }

        </section>
    )
}