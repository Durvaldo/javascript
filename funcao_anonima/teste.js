const somaAnonima = (numero1) => {
    return (numero2) => (numero1 + numero2)
}

const minhaClosure = somaAnonima(2)

const primeiraSoma = minhaClosure(-2)
const segundaSoma = minhaClosure(-1)
const terceiraSoma = minhaClosure(0)
const quartaSoma = minhaClosure(1)
const quintaSoma = minhaClosure(2)