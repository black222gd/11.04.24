//par
const numbers = [1, 2, 3, 4, 5, 6]

const everNumbers = numbers.filter((Number) => {
    return numbers % 2 === 0;
});

console.log(everNumbers);

//impar

const numbers1 = [1, 2, 3, 4, 5, 6]

const everNumbers1 = numbers.filter((Number) => {
    return numbers % 2 === 1;
});

console.log(everNumbers1);

//filtrar 5

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMaioresQue5 = numeros.filter(numero => numero > 5);

console.log(numerosMaioresQue5);

//string

const String1 = ['miguel', 'nao', 'assim', 'sim', 'tedio', 'feitoo', 'claro', 'tim', 'o', 'vivo'];

const string = String1.filter(String1 => String1.length > 5);

console.log(string);


// propriedades

const arrayObj = [
    {nome: "sasa", idade: 18},
    {nome: "duda", idade: 17},
    {nome: "ana", }
];

const idade3 = arrayObj.filter( arrayObj => arrayObj.idade > 17);

console.log(idade3);



//string letras

const letras = String1.filter((t)  => t.startsWith("t") );


console.log(letras);

const palavras = ["maçã", "banana", "abacaxi", "uva", "laranja", "amora"];


const palavrasQueComeçamComLetraEspecifica = palavras.filter(palavra => palavra.charAt(5) === "a");

console.log(palavrasQueComeçamComLetraEspecifica); // Isso irá imprimir ["maçã", "abacaxi"]
