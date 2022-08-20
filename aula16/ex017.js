function parimpar(n) {
    if (n%2 ==0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
} 

function soma(n1=0, n2=0){
    return n1, n2
}

const $n2 = 3
for (let $n1 = 0; $n1 < 3; $n1++) {
    if ($n1 == 2){
        console.log(`${parimpar(2)} + ${parimpar(2)} = ${parimpar(soma(2, 2))}`)
    } else {
        console.log(`${parimpar($n1)} + ${parimpar(1)} = ${parimpar(soma($n1, 1))}`)
    }
}