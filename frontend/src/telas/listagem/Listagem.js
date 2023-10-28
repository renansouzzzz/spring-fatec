import './Listagem.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContextApp from '../../context/Mycontext';

const Listagem = () => {
    const { user, setUser } = useContext(ContextApp);

    const postInative = (userId) => {
        axios.post(`http://localhost:8080/api/v1/user/delete/${userId}`)
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erro ao inativar usuário:', error);
            });
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/user')
            .then(response => {
                // Certifique-se de que `response.data` seja um array, se não, ajuste conforme necessário.
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }, []);

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
                        {user.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.jobRole}</td>
                                <td>{item.status ? 'Inativo' : 'Ativo'}</td>
                                <td>
                                    {item.status ? (
                                        "Inativo"
                                    ) : (
                                        <button onClick={postInative(item.id)}>Inativar</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <Link to="/" className='btn_back'>Cadastrar mais usuários...</Link>
            </div>
        </div>
    );
};

export default Listagem;
