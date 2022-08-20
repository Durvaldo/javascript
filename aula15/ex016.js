let $num = [5, 8, 2, 6, 3]
$num.sort()
$num.push(1, 7, 4, 0)

for (let $d in $num) {
    console.log(`A posição ${$d} em valor ${$num[$d]}`)
}

let $pos = $num.indexOf(9)

if ($pos == -1){
    console.log(`Esse numero não foi definido`)
}

console.log(`A posição ${$pos} em valor ${$num[$pos]}`)