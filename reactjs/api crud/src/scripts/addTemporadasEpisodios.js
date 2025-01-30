const database = require("../services/database");
const Filme = require("../models/filme");
const Temporada = require("../models/temporada");
const Episodios = require("../models/episodio");


const addTemporadasEpisodios = async () => {
    try {
        const series = await Filme.find({tipo: 'serie'}).select('_id');
        for (let serie of series) {
            console.log (`Criando as temporadas e episodios da serie: ${serie.titulo}`);
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`Inserindo a temporada ${i} de ${numTemporadas}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();
                const numEpisodios = Math.floor(Math.random() * 5) + 1;
                for (let j = 1; j <= numEpisodios; j++) {
                    console.log(`Inserindo o episodio ${j} de ${numEpisodios}`);
                    await new Episodios({
                        temporada_id: temporada._id,
                        titulo: `Episodio ${j}`,
                        numero: j,
                        descricao: `Descricao do episodio ${j}`,
                        capa: "picsum.photos/200/300"
                    }).save();
                }
            }
        }
        console.log('Final do Script.');
} catch (err) {
    console.log(err.message);
}
}
addTemporadasEpisodios();