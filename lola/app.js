var id = 0

const criarPessoa = (nome, idade, sexo) => {
    let counter = 0
    ++id
    return {
        id,
        nome,
        idade,
        sexo,
        login: () => `O(a) ${nome} logou`,
        logout: () => 'O usuario deslogou',
        incrementCount: () => ++counter
    }
}



const usuario1 = criarPessoa('Durvaldo', 26, 'M')
const usuario2 = criarPessoa('Lola', 15, 'F')
console.log(`Bem vindo ao nosso sistema ${usuario2.nome} vi que você tem ${usuario2.idade} anos caso queira fazer logout, clique aqui.`)

// console.log(usuario2.login())





// const usuario3 = criarPessoa('Yuri', 28, 'M')

// console.log(usuario3.login())


// let durvaldo = criarPessoa('Durvaldo', 26, 'M')
// let lola = criarPessoa('Lola', 26, 'F')
// let yuri = criarPessoa('Yuri', 26, 'M')

// console.log(durvaldo)
// console.log(lola)
// console.log(yuri)




















// durvaldo.nome = 'Maria'
// console.log(durvaldo)


