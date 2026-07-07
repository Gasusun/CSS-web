let soNguyen =42;
let chuoi ="Xin chao";
let dung = true;
console.log("number:", soNguyen);
console.log("string:",  chuoi);
console.log("boolean:", dung);
const gay = 0.1 + 0.2;
console.log(gay);

var button = document.getElementById('giaiBtn');
  giaiBtn.onclick =function(){
    let a =document.getElementById('a').value;
    let b =document.getElementById('b').value;
    
    if (a=="" || b==""){
        alert("Vui long nhap du lieu");
    }
    else {
        a = Number(a);
        b = Number(b);
        bac1(a,b);
    }
}
function bac1(a,b) {
    if (a==0 && b==0){
        alert("Phuong trinh vo so nghiem");
    }
    else if (a!=0 && b==0){
        alert("Phuong trinh co nghiem x=0");
    }
    else if (a==0 && b!=0){
        alert("Phuong trinh vo nghiem");
    }
    else{
        alert("Phuong trinh co nghiem la x=" + (-b/a));
    }
}

var button = document.getElementById('giaiptbh');
  giaiptbh.onclick =function(){
    let a =document.getElementById('a').value;
    let b =document.getElementById('b').value;
    let c =document.getElementById('c').value;
    
    if (a=="" || b=="" || c==""){
        alert("Vui long nhap du lieu");
    }
    else {
        a = Number(a);
        b = Number(b);
        c = Number(c);
        bac2(a,b,c);
    }
}
function bac2(a,b,c){
    let del=b**2-4*a*c;
    if (del<0){
        alert("Phuong trinh vo nghiem");
    }
    else if (del==0){
        alert("Phuong trinh co nghiem kep: x1=x2="+(-b/(2*a)));
    }
    else{
        alert("Phuong trinh co nghiem 2 nghiem phan biet: x1= "+(-b+del/(2*a)) + "x2=  "+(-b-del/(2*a)) );
    }
}