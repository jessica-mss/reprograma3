//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas?
//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora (x,y) {
    let operacao = "soma"
     switch (operacao) {
         case "soma":
           return x+y
             break
 
         case "multiplicacao":
            return x*y
             break
 
         case "divisao":
            return x/y
           break
 
         case "subtracao":
           return x-y   
         break        
     }
 }
 console.log(`O valor da operação é ${calculadora(2,3)}`)