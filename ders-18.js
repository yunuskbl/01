
let input = prompt("Lütfen İsminizi Giriniz")
let bilgi = document.querySelector("#myName")

bilgi.innerHTML+=input

let today = new Date();

function dateToday() {
    let today = new Date().toLocaleTimeString('tr-TR');
    let gun = new Date().getDay()
    let gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    document.querySelector("#myClock").innerHTML = today +" "+ gunler[gun-1]  ;   
}
setInterval(dateToday,1000)
