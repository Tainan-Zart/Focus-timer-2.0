import state from './state.js'
import * as el from './elements.js'

export function coutdown(){

    clearTimeout(state.coutdownId)

  if(state.isRunning == false){
    return
  }
  
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0 ){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    return
  }

  updateDisplay(minutes, seconds)

  state.coutdownId = setTimeout(() => coutdown(), 1000)
}

export function  acrementtimer(){
  let minutes = Number(el.minutes.textContent);

  minutes += 5;

  el.minutes.textContent = minutes.toString();
}

export function decremnttimer(){
  let minutes = Number(el.minutes.textContent);

  minutes -= 5;

  el.minutes.textContent = minutes.toString();

}



export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes 
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}