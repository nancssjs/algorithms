
//     even or odd     //

function eoo() {
    let num = Number(prompt('Digite um número, que não seja zero.'))

    if (num != 0) {
        if (num%2===0) {
            alert('O número é par.')
        } else {
            alert(`O número é impar e sua divisão por 2 é: ${num/2}.`)
        }
    } else {
        alert('Cancelado.')
    }
}