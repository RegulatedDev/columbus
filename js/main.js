const logo=document.getElementById("navbarLogo")
const numOfLogos=15

const randomNumber=Math.floor(Math.random()*numOfLogos)+1

logo.src = `assets/logos/${randomNumber}.png`

console.log("hi")