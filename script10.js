
//     array => array(even) and array(odd)     //

function ex() {
    let vetor = []
    let vetorPar = []
    let vetorImpar = []

    for(c=0; c<20; c++) {
        let n = Number(prompt('Digite um número: '))
        vetor.push(n)

        if(n %2 === 0) {
            vetorPar.push(n)
        } else {
            vetorImpar.push(n)
        }

    }
    
    console.log(`Vetor Original: ${vetor}`)
    console.log(`Vetor Par: ${vetorPar}`)
    console.log(`Vetor Impar: ${vetorImpar}`)
    
}