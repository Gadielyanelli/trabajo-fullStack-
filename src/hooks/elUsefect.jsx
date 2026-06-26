import { useEffect, useState } from "react";

export function Api() {
    const ApiLink = "https://dummyjson.com/products/category/smartphones"

    const [rende, setRende] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const response = await fetch(ApiLink);
                const datosFinales = await response.json();

                setRende(datosFinales.products);
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false);
            }
        };

        consultarAPI();
    }, []);

    return { rende, cargando, datos };
}