import { useState } from 'react';
import BotonFavorito from '../BotonFavorito';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

export function Item({ id, image, title, price, stock }) {
    const [cantidad, setCantidad] = useState(0);
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${title} al carrito.`);
    }

    return (
        <article className={styles.productCard}>
            <Link to={`/producto/${id}`}>
                <img className={styles.image} src={image} alt={title} />
            </Link>
            <div className={styles.productContent}>
                <Link to={`/producto/${id}`} className={styles.title}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>

            </div>
            {/* Cuando el boton detecta un clic (onClick), se ejecuta la función */}
            <div className={styles.buttonFlex}>
                <button onClick={decrementar}>-</button>
                <p className={styles.count}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>

            <div className={styles.buttonFlex}>
                <button className={styles.cardButton} onClick={agregarAlCarrito}>Agregar al Carrito</button>
                {/* Renderizamos el componente BotonFavorito */}
                <BotonFavorito />
            </div>
        </article>
    );
}