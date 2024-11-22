import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
    // 6 - Controlled inputs
    // 3 gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email);

        {/** 7 limpando formulario */}

        setName("");
        setEmail('');
    }

    return (
        <div>
            {/** 5 - envio de formulário */}
            {/** 1 criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome.:</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Digite o seu nome'
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/** 2 label envolvendo o input */}
                <label>
                    {/** 4 simplicaficação */}
                    <span>Email.?: </span>
                    <input type="email"
                        name="email"
                        placeholder='Digite o seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm