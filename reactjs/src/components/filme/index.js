import React from "react";

const Filme = ({filme}) => {

    const monstrarnome = () => {
        alert(filme.nome)
    }
    
    return (
    <tr>
      <td>{filme.nome}</td>
      <td>{filme.categoria}</td>
      <td>{filme.ano}</td>
      <td className='text-end'>
        <button type="button" className="btn btn-info" onClick={monstrarnome}>Informações</button> { ''}
        <button type="button" className="btn btn-danger">Excluir</button>
      </td>
    </tr>
    )
}

export default Filme;