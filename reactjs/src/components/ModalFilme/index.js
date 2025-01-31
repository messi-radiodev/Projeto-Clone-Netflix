import React, { useEffect, useState } from "react"; 
import Episodio from "../episodio";
import api from "../../services/api";

const ModalFilme = () => {
    const [filme, setFilme] = useState({});
    const [episodios, setEpisodios] = useState([]);
    const [temporadaSelecionada, setTemporadaSelecionada] = useState("");

    // useEffect para capturar evento e definir o filme selecionado
    useEffect(() => {
        const selectFilmeListener = (event) => {
            setFilme(event.detail); // 'data' é passado como detail no evento
        };

        window.addEventListener('selectFilme', selectFilmeListener);

        return () => {
            window.removeEventListener('selectFilme', selectFilmeListener);
        };
    }, []); 

    // useEffect para carregar episódios quando um filme do tipo série for selecionado
    useEffect(() => {
        if (filme.tipo === "serie" && filme?.temporadas?.length > 0) {
            setTemporadaSelecionada(filme.temporadas[0]._id);
            getEpisodios(filme.temporadas[0]._id);
        }
    }, [filme]);

    // Função para buscar episódios da temporada selecionada
    const getEpisodios = async (temporada_id) => {
        if (!temporada_id) {
            
            return;
        }

        try {
            const response = await api.get(`/api/episodios/temporada/${temporada_id}`); // Corrigido "temporada"
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return;
            }
            
            setEpisodios(res.episodios);
        } catch (err) {
            
            alert("Erro ao carregar episódios.");
        }
    };

    return (
        <div className="modal fade" id="modal-filme" tabIndex="-1" aria-labelledby="modal-filmeLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-hero" style={{ backgroundImage: `url(${filme.capa})` }}>
                        <img src={filme.logo} alt="Nome do Filme" />
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
                                    <p className="filme-descricao">{filme.descricao}</p>
                                </div>
                                <div className="col-5">
                                    <p className="filme-elenco">
                                        Elenco: <span style={{ color: 'white' }}>{filme.elenco?.join(', ')}</span> <br /><br />
                                        Gênero: <span style={{ color: 'white' }}>{filme.generos?.join(', ')}</span> <br /><br />
                                        Cenas e momentos: <span style={{ color: 'white' }}>#BoraBaêaMinhaPorra!</span>
                                    </p>
                                </div>
                            </div>
                            <br />
                            {filme.tipo === "serie" && (
                                <> 
                                    <div className="row">
                                        <div className="col-7">
                                            <h3 className="text-white">Episódios</h3>
                                        </div>
                                        <div className="col-5 text-end">
                                            <select 
                                                className="form-control" 
                                                value={temporadaSelecionada} 
                                                onChange={(e) => {
                                                    setTemporadaSelecionada(e.target.value);
                                                    getEpisodios(e.target.value);
                                                }}
                                            >
                                                {filme.temporadas?.map((temporada) => (
                                                    <option key={temporada._id} value={temporada._id}>
                                                        {temporada.titulo}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <ul className="listaeps">
                                            {episodios.length > 0 ? (
                                                episodios.map((episodio, index) => (
                                                    <Episodio key={episodio._id || index} episodio={episodio} episodeNumber={index + 1} />
                                                ))
                                            ) : (
                                                <p className="text-white">Nenhum episódio encontrado.</p>
                                            )}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFilme;
