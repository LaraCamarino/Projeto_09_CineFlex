import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaPrincipal from "./TelaPrincipal";
import TelaAssentos from "./TelaAssentos";
import TelaSucesso from "./TelaSucesso";
import TelaHorarios from "./TelaHorarios";

export default function App() {

    return (
        <BrowserRouter>
                    <header class="header">CINEFLEX</header>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} ></Route>
                <Route path="/sessoes/:filmeId" element={<TelaHorarios />} ></Route>
                <Route path="/assentos" element={<TelaAssentos />} ></Route>
                <Route path="/sucesso" element={<TelaSucesso />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}