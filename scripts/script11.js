
//     array => array double     //

function double() {

    let vetor = [] 
    let vetorD = [] 

    for(c=0; c<20; c++) {
        let n = Number(prompt('Digite um número: '))
        vetor.push(n)
        vetorD.push(n*2)
    }
    
    console.log(`Vetor Original: ${vetor}`)
    console.log(`Vetor Dobrado: ${vetorD}`)
    
}