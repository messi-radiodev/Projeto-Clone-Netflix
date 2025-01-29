import React, {useState} from 'react';
import Filme from '../../components/filme';

const Home = () => {
    // logica do componente
    const [listaFilmes, setListaFilmes] = useState([]);
    const [filme, setFilme] = useState({});

    const cadastrar = () => {
        setListaFilmes([ filme, ...listaFilmes]);}

    // retornar o html do componente
    return (
        <div className='container'>
            <br/>
            <h1>Lista de Filmes</h1>
            <br/>
            <div className='jumbotron'>
                <div className='row'>

                    <br/>
                   
                    <div className='col-4'>
                        <label>Nome</label>
                        <input type='text' className='form-control' placeholder='Nome do Filme' onChange={(e) => setFilme({
                            ...filme,nome: e.target.value})}/>
                    </div>
                    <div className='col-4'>
                        <label>Categoria</label>
                        <select className='form-select' onChange={(e) => setFilme({
                            ...filme,categoria: e.target.value})}>
                            <option value='acao'>Acao</option>
                            <option value='suspense'>Suspense</option>
                            <option value='terror'>Terror</option>
                            <option value='drama'>Drama</option>
                             </select>
                    </div>
                    <div className='col-4'>
                        <label>Ano</label>
                    <input type='text' className='form-control'onChange={(e) => setFilme({
                            ...filme,ano: e.target.value})}/>
                    </div>
               
             
                </div>  
                <br/>
                <button type="button" className="btn btn-success btn-lg w-100" onClick={cadastrar}>Cadastrar Filme</button>
            </div>
            <br/>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Categoria</th>
      <th scope="col">Ano</th>
      <th scope="col" className='text-end'>Ações</th>
    </tr>
  </thead>
  <tbody>
    {listaFilmes.map((filme) => <Filme filme={filme}/>)}
    </tbody>
</table>
        </div>
    )
};

export default Home;