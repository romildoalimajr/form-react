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
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm