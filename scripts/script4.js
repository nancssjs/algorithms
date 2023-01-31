
//     age checker     //

function age() {
    let idade = Number(prompt('Quantos anos você tem?'))
    
    if (idade != 0) {
        if (idade <=4) {
            alert('Você é um bebê e nem deveria saber usar um computador. Ou esta mentindo.')
        } else if(idade >=5 && idade <=10) {
            alert('Você é uma criança. Gosta de patrulha canina né?')
        } else if(idade >=11 && idade <=14) {
            alert('Você esta chegando na parte legal, deixando de ser criança.')
        } else if(idade >=15 && idade <=17) {
            alert('Nem adulto nem criança. Deve estar descobrindo as maldades da vida.')
        } else if(idade === 18) {
            alert('Fez 18 e agora o inferno vai começar. É bom ter aproveitado até agora.')
        } else if(idade >=19 && idade <=60) {
            alert('Você ja é adulto e provavelmente tem que ir trabalhar.')
        } else if(idade >=60 && idade <=100) {
            alert('Você deve estar desesperado pensando que vai morrer.\nEu estaria..., Sinto muito e espero que tenha aproveitado a vida sendo feliz.')
        } else {
            alert('[ERRO]')
        } 
    } else {
        alert('[ERRO]')
    }
    


    

    
}