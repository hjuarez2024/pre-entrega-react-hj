import Nav from "./Nav";
import styles from './Header.module.css';
import { Link } from 'react-router-dom'; // 1. Importamos Link

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.header}>
                    <h1>
                        Tecno Store
                    </h1>
                </Link>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    );
}
export default Header;