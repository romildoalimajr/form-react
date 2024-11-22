import React from 'react';
import './MyForm.css';

function MyForm() {
  return (
    <div>
        {/** 1 criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome.:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' />
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