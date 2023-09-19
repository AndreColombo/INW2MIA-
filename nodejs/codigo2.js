const parImparNovo = (numero) => {
  if (numero < 0) {
    return "Negativo";
  } else if (numero == 0) {
    return "Neutro";
  } else {
    if (numero % 2 == 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
};

console.log("O número é " + parImparNovo(0));
console.log("O número é " + parImparNovo(-1));
console.log("O número é " + parImparNovo(1));
console.log("O número é " + parImparNovo(2));
