import React from 'react'

const Episodio = ({episodio}) => {
            return (
        <li className="row">
            
                                    <div className="col-1 my-auto text-center">
                                        <h3 className="text-white">{episodio.numero}</h3>
                                    </div>
                                    <div className="col-4">
                                        <img style={{ width: '350px', height: '100px', objectFit: 'cover' }} src={"https://"+episodio.capa} className="img-fluid" alt="Nome do Episódio" />
                                    </div>
                                    <div className="col-7">
                                        <h3 className="text-white">{episodio.titulo}</h3>
                                        <p className="text-white" style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.623)' }}>
                                            {episodio.descricao}
                                        </p>
                                    </div>
                                </li>
    )
}

export default Episodio;