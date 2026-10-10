import { useState } from "react";
import styles from './BotonFavorito.module.css';
/* Funcionalidad Boton Favorito */
const BotonFavorito = () => {
    const [esFavorito, setEsFavorito] = useState(false);
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    }

    return (
        <button>
            <span onClick={marcarComoFavorito}
                className={styles.button}
            > {esFavorito ? '⭐' : '☆'}
            </span>
        </button>
    );
}
export default BotonFavorito;