import Directorio from "../Directorio";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Directorio />
            </div>
            <p>&copy; 2026 - Tecno Store. Todos los
            derechos reservados.</p>
        </footer>
    );
}
export default Footer;