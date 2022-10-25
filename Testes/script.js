const convertToHex = color => {
    const colors = {
        black: '#000000',
        blue: '#00A7E1',
        white: '#FFFFFF',
        pink: '#FF2C55',
        yellow: '#FFAE03'
    }
    return colors[color] 
    ? `O hexadecimal para a cor ${color} é ${colors[color]}`
    : `Não temos o equivalente hexadecimal para ${color}`
}

const colors = [
    'black',
    'blue',
    'white',
    'azul',
    'preto'
]

const logColorMenssage = color => console.log(convertToHex(color))
colors.forEach(logColorMenssage)


const lista = [ {valor: "azul", tamanho: "grande"}, {valor: "verde", tamanho: "pequeno"}, {valor: "branco", tamanho: "medio"} ];

lista.forEach(function(value) {
    value.medida = value.tamanho;
    delete value.tamanho;
});

console.log( lista );

