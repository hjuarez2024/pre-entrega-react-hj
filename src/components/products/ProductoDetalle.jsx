import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductoDetalle.module.css';

const ProductoDetalle = () => {
    /* Hook useParams, para acceder al valor del parámetro dinámico id */
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch('/datos/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);
    if (!producto) {
        return <h2>Cargando detalle del producto...</h2>;
    }
    if (!producto.id) {
        return <h2>Producto no encontrado.</h2>;
    }
    return (
        <div className={styles.productDetails}>
            <Link to="/productos" className={styles.linkProducts}>
                ← Volver a productos
            </Link>

            <div className={styles.productCard}>
                <div>
                    <img className={styles.image} src={producto.image} alt={producto.title} />
                </div>

                <div className={styles.productContent}>
                    <h2 className={styles.title}>Detalle del Producto: {producto.title}</h2>
                    <h3>${producto.price}</h3>
                    <h3 className={styles.specsTitle}>Especificaciones:</h3>
                    <p className={styles.specs}>{producto.description}</p>
                </div>
            </div>

        </div>
    );
};
export default ProductoDetalle;