
//     sum of pairs in array     //

function ex() {

    let vetor = [] 
    let soma = 0

    for(c=0; c<10; c++) {
        let n = Number(prompt('Digite um número: '))
        vetor.push(n)

        if(n>0) {
            if(vetor[c]%2==0) {
                soma += n
            }
        }
    }

    console.log(vetor)
    console.log(soma)

}