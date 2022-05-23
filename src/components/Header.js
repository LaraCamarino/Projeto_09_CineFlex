import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigateTo = useNavigate();

    function voltarPagina() {
        navigateTo(-1);
    }

    return (
        <header className="header">
            <h1>CINEFLEX</h1>
            {
                window.location.pathname !== "/" ?
                    <ion-icon name="arrow-back-outline" onClick={voltarPagina}></ion-icon>
                    :
                    <></>
            }
        </header>
    )
}