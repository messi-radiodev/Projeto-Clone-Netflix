import React from "react";


const Filme = ({filme}) => {

    return (
        <li className="filme" data-bs-toggle="modal" data-bs-target="#modal-filme">
                  <img src={filme.thumb} className="img-fluid" alt="Lucifer" />
                  <div className="filmeinfo">
                    <div className="col-12">
                      <a href="#" className="btn-custom-round btn btn-light rounded-circle">
                        <span className="mdi mdi-play"></span>
                      </a>
                      <a href="#" className="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                      </a>
                      <a href="#" className="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                      </a>
                      <a href="#" className="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                      </a>
                    </div>
                    <p>T3:E9 <span>"Bora Bahêa Minha Porra"</span></p>
                  </div>
                </li>
    )
}

export default Filme;