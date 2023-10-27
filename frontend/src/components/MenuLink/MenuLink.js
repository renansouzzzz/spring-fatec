import { Link } from 'react-router-dom';
import './MenuLink.css';


const MenuLink = () => {
    return(
        <Link  className="btn" to="/listagem">Enviar</Link>
    )
};

export default MenuLink;