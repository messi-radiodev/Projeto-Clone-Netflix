import React from "react";
import Episodio from "../episodio";

const ModalFilme = () => {
    return (
        <div className="modal fade" id="modal-filme" tabIndex="-1" aria-labelledby="modal-filmeLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-hero">
                <img src={require("../../assets/nomefilme.png")} alt="Nome do Filme" />
                <div className="col-12 modal-hero-info">
                    <button className="btn btn-lg btn-custom-white" id="botaoassistir">
                        <span className="mdi mdi-play"></span> Assistir
                    </button> 
                    <a href="#" className="btn-custom-round btn btn-lg border-white rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round btn btn-lg border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round btn btn-lg border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                    </a>
                </div>
            </div>
            <div className="modal-info">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <p className="filme-descricao">
                                Pregadores profanos. Autoridades corruptas. Amantes assassinos. Numa cidade cheia de pecadores, um jovem busca justiça.
                            </p>
                        </div>
                        <div className="col-5">
                            <p className="filme-elenco">
                                Elenco: <span>Gabriel Messias, Malu Vilas Boas, Lara de Alencar, Igor Francischetti.</span> <br /><br />
                                Gênero: <span>Ação, suspense, drama.</span> <br /><br />
                                Cenas e momentos: <span>Violentos.</span>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-7">
                            <h3 className="text-white">Episódios</h3>
                        </div>
                        <div className="col-5 text-end">
                            <select className="form-control">
                                <option value="1">Temporada 1</option>
                                <option value="2">Temporada 2</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        {[...Array(8)].map((_, index) => (
                            <ul className="listaeps" key={index}>
                                <Episodio />
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )

}

export default ModalFilme;