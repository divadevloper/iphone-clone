let container = document.getElementById("sub-continaer");
let clock = document.getElementById('clock')
let displatdate = document.getElementById('datedipaly')
let downicon = document.getElementById("downicon")
let downbuton = document.getElementById("downbuton")
let idkbaby = document.getElementById("idkbaby");
let thepassword = document.getElementById("thepassword")
let caroue = document.getElementById("ahhhhh")
// let nav = document.getElementById("nav")
localStorage.setItem("password", "5678")
let power = true
thepassword.style.display = "none"
caroue.style.display = "none"
// nav.style.display = "none"


function onpower() {
    if (power == true) {
        power = false

        container.style.backgroundImage = "url('phone.jpeg')";

        const weekdays = ["sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"]

        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const now = new Date()
        let day = weekdays[now.getDay()];
        const date = now.getDate()

        const getMonth = month[now.getMonth()]
        const fulldate = `${day},${date} ${getMonth}`
        displatdate.innerHTML = fulldate

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const timestring = `${hours}:${minutes}`
        clock.innerHTML = timestring

        downicon.innerHTML = ` <div id="downicon"> <span class="material-symbols-outlined">
        flashlight_on </span>
      <i class="fa-solid fa-camera"></i> </div>`
        downbuton.innerHTML = `<button id="butonbaby" onclick="nextpage()"> </button>`

        clock.style.display = "block"
        displatdate.style.display = "block"
        downicon.style.display = "block"
        downicon.style.display = "block"
        // nav.style.display = "block"
        downbuton.style.display = "block"
        thepassword.style.display = "none"
        caroue.style.display = "none"



    } else {
        container.style.backgroundImage = "url('black.jpeg')";
        power = true
        clock.style.display = "none"
        displatdate.style.display = "none"
        downicon.style.display = "none"
        downbuton.style.display = "none"
        thepassword.style.display = "none"
        caroue.style.display = "none"

        // nav.style.display = "none"

    }

}
function nextpage() {
    idkbaby.style.display = "none"
    thepassword.style.display = "block"

}

let allbuttons = document.querySelectorAll(".button")
allbuttons.forEach((button) => {
    button.style.width = "50px"

    button.style.heigth = "130px"
    button.style.fontSize = "25px"
    button.style.backgroundColor = "rgba(137, 132, 132, 0.712)"
    button.style.color = "white"
    button.style.border = "none"
    // button.style.border = "100%"



});
let ptage1 = document.getElementById("ptage1")
const result = document.getElementById("passwordinput");
const display = (number) => {
    result.value += number;
    if (result.value.length == 4) {
        console.log(result.value.length);
        if (result.value == localStorage.getItem("password")) {
            thepassword.style.display = "none"
            caroue.style.display = "block"

        } else {
            ptage1.innerHTML = "Try again"
            result.value = ""
        }
    }
}
function cancle() {
    result.value = ""
    idkbaby.style.display = "block"
    thepassword.style.display = "none"
}
