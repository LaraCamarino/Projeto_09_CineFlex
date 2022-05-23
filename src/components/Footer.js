export default function Footer({ imagem, filme, dia, hora }) {
    return (
        <footer className="footer">
            <img src={imagem} alt=""></img>
            <div>
                <p>{filme}</p>
                {dia ? <p>{dia} - {hora}</p> : ""}
            </div>
        </footer >
    )
}