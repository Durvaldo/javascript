let amigo = {
    nome: 'Durvaldo', 
    sexo: 'M', 
    peso: 100,
    engordar(p=0){
        this.peso += p
    }
}

amigo.engordar(-15)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)