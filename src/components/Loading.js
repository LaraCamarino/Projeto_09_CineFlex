import Load from "../assets/load_film.gif";

export default function Loading() {
    return (
        <div className="loading">
                <img src={Load} alt=""></img>
                <h3>Carregando...</h3>
            </div>
    )
}