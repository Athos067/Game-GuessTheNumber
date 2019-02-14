
let randomNumber;
let life= 0;
let betNumber = Number(prompt('Insira o número de sua aposta.'));
    while(betNumber > 50 || betNumber < 0){
        betNumber = prompt('Um número de 0 a 50! Insira mais uma vez o número de sua aposta.');
}
const aleatorio = function (min=0, max=50) {
     randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
     return randomNumber;  
  }
  
aleatorio();

  while(life <= 10){
      if(betNumber == randomNumber){
          alert('Você ganhou! Parabéns,talvez agora você pense que esse tempo perdido tenha valido a pena.')
          life = 10;
      }
      else{
          if(betNumber > randomNumber){
            betNumber = Number(prompt('Você errou, seu número é maior que o correto. Tente denovo.'));
            while(betNumber > 50 || betNumber < 0){
                betNumber = prompt('Um número de 0 a 50! Insira mais uma vez o número de sua aposta.');
        }
          }
          else{
            betNumber = Number(prompt('Você errou, seu número é menor que o correto. Tente denovo.'));
            while(betNumber > 50 || betNumber < 0){
                betNumber = prompt('Um número de 0 a 50! Insira mais uma vez o número de sua aposta.');
        }
          }
      }
    life++;
  }
  



