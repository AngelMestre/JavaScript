let a = [52,3,17]
a[3] = 6 
a.push(1)
a.sort()

console.log(`O nosso Vetor é o ${a}`)
console.log(`O Vetor tem ${a.length} posições`)
console.log(a.indexOf(2))

/*
for (var n = 0 ; n < a.length; n++) {
    console.log(a[n])
}
*/

for (let n in a) {
    console.log(a[n])
}