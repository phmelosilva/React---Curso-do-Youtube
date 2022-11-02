import React from 'react';

import "./Button.css";

const Button = ( {children, onClick} ) => {
    return ( 
        <button onClick={onClick} className="button">
            {children}
        </button>
     );
}
<Button>Adicionar</Button>
/*
<Button>
    <h1>hellow world</h1> Este hello world é como se fosse o children, logo ele é tudo que fica dentro de quando se chama o componente
</Button>
 */
/*
    O onClick na tag button acima recebe a props onClick, que é uma função, além disso o texto Adicionar é jogado dentro da tag button.
*/
export default Button;