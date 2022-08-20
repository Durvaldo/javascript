var $hora = new Date().getHours()
var $minutos = new Date().getMinutes()
var $text

if ($hora < 10){
    $text = `Agora são 0${$hora}`
} else if ($hora == 12){
    $text = `Agora é ${$hora}`
} else{   
    $text = `Agora são ${$hora}`
}

if ( $minutos < 10 ){
    $text += (`:0${$minutos}`)
} else{
    $text += (`:${$minutos}`)
}

console.log($text)

if ( $hora < 12 ) {
    console.log(`Bom dia`)
} else if( $hora <= 18 ) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}