function calcularMedia(){
  var total = 0;
  var qtd = arguments.length;

  // Validando se forem do mesmo tipo, pois 0 também é interpretado como falso, resultando na média errada
  for(i = 0; typeof i === typeof arguments[i] ; i++){
    total += arguments[i];
  }
  return total / qtd;
};

function sortear(numero){
  if(isNaN(numero)){
    alert("Digite número válidos");
  }

  var _numero = numero || 1;
  var numeroSorteado = Math.random();
  
  numeroSorteado = Math.floor(numeroSorteado * _numero);

  return numeroSorteado
}