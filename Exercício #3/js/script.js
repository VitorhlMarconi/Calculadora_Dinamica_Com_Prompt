//Exercício #3: Calculadora dinâmica usando o prompt

     var numeroInicial = prompt('Informe o primeiro numero...');
     var operador = prompt('Informe o operador da operação...');

     while(operador != '+' && operador != '-' && operador != '*' && operador != '/'){

         var operador = prompt('Informe o operador da operação...');

     }

     var numeroFinal = prompt('Informe o número final...');

     var resultadoFinal = 0.00;

     numeroInicial = parseFloat(numeroInicial);
     numeroFinal = parseFloat(numeroFinal);

     if(operador == '+'){

        resultadoFinal = numeroInicial + numeroFinal;

     }

     else if(operador == '-'){

         resultadoFinal = numeroInicial - numeroFinal;
        
     }

     else if(operador == '*'){

         resultadoFinal = numeroInicial * numeroFinal
        
     }

     else if(operador == '/' && numeroFinal > 0){

         resultadoFinal = numeroInicial / numeroFinal;
        
     }

     while(operador == '/' && numeroFinal <= 0){

         alert('Não foi possível realizar a divisão. Por favor, informe um número válido!');
         var numeroFinal = prompt('Informe o número final...');
     }

     alert('O resultado final é: ' + resultadoFinal);