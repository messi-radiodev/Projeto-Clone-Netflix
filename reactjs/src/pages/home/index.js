import React, {useState, useEffect} from 'react';
import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Secao from '../../components/secao';
import api from '../../services/api';

const Home = () => {

    const [filmeprincipal, setfilmePrincipal] = useState({});
    const [secoes, setSecoes] = useState([]);


    const getHome = async () => {

        
        try {
            const response = await api.get('api/home');
            const res = response.data;
            
            if (res.error) {
                alert(res.message)
                return false;
            }
            

            
            setfilmePrincipal(res.filmePrincipal);
            setSecoes(res.secoes);

        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getHome();
    }, [])
    
    return (
        <>

        <ModalFilme />

<div className="container-fluid">

    <Header />
    
</div>

    <Hero filme={filmeprincipal} />

<div id="conteudo">
      
     {secoes.map(secao => <Secao secao={secao} />)}


    </div>
   </> 
    
    )
};

export default Home;