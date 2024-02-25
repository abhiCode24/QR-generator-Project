let qrImg = document.getElementById("Qrimg");
let textBox = document.getElementById("Textbox");
let qrBox = document.getElementById("Qrbox")

function qrGenerator(){
    if(textBox.value.length>0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
        + textBox.value;

        qrBox.classList.add("showImg");
        
    }else{
        textBox.classList.add("error");
    }
}