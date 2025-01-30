import React from "react";
import Filme from "../filme";

const Secao = () => {
    return (
        <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-white">Populares da Netflix</h5>
              <ul className="listafilmes">
                <Filme/>
    
              </ul>
            </div>
          </div>
        </div>
      </section>
    );


};

export default Secao;