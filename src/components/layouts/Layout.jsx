import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom'; // Importamos Outlet

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                {/* Aquí se renderizará el componente de la ruta activa */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;