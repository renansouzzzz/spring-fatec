import './Listagem.css';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContextApp from '../../context/Mycontext';
import throttle from 'lodash/throttle';

const Listagem = () => {

    const { user, setUser } = useContext(ContextApp);
    
    useEffect(
        throttle(() => {
            {
                axios.get('http://localhost:8080/api/v1/user')
                   .then(data => {
                       setUser(data.data);
                       console.log(data.data)
                   })
                   .catch(error => {
                       console.error('Erro ao buscar dados da API:', error);
                   });
           }
        }, 500000000),
        [user]
      );

    const postInative = (userId) => {

        axios.put(`http://localhost:8080/api/v1/user/delete/${userId}`)
            .then(() => {
                const updatedUser = user.map(item => {
                    if (item.id === userId) {
                        return { ...item, active: false };
                    }
                    return item;
                });
                setUser(updatedUser)
            })
            .catch(error => {
                console.error('Erro ao inativar usuário:', error);
            });
    };

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
                            <th>Inativar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(user) && user.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.jobRole}</td>
                                <td>{item.active ? 'Ativo' : 'Inativo'}</td>
                                <td>
                                <button onClick={() => postInative(item.id)}>Inativar</button>
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
