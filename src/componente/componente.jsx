function Render({ Produc, agregarAlCarrito }) {
    return (
        <main className="renderizado">
            <img
                src={Produc.thumbnail}
                alt={Produc.title}
                width="150"
            />

            <h2>{Produc.title}</h2>

            <h3>${Produc.price}</h3>

            <p>{Produc.stock}</p>

            <button onClick={() => agregarAlCarrito(Produc)}>
                Agregar al Carrito
            </button>
        </main>
    );
}

export default Render;