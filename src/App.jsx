import { Api } from './hooks/elUsefect'
import Render from './componente/componente'
import RenderCar from './componente/renderCarr'
import { estCarrito } from './hooks/carrito'
import './App.css'
import './index.css'
//import botonDeCompra from './componente/botoDeCompra'
   //importamos todo lo que vamos a usar en app
function App() {
  const { rende, cargando } = Api()
  const { carrito, agregarAlCarrito } = estCarrito()
  
  return (
    <>
      

      <h1 className='titulo'>Smartphones Gardel</h1>
      {carrito.length > 0 && <button className='carrito'>ver carrito ({ carrito.length})</button>}

      <section className='nombres'>
        {
          cargando
            ? 'Cargando...' : rende.map(Produc => (
                <Render key={Produc.id} Produc={Produc} agregarAlCarrito={agregarAlCarrito}/>))
                
        }
      </section>


  
      
    </>
  )
}

export default App 
///{carrito.map(CARR => ( <RenderCar key={CARR.id} FEV={CARR}