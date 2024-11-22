import React, { useState } from 'react';
import './MyForm.css';

function MyForm() {
    // 3 gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name);

    return (
        <div>
            {/** 1 criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome.:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} />
                </div>
                {/** 2 label envolvendo o input */}
                <label htmlFor="">
                    <span>Email.?: </span>
                    <input type="email" name="email" id="email" placeholder='Digite o seu e-mail' />
                </label>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm