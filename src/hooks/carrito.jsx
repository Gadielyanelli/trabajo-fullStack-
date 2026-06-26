import { useState } from "react";

export function estCarrito() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (Produc) => {

        if (!carrito.some(CARR => CARR.id === Produc.id)) {
            setCarrito([...carrito, Produc]);
            // si el prodcuto es distinto a lo que tenemos e carrito lo agrega 
        } 
        else {
            
            const eliminarCarrito =
                carrito.filter(CARR => Produc.id !== CARR.id);

            setCarrito(eliminarCarrito);
            // y si producto es igual a lo que ya esta agregado lo elimina
        }
    };

    return {
        carrito,
        agregarAlCarrito
    };
    // para importarlo (:
}