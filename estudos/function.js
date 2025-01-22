/*function soma() {
    console.log (1+3)
}

soma() */
/*
function soma(num1,num2) {
    console.log(num1+num2)
}
soma(4,5)
*/
/*
const infofilme = [
    {nome: "filme1" , ano: 2015},
    {nome: "filme2" , ano: 2020},
    {nome: "filme3" , ano: 2025}
];

function filmes(qualfilme) {
    return `${infofilme[qualfilme].nome} - ${infofilme[qualfilme].ano}`;
    
}
console.log (filmes(0))
*/

const filmes = [
    {filme: "HP", ano: 1997},
    {filme: "HP2", ano: 2000},
    {filme: "HP3", ano: 2005},
]
/*
function cartaz(indice, campo) {
    return filmes[indice][campo];
}
console.log (cartaz(2, "ano"));
*/

const getfilmes = (indice, campo) => { //arrays
    return filmes[indice][campo]
} 
console.log(getfilmes(1, "ano"))
console.log(getfilmes(1, "filme"))
console.log(getfilmes(0, "ano"))
console.log(getfilmes(2, "filme"))
