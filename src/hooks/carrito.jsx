import { useState } from "react";

export function estCarrito() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (Produc) => {

        if (!carrito.some(CARR => CARR.id === Produc.id)) {
            setCarrito([...carrito, Produc]);
        } 
        else {
            
            const eliminarCarrito =
                carrito.filter(CARR => Produc.id !== CARR.id);

            setCarrito(eliminarCarrito);
        }
    };

    return {
        carrito,
        agregarAlCarrito
    };
}