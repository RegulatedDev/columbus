const logoEl=document.getElementById("navbarLogo")
const brollEl=document.querySelector(".background-video")

const logos = [
  "Columbus_LogoLockUpRev_Blue_RGB.png",
  "Columbus_LogoLockUpRev_Green_RGB.png",
  "Columbus_LogoLockUpRev_Orange_RGB.png",
  "Columbus_LogoLockUpRev_Pink_RGB.png",
  "Columbus_LogoLockUpRev_Red_RGB.png",
  "Columbus_LogoLockUpRev_Teal_RGB.png",
  "Columbus_LogoLockUpRev_Yellow_RGB.png",
]

const brolls=[
	"ExperienceColumbus_Day3_Drone1_Sub_006.mp4",
	"ExperienceColumbus_Day3_Drone1_Sub_007 (1).mp4",
	"ExperienceColumbus_Day3_Drone1_Sub_041.mp4",
]

let currentLogo=null
let currentBroll=null

function randomizeIndex(currentIndex,stuff){
	let randomIndex=Math.floor(Math.random()*stuff.length)
	while (randomIndex==currentIndex){
		randomIndex=Math.floor(Math.random()*stuff.length)
		if (randomIndex!=currentIndex){
			break
		}
	}
	return randomIndex
}

function randomLogo(){
	const logo=randomizeIndex(currentLogo,logos)
	currentLogo=randomizeIndex
	logoEl.src="../assets/logos/"+logos[logo]
}

function randomBroll(){
	const broll=randomizeIndex(currentBroll,brolls)
	currentBroll=randomizeIndex
	document.querySelector(".video-source").src="../assets/b-roll/"+brolls[broll]
}

setInterval(randomLogo,1500)

//brollEl.onended=function hi(){
//	console.log("hi")
//	randomBroll()
//}
