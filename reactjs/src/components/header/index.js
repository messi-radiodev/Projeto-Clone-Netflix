import React from "react";

const Header = () => {

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }
    return (
        <header className="row">
    <div className="col-2">
      <img src={require("../../assets/logo.png")} alt="Logo" className="logonetflix" />
    </div>
    <div className="col-8">
      <ul className="listamenu">
        <li>
          <a href="#">Ínicio</a>
        </li>
        <li>
          <a href="#">Séries</a>
        </li>
        <li>
          <a href="#">Filmes</a>
        </li>
        <li>
          <a href="#">Lançamentos</a>
        </li>
        <li>
          <a href="#">Minha lista</a>
        </li>
      </ul>
    </div>
    <div className="col-2 text-end">
      <a onClick={logout} className="text-white">SAIR</a>

    </div>
  </header>
    );

}	

export default Header;