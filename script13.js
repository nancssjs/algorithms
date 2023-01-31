
//     array multiplied by 3     //

function ex() {   
    let matrizA = []
    let matrizB = []

    for(let l=0; l<5; l++) {
        matrizA.push([])
        for(let c=0; c<5; c++) {
            let num = Number(prompt('Digite um número: '))
            matrizA[l].push(num)
        }
    }

    for(l=0; l<5; l++){
        matrizB.push([])
        for(c=0; c<5; c++) {
                matrizB[l].push(matrizA[l][c] * 3)
        }
    }

    console.log(matrizA)
    console.log(matrizB)
}