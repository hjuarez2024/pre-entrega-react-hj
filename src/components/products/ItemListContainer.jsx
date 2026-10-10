import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import styles from './ItemListContainer.module.css';

/* Componente ItemListContainer carga productos desde productos.json' */
const ItemListContainer = ({ Mensaje }) => {
    /* Hooks useState para los estados iniciales */
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    /* Hook useEffect para efectos secundarios, interacción fuera del componente */
    useEffect(() => {
        fetch('/datos/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <h2 className={styles.productsSectionTitle}>{Mensaje}</h2>
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}
export default ItemListContainer;