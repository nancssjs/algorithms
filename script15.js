
//     transposed array     //

function ex() {   
    let matrizA = []
    let matrizB = []

    // Cria a matrize
    for(let l=0; l<3; l++) {
        matrizA.push([])
        for(let c=0; c<4; c++) {
            let num = Number(prompt('Digite um número: '))
            matrizA[l].push(num)
        }
    }
    
    // transpoe a matriz
    for(let c=0; c<4; c++) {
        matrizB.push([])
        for(let l=0; l<3; l++) {
            matrizB[c].push(matrizA[l][c])
        }
    }
    
    console.log('Matriz A: ', matrizA)
    console.log('Matriz Transposta: ', matrizB)
    
}