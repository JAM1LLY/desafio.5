function inverterString(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
      invertida += string[i];
    }
    return invertida;
  }
  
  const minhaString = "Olá, mundo!";
  const stringInvertida = inverterString(minhaString);
  console.log(stringInvertida); // Saída: "!odnum ,álO"
  