
import {SERVER_URL} from "../../settings.js"

export function initFindCar(){
  document.getElementById("result").innerText = ""
  document.getElementById("btn").addEventListener("click",findCar)
}


async function findCar(){
  
  const id = document.getElementById("car-id").value 

  const car = await fetch(SERVER_URL+"/"+id)
           .then(res=> {
            if(!res.ok){
              throw new Error("Car not Found")
            }
            return res.json()
           })
  document.getElementById("result").innerText = JSON.stringify(car,null,3)
}

