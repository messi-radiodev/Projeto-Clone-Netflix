import React, {useState} from 'react';
import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Secao from '../../components/secao';

const Home = () => {
    
    return (
        <>

        <ModalFilme />

<div className="container-fluid">

    <Header />
    
</div>

    <Hero />

<div id="conteudo">
      
      <Secao />


    </div>
   </> 
    
    )
};

export default Home;