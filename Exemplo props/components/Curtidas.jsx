function Curtidas({aoClicar, total}) {
    return (
    <button onClick={aoClicar}>
        😊 Curtidas: {total}
    </button>
    )
}

export default Curtidas;