import React, { useState } from 'react';
import './MyForm.css';

function MyForm() {
    // 3 gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email);
    }

    return (
        <div>
            {/** 5 - envio de formulário */}
            {/** 1 criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome.:</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Digite o seu nome'
                        onChange={handleName}
                    />
                </div>
                {/** 2 label envolvendo o input */}
                <label htmlFor="">
                    {/** 4 simplicaficação */}
                    <span>Email.?: </span>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder='Digite o seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
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