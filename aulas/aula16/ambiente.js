function parimpar(n) {
    if (n%2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

res = parimpar(15)
console.log(`O número inserido é ${res}`)