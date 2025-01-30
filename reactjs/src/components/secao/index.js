import React from "react";
import Filme from "../filme";

const Secao = ({secao}) => {
    return (
        <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-white">{secao[0]?.generos[0]}</h5>
              <ul className="listafilmes">
                {secao.map(filme => <Filme filme={filme}/>)}	
    
              </ul>
            </div>
          </div>
        </div>
      </section>
    );


};

export default Secao;