const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let Qrcodeimgbox=document.getElementById("qrcode");
let Qrimg=document.getElementById("Qrimg");
let Qrtext=document.getElementById("Qrtext");
let qrlink=document.getElementById("qrlink");
qrlink.innerHTML=url+Qrtext.value;
function generateQR(){
    Qrimg.src=url+Qrtext.value;
    Qrimg.style.backgroundColor="red";
    qrlink.innerHTML=url+Qrtext.value;
    qrlink.href=url+Qrtext.value;
}

let input=document.getElementById('url-input');
function callbutton(){
    document.getElementById('callbtn').addEventListener("click", ()=>{
        document.getElementById('url-input').style.display="none";
        document.getElementById('phonepopupbox').style.display="flex";
    });
    }
    function Phone(){
        let phone=document.getElementById('number').value;
        let msg=document.getElementById('msg').value;
        if(msg===" "||!/^[6-9]\d{9}$/.test(phone)){
            alert("Please enter correct details to generate qr code");
            return;
        }
        else{
        const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +"Mobile Number: "+phone+"Message: "+msg;
        Qrimg.src=qrApiUrl;
        qrlink.innerHTML=qrApiUrl;
        qrlink.href=qrApiUrl;
        }
    }
    
    
    //closepopup function
    function closepopup(button) {
        let popupContainer = button.closest("div.emailpopupcontainer, div.phonepopupcontainer, div.locpopupcontainer, div.textpopupcontainer,div.eventpopupcontainer");
        if (popupContainer) {
            popupContainer.style.display = "none";
            document.getElementById('url-input').style.display="flex";
        }
    }

    //email function
    function emailbtn(){
        document.getElementById('url-input').style.display="none";
        document.getElementById('emailpopupbox').style.display="flex";
    }
    function Email(){

        let email=document.getElementById('emailinput').value;
        let subject=document.getElementById('subject').value;
        let content=document.getElementById('content').value;
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)){
            alert("please Enter correct E-Mail to generate QR code");
        }
        if(!subject.trim()||!content.trim()){
            alert("please Enter content to generate QR code");
        }
        const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +"To: "+email+"Subject: "+subject+"content: "+content;
        Qrimg.src=qrApiUrl;
        qrlink.innerHTML=qrApiUrl;
        qrlink.href=qrApiUrl;
    }
    
    //location
    function locbtn(){
        document.getElementById('url-input').style.display="none";
        document.getElementById('locpopupbox').style.display="flex";
    }
    function loc(){
        let loclink=document.getElementById('loc-link').value;
        const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +loclink;
        Qrimg.src=qrApiUrl;
        qrlink.innerHTML=qrApiUrl;
        qrlink.href=qrApiUrl;
    }

    function textbtn(){
        document.getElementById('textbtn').addEventListener('click',()=>{
       document.getElementById('url-input').style.display="none";
       document.getElementById('textpopupbox').style.display="flex";
        })
    }

    function text(){
        let text=document.getElementById('yourtext').value;
        if(text===" "){
            alert("Enter your content");
            return;
        }
        const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +text;
        Qrimg.src=qrApiUrl;
        qrlink.innerHTML=qrApiUrl;
        qrlink.href=qrApiUrl;
    }
