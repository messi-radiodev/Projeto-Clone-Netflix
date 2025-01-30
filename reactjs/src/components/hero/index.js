import React from "react";

const Hero = () => {
    return (
        <div id="hero" className="container-fluid">
    <div className="container">
      <div id="infohero" className="row">
        <div className="col-1"></div>
        <br />
        <img src={require("../../assets/nomefilme.png")} alt="Nome do Filme" className="logofilme" />
        <br />
        <h1>
          <br />
          <img src={require("../../assets/top10.png")} alt="Top 10" /> Top 1 de hoje no Brasil
        </h1>
        <p className="text-light">
          Pregadores profanos. Autoridades corruptas. Amantes assassinos. Numa cidade cheia de pecadores, um jovem busca justiça.
        </p>
        <br />
        <div className="btn-container d-flex justify-content-start">
          <button className="btn btn-lg btn-custom-white" id="botaoassistir">
            <span className="mdi mdi-play"></span> Assistir
          </button>
          <button className="btn btn-lg btn-custom-trlucid" id="botao">
            <span className="mdi mdi-information-outline"></span> Mais informações
          </button>
        </div>
      </div>
    </div>
  </div>
    );


}	

export default Hero;