const filmes = [
    {titulo: "Filme1", ano: 2000 },
    {titulo: "Filme2", ano: 2001 },
    {titulo: "Filme3", ano: 2005 },
];

const qlfilme = (indice, campo) => {
    return filmes[indice].titulo;

};

/* for (let index = 0; index < filmes.length; index++) {
    console.log (`${index} ` +qlfilme(index))
} */

    filmes.map (filme => console.log (filme.ano)) //pra cada objeto que tiver dentro do objeto filmes, ele vai mostrar cada item da variavel filmes dentro da nova variavel filme, podendo escolher qual o item como no caso o ano.

