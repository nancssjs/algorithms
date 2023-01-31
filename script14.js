
//     how many even numbers     //

function ex() {   
    
    let matriz = []
    let contador = 0

    for(let l=0; l<5; l++) {
        matriz.push([])
        for(let c=0; c<5; c++) {
            let num = Number(prompt('Digite um número: '))
            matriz[l].push(num)
            
            if(num%2==0) {
                contador++
            }
        }
    }
    
    console.log('Matriz: ', matriz)
    console.log(`Nessa matriz existem ${contador} numeros pares.`)

}