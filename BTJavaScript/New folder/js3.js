var button = document.getElementById('htcs');
button.onclick = function(){
    let s =document.getElementById('s').value;
    if (s=="") {
        alert("Vui lòng nhập dữ liệu");
    }
    else {
        s = Number(s);
        inKQ (s);
    }
}
function inKQ(s){
      if (isNaN(s) || s < 1) {
        alert("Không hợp lệ!")
            return;
        }
        let cs = "";
        for (let i = 1; i <= s; i++) {
            cs += i + " ";
        }
        alert("Các số được in ra gồm: "+cs);
}