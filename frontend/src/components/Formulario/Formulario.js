import { useContext, useEffect } from 'react';
import Input from '../Input/Input'
import './Formulario.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContextApp from '../../context/Mycontext';

const Formulario = () => {
    const {user, setUser} = useContext(ContextApp)

    useEffect(() => {
        setUser({
            name: '',
            email: '',
            password: '',
            jobRole: ''
        });
    }, []);

    const aoSalvar = () => {
        axios.post('http://localhost:8080/api/v1/user', user)
            .then(response => {
                setUser([...user, response.data])
                console.log(response.data)
            }).catch((e) => {
                console.log(e)
            })
    };

    return (
            <section className='forms'>
                <form>
                    <h2>Registre seus dados</h2>
                    <Input
                        obrigatorio={true}
                        label="Nome"
                        placeHolder="Digite seu nome"
                        valor={user.name}
                        aoAlterado={valor => setUser({ ...user, name: valor })}
                    />
                    <Input
                        obrigatorio={true}
                        label="Email"
                        placeHolder="Digite seu email"
                        valor={user.email}
                        aoAlterado={valor => setUser({ ...user, email: valor })}
                    />
                    <Input
                        obrigatorio={true}
                        label="Senha"
                        placeHolder="Digite sua senha"
                        valor={user.password}
                        aoAlterado={valor => setUser({ ...user, password: valor })}
                    />
                    <Input
                        obrigatorio={true}
                        label="Cargo"
                        placeHolder="Digite seu cargo"
                        valor={user.jobRole}
                        aoAlterado={valor => setUser({ ...user, jobRole: valor })}
                    />
                    <Link onClick={aoSalvar} className="btn" to="/listagem">Enviar</Link>
                    {/* {error && alert('Um dos campos estão vazios')} */}
                </form>
            </section>
    )
};

export default Formulario;