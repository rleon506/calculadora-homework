function operaciones (operacion) {
  
  let numerouno = Number(document.getElementById('numerouno').value);
  let numerodos = Number(document.getElementById('numerodos').value);
  let resultado;
  let texto_resultado = document.getElementById('textoresultado');
  
  //Se inicializa la pantalla de resultado
  texto_resultado.textContent = " ";

  if(isNaN(numerouno) || isNaN(numerodos)){
    alert('👀 El número uno o número dos deben de ser números válidos.');
  }
  else
  {
    //Realiza la operación indicada 
    switch (operacion){
      case '+':
        resultado = 'El resultado es: ' + suma(numerouno, numerodos);
        break;
      case '-':
        resultado = 'El resultado es: ' + resta(numerouno, numerodos);
        break;
      case '*':
        resultado = 'El resultado es: ' + multiplica(numerouno, numerodos);
        break; 
      case '/':
        if (numerouno === 0){
          alert('👀 El dividendo no puede ser 0.');
          resultado = " ";
        } else{
          resultado = 'El resultado es: ' + division(numerouno, numerodos);
        }        
        break;
      case 'limpiar':
        document.getElementById('numerouno').value = null;
        document.getElementById('numerodos').value = null;
        texto_resultado.textContent = resultado;
        break;            
      default: 
        alert('Operación no válida.');
        resultado = "";                  
    }
    
    //Muesta resultado
    texto_resultado.textContent = resultado;
  }
}

//Suma dos números
function suma (numerouno, numerodos){
  return numerouno + numerodos;
}

//Resta dos números
function resta (numerouno, numerodos){
  return numerouno - numerodos;
}

//Multiplica dos números
function multiplica (numerouno, numerodos){
  return numerouno * numerodos;
}

//Divide dos números
function division (numerouno, numerodos){
  return numerouno / numerodos;
}