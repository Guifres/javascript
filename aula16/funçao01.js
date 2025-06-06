function parimpar(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
var num = 23
let res = parimpar(num)
console.log(`O numero é ${res}`)