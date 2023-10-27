import { useState, useEffect, useContext } from 'react';
import Input from '../Input/Input'
import './Formulario.css';
import MenuLink from '../MenuLink/MenuLink';
import axios from 'axios';
import ContextApp from '../../context/Mycontext';


const Formulario = () => {
    const {data, setData} = useContext(ContextApp);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cargo, setCargo] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        axios.post('')
            .then(response => {
                const dadosUsuarios = response.json();
                setData(dadosUsuarios);
            }).catch((e) => {
                console.log(e)
            })
    }, [nome, email, senha, cargo, status]);

    const aoSalvar = (e) => {
        e.preventDefault();
        setNome('');
        setEmail('');
        setSenha('');
        setCargo('');
    };

    // let goTo = "/";

    // const aoClicado = (goTo) => {
    //     if (nome.length === 0 || email.length === 0 || senha.length === 0 || cargo.length === 0 || status.length === 0) {
    //         setError(true)
    //         goTo = "/"
    //     } else {
    //         goTo = "/listagem"
    //     }

    //     return goTo;
    // }


    return (
        <section className='forms'>
            <form onSubmit={aoSalvar}>
                <h2>Registre seus dados</h2>
                <Input
                    obrigatorio={true}
                    label="Nome"
                    placeHolder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input
                    obrigatorio={true}
                    label="Email"
                    placeHolder="Digite seu email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Input
                    obrigatorio={true}
                    label="Senha"
                    placeHolder="Digite sua senha"
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />
                <Input
                    obrigatorio={true}
                    label="Cargo"
                    placeHolder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input
                    obrigatorio={true}
                    label="Status"
                    placeHolder="Digite seu status"
                    valor={status}
                    aoAlterado={valor => setStatus(valor)}
                />
                <MenuLink />
                {/* {error && alert('Um dos campos estão vazios')} */}
            </form>
        </section>
    )
};

export default Formulario;