const a = parseInt(prompt("nhap vao so bat ki a:"))
const b = parseInt(prompt("nhap vao so bat ki b:"))

for (let n=0; n<b+1; n++) {
    i=Math.sqrt(n)
    if (i*i == n) {
        alert(`${n} la so chinh phuong`);
    }else
    alert(`${n} khong phai la so chinh phuong`); 
}