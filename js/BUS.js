const button=document.getElementById("xhr")
const flights=document.getElementById("flights")
const flights_section=document.querySelector(".flight_light")

const url="https://api.aviationstack.com/v1/"

let xhr=new XMLHttpRequest()



xhr.onload=function(){
	if(xhr.status===200){
		flights_section.style.display="flex"
		const response=JSON.parse(xhr.responseText)
		response.data.forEach(flight=>{
			const li=document.createElement("li")
			li.textContent=`plane ${flight.flight.iata} from ${flight.departure.airport} is arriving at ${flight.arrival.scheduled}`
			flights.appendChild(li)
        })
	}
}

button.onclick=function(){
	xhr.open("GET",url+"flights?access_key=16a0de86ad27ed61ead3af37cd5e64cc&arr_iata=CMH",true)

	xhr.send(null)
}