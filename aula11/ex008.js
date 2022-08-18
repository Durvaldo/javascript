var $vel = 80
var $vel_limite = 80

if ($vel > $vel_limite) {
    console.log(`A velocidade do seu carro é ${$vel}km/h e você será multado por passar do limite de velocidade de ${$vel_limite}km/h para essa via`)
}else {
    console.log(`A velocidade do seu carro é ${$vel}km/h e você está dentro do limite de velocidade de ${$vel_limite}km/h dessa via`)
}

console.log(`Diriga sempre com sinto de segurança!`)