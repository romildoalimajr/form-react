import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
    // 6 - Controlled inputs
    // 3 gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role: '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        {/** 7 limpando formulario */ }

        setName("");
        setEmail('');
        setBio("");
        setRole('');
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
                {/** 8 - textarea */}
                <label>
                    <span>BIo.:</span>
                    <textarea
                        name='bio'
                        placeholder='Descrição do usuário'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    >

                    </textarea>
                </label>
                {/** 9 - Select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value=""></option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm