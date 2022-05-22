import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaPrincipal from "./TelaPrincipal";
import TelaAssentos from "./TelaAssentos";
import TelaSucesso from "./TelaSucesso";
import TelaSessoes from "./TelaSessoes";

export default function App() {

    return (
        <BrowserRouter>
                    <header className="header">CINEFLEX</header>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} ></Route>
                <Route path="/sessoes/:idFilme" element={<TelaSessoes />} ></Route>
                <Route path="/assentos/:idSessao" element={<TelaAssentos />} ></Route>
                <Route path="/sucesso" element={<TelaSucesso />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}