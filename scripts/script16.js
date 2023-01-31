
//     array A swapped with array B     //

function ex() {   
    let matrizA = []
    let matrizB = []
    let matrizA2 = []
    let matrizB2 = []

    // Cria as matrizes
    for(let l=0; l<5; l++) {
        matrizA.push([])
        for(let c=0; c<3; c++) {
            let num = Number(prompt('Digite um número: '))
            matrizA[l].push(num)
        }
    }
    for(let l=0; l<5; l++) {
        matrizB.push([])
        for(let c=0; c<3; c++) {
            let num = Number(prompt('Digite um número: '))
            matrizB[l].push(num)
        }
    }

    // Troca as matrizes
    for(let l=0; l<5; l++) {
        matrizA2.push([])
        for(let c=0; c<3; c++) {
            matrizA2[l].push(matrizB[l][c])
        }
    }
    for(let l=0; l<5; l++) {
        matrizB2.push([])
        for(let c=0; c<3; c++) {
            matrizB2[l].push(matrizA[l][c])
        }
    }
    
    console.log('Matriz A: ', matrizA)
    console.log('Matriz B: ', matrizB)
    console.log('Matriz A trocada: ', matrizA2)
    console.log('Matriz B trocada: ', matrizB2)
}