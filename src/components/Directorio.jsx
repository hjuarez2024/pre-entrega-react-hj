import React, { useState, useEffect } from 'react';
import TarjetaContacto from './TarjetaContacto';
import styles from './Directorio.module.css';
function Directorio() {
    const [nosotros, setNosotros] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('/datos/nosotros.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setNosotros(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando equipo, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div className={styles.directorio}>
            <TarjetaContacto personas={nosotros} Mensaje="Empresa"/>
        </div>
    );
}
export default Directorio;