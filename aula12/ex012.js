var $hora = new Date().getHours()
var $minutos = new Date().getMinutes()

if ( $minutos < 10 ){
    console.log(`Agora são ${$hora}:0${$minutos} horas`)
} else{
    console.log(`Agora são ${$hora}:${$minutos} horas`)
}

if ( $hora < 12 ) {
    console.log(`Bom dia`)
} else if( $hora <= 18 ) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}