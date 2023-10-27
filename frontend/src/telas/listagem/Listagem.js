import './Listagem.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Listagem = () => {
    const [data, setData] = useState([{
        id: 0,
        nome: "",
        email: "",
        senha: "",
        cargo: "",
        status: ""
    }]);

    useEffect(() => {
        axios.get('')
            .then(response => setData(response.json))
            .catch((e) => console.log(e))
    })


    return (
        <div className="container">
            <div className='section_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Cargo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.senha}</td>
                                    <td>{item.cargo}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to="/" className='btn_back'>cadastrar mais usuários...</Link>
            </div>
        </div>
    )
}

export default Listagem;