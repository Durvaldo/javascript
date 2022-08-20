function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

const $numero = 1000
console.log(`O fatorial de ${$numero} é ${fatorial($numero)}`)