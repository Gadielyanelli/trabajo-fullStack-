
function RenderCar({ FEV }) {
    return (
        <main className="renderizado">
            <img
                src={FEV.thumbnail}
                alt={FEV.title}
                width="150"
            />

            <h2>{FEV.title}</h2>

            <h3>${FEV.price}</h3>

            <p>{FEV.stock}</p>
        </main>
    );
}

export default RenderCar;