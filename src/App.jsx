import { Api } from './hooks/elUsefect'
import Render from './componente/componente'
import RenderCar from './componente/renderCarr'
import { estCarrito } from './hooks/carrito'
import './App.css'
import './index.css'

function App() {
  const { rende, cargando } = Api()
  const { carrito, agregarAlCarrito } = estCarrito()

  return (
    <>
      <h1 className='titulo'>Productos:</h1>

      <section className='nombres'>
        {
          cargando
            ? 'Cargando...' : rende.map(Produc => (
                <Render key={Produc.id} Produc={Produc} agregarAlCarrito={agregarAlCarrito}/>))
                
        }
      </section>

      <h2 className='titulo'>Carrito</h2>

      {carrito.map(CARR => ( <RenderCar key={CARR.id} FEV={CARR}
        />
      ))}
    </>
  )
}

export default App