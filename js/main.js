const logo=document.getElementById("navbarLogo")

const logos = [
  "Columbus_LogoLockUpRev_Blue_RGB.png",
  "Columbus_LogoLockUpRev_Green_RGB.png",
  "Columbus_LogoLockUpRev_Orange_RGB.png",
  "Columbus_LogoLockUpRev_Pink_RGB.png",
  "Columbus_LogoLockUpRev_Red_RGB.png",
  "Columbus_LogoLockUpRev_Teal_RGB.png",
  "Columbus_LogoLockUpRev_Yellow_RGB.png",
]

let currentLogo=null

function randomizeLogo(){
	let randomIndex=Math.floor(Math.random()*logos.length)
	while (randomIndex==currentLogo){
		randomIndex=Math.floor(Math.random()*logos.length)
		if (randomIndex!=currentLogo){
			break
		}
	}
	currentLogo=randomIndex
	logo.src="../assets/logos/"+logos[randomIndex]
}
randomizeLogo()
setInterval(randomizeLogo,1500)