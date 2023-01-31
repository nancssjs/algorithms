
//     salary     //

function salary() {
    let sal = Number(prompt('Informe seu salário'))
    let porAum = Number(prompt('Informe a porcentagem de aumento'))

    let aumento = sal*porAum/100
    let salF = sal + sal*porAum/100

    alert(`Você teve o aumento de ${aumento} dinheiros e seu novo salário é de ${salF} dinheiros.`)
}