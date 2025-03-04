function openTab(event, tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let Qrcodeimgbox=document.getElementById("Qrcodeimgbox");
let Qrimg=document.getElementById("Qrimg");
let Qrtext=document.getElementById("Qrtext");
let qrlink=document.getElementById("qrlink");
qrlink.innerHTML=url+Qrtext.value;
function generateQR(){
    Qrimg.src=url+Qrtext.value;
    qrlink.innerHTML=url+Qrtext.value;
    qrlink.href=url+Qrtext.value;
}
function switchTab(event,id){
    document.querySelectorAll(".call").forEach(btn=>btn.classList.remove("active"));
    document.getElementById(id).classList.add('active');
}

function callbutton(){
document.getElementById('callbtn').addEventListener("click",function(){
    // document.getElementById('callbtn').style.display="none";
    document.getElementById('phonepopupbox').style.display="flex";
});
}

// function closepopup(){
// document.getElementById('phonepopupbox').style.display="none";
// document.getElementById('callbtn').style.display="grid";
// }

function Phone(){
    let phone=document.getElementById('number').value;
    let msg=document.getElementById('msg').value;
    const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +"Mobile Number: "+phone+"Message: "+msg;
    Qrimg.src=qrApiUrl;
    qrlink.innerHTML=qrApiUrl;
    qrlink.href=qrApiUrl;
}



//closepopup function
function closepopup(button) {
    let popupContainer = button.closest("div.emailpopupcontainer, div.phonepopupcontainer, div.locpopupcontainer, div.eventpopupcontainer");
    if (popupContainer) {
        popupContainer.style.display = "none";
    }
}

//email function
function emailbtn(){
    document.getElementById('emailpopupbox').style.display="flex";
}
function Email(){
    let email=document.getElementById('emailinput').value;
    let subject=document.getElementById('subject').value;
    let content=document.getElementById('content').value;
    const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +"To: "+email+"Subject: "+subject+"content: "+content;;
    Qrimg.src=qrApiUrl;
    qrlink.innerHTML=qrApiUrl;
    qrlink.href=qrApiUrl;
}

//location
function locbtn(){
    document.getElementById('locpopupbox').style.display="flex";
}
function loc(){
    let loclink=document.getElementById('loc-link').value;
    const qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +loclink;
    Qrimg.src=qrApiUrl;
    qrlink.innerHTML=qrApiUrl;
    qrlink.href=qrApiUrl;
}





