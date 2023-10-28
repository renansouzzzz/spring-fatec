import './Listagem.css';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContextApp from '../../context/Mycontext';


const Listagem = () => {
    const {user, setUser} = useContext(ContextApp);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/user')
            .then(response => {
                setUser([...user, response.data])
                console.log(response.data)
            })
            .catch((e) => console.log(e))
    }, [])


    return (
        <div className="container">
            <div className='section_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.jobRole}</td>
                                    <td>{item.status ? 'Inativo' : 'Ativo'}</td>
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