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