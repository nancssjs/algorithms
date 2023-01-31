
//     sum of pairs between 1 and 500     //

let soma = 0
for (let c=1; c<=500; c++) {
    if(c%2==0) {
        console.log(c, ' ')
        soma+=c
    }
}
console.log(`A soma dos pares de 1 á 500 é: ${soma}`)