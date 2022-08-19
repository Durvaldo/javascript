var $agora = new Date()
var $diaSem = $agora.getDay()

/*
    0 -> Domingo
    1 -> Segunda
    2 -> Terça
    3 -> Quarta
    4 -> Quinta
    5 -> Sexta
    6 -> Sabado
*/

switch ($diaSem){
    
    case 0:
        console.log('Hoje é Domingo');
    break
    
    case 1:
        console.log('Hoje é Segunda-feira');
    break

    case 2:
        console.log('Hoje é Terça-feira');
    break

    case 3:
        console.log('Hoje é Quarta-feira');
    break

    case 4:
        console.log('Hoje é Quinta-feira');
    break

    case 5:
        console.log('Hoje é Sexta-feira');
    break

    case 6:
        console.log('Hoje é Sabado');
    break

    default:
        console.log('[ERRO] ');
    break
}

