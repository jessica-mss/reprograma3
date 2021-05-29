//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function funcaoDivisao (n1, n2) {
    if(n1%n2 === 0) {
        console.log(" é par")
    }
    let divisao = n1/n2
    return divisao    
    
}
console.log("O resultado é :" + funcaoDivisao(2,2))