import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
    return (
      <nav className="navbar__menu">
        <Link to="/categorias">Categorías</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
      </nav>
    );
};

export default Topbar;