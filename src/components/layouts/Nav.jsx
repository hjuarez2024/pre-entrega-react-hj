import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                {/* Uso de Link para navegación fluida, renderiza el componente asociado a cada ruta, din recarga de pagina */}
                <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
                <li><Link to="/productos" className={styles.navLink}>Productos</Link></li>
                <li><Link to="/contacto" className={styles.navLink}>Contacto</Link></li>
                <li><Link to="/carrito" className={styles.navLink}>Carrito</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;