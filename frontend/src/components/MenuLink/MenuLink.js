import { Link } from 'react-router-dom';
import './MenuLink.css';
import { useContext } from 'react';
import ContextApp from '../../context/Mycontext';
import axios from 'axios';

const MenuLink = () => {
    const {user, setUser} = useContext(ContextApp);

    const aoSalvar = () => {
        axios.post('http://localhost:8080/api/v1/user', user)
            .then(response => {
                setUser(response)
            }).catch((e) => {
                console.log(e)
            })
    };

    return(
        <Link onClick={aoSalvar} className="btn" to="/listagem">Enviar</Link>
    )
};

export default MenuLink;