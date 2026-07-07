var button = document.getElementById('timsnt');
  timsnt.onclick =function(){
    let s =document.getElementById('s').value;
    if (s=="") {
        alert("Vui lòng nhập dữ liệu");
    }
    else {
        s = Number(s);
        dsnt (s);
    }
}
function dsnt(s) {
    if(s<2){
        alert(s+ " không phải là số nguyên tố");
        return;
    }
    else if(s==2||s==3){
        alert(s + " là một số nguyên tố");
        return;
    }
    else if(s%2==0){
        alert(s+ " không phải là số nguyên tố");
        return;
    }
    for (let i = 3; i<=Math.sqrt(s); i+=2) {
        if(s%i==0){
            alert(s+" không phải là số nguyên tố");
            return
        }
    }
    alert(s+" là số nguyên tố")
    }


