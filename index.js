const a = parseInt(prompt("nhap vao so bat ki a:"))
const b = parseInt(prompt("nhap vao so bat ki b:"))


for (let i = a; i<b+1; i++) {
    let isPrime = true
    if (i === 1){
        isPrime = false
    }
    
    if (i > 1){
        for (let j=2; j<i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
    }
    
    if (i < 1) {
        isPrime = false
    }
    
    if (isPrime) {
        alert(`${i} la so nguyen to `)
    } else {
        alert(`${i} khong phai so nguyen to`)
}
}