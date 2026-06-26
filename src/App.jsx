import { Api } from './hooks/elUsefect'
import Render from './componente/componente'
import RenderCar from './componente/renderCarr'
import { estCarrito } from './hooks/carrito'
import './App.css'
import './index.css'
//import botonDeCompra from './componente/botoDeCompra'

function App() {
  const { rende, cargando } = Api()
  const { carrito, agregarAlCarrito } = estCarrito()
  
  return (
    <>
      {carrito.length > 0 && <button className='carrito'>carrito ({ carrito.length})</button>}

      <h1 className='titulo'>Smartphones Gardel</h1>

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