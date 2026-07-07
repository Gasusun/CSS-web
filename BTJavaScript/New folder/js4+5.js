/*Bài tập 4*/
var button = document.getElementById('doimau');
var dadoi = false;
button.onclick = function(){
    let cards = document.querySelectorAll('.card');
    if (dadoi == false) {
        doimaucard(cards);
        dadoi = true; 
    } 
    else {
    veMauCu(cards);
    dadoi = false; 
    button.value = "Đổi màu thẻ";
    }
}
function doimaucard(cards){
    for (let i = 0; i < cards.length; i++){
        let vtthe = i + 1;
        if (vtthe % 2 == 0){
        cards[i].style.background = 'red';
        }
        else {
        cards[i].style.background = 'blue';
        }
    }
} 
function veMauCu(cards){
    for (let i = 0; i < cards.length; i++){
    cards[i].style.background = ''; 
    cards[i].style.color = ''; 
    }
}
/*Bài tập 5*/
let mang = [1,5,6,2,22,35,9,4,7,36,67]; 
let tong = 0;
for (let so of mang) {
    if (so % 2 !== 0) {
        tong += so;
    }
}
console.log("Tổng các số lẻ trong mảng là:", tong);
