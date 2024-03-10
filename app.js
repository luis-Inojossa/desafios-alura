function mensagemConsole () {
    console.log ('Olá mundo');
}
mensagemConsole();

function nomeConsole (nome) {
    console.log (`Olá ${nome}`);
}
nomeConsole ('neymar junior');

// let name = neymar junior;
// console.log (`Olá ${name}`);

function exibirNumero(numero){
    return numero * 2;
}
let resultadoDobro = exibirNumero(5)
console.log (resultadoDobro);

function threeNumbers (a,b,c) {
    return (a+b+c) / 3;
}
let media = threeNumbers (2,4,6);
console.log (media);

function encontrarMaior(a, b) {
    return a > b ? a : b;
    // a MAIOR QUE b? SE SIM (a) se não (b)
  }
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

  function multiplicação (x) {
    return x * x ;
  }
  let resultadoMultiplicação = multiplicação (10);
  console.log (resultadoMultiplicação);


  function indiceMassaCorporal(Altura,Peso) {
    return Peso/Altura *Altura;
  }
  let IMC = indiceMassaCorporal(1.80,70);
  console.log (IMC);


  function numeroFatorial(número) {
    while (número != 0) {
      return número * número--;
    } 
  }
  let fatorial = numeroFatorial(5);
console.log (fatorial);


function conversãoDolar(dolar) {
  return dolar/ 4.80;
}
  let valorReal = conversãoDolar(10);
  console.log ( valorReal);


  function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  };

  //if (palpite < 1) {
 //   alert ('Número inválido,tente novamente');
 // }
 // else (palpite > 100) {
 //   alert ('Número inválido,tente novamente');
 // }

 if (palpite < 1 || palpite > 100) {
  alert('Número inválido, tente novamente');}

  let listaGenerica = [];


  let linguagensDeProgramação = ['JavaScript','C','C++','Kotlin','Python'];
  linguagensDeProgramação.push('Java','Ruby','Golang');

  let listaNomes = ['Gustavo','Abner','Artur'];
  console.log (listaNomes[0]);

  let listaNombres = ['Alcir','Juninho','Toscano'];
  console.log (listaNombres [1]);

  let suplementos = ['creatina','whey','hipercalórico'];
  console.log (suplementos[2]);

  listaNomes.pop(); //Para remover o último elemento, você pode usar o método pop

  