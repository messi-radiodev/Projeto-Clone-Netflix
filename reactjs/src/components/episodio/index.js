import React from 'react'

const Episodio = () => {
    return (
        <li className="row">
                                    <div className="col-1 my-auto text-center">
                                        <h3 className="text-white">1</h3>
                                    </div>
                                    <div className="col-4">
                                        <img src={require("../../assets/filmes/lucifer.jpg")} className="img-fluid" alt="Nome do Episódio" />
                                    </div>
                                    <div className="col-7">
                                        <h3 className="text-white">Nome do Episódio</h3>
                                        <p className="text-white" style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.623)' }}>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        </p>
                                    </div>
                                </li>
    )
}

export default Episodio;