import {play , stop, acresement, decrement} from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

import {forest, rain, coffe, fire} from './elements.js'


export function playTimer(){
  play.addEventListener('click', () => {
  state.isRunning = true,
  timer.coutdown()
 
  })
}

export function stopTimer(){
  stop.addEventListener('click', () =>{
    state.isRunning = false
    timer.coutdown()
    
  })
}

export function acresementTimer(){
  acresement.addEventListener('click', () => {
    timer.acrementtimer()
  })
}

export function decrementTimer(){
  decrement.addEventListener('click', () => {
    timer.decremnttimer()
  })
  
}


export function forestSounds() {
  let isAudioPlaying = false;

  forest.addEventListener('click', () => {
    if (isAudioPlaying) {
      
      sounds.forestAudio.pause();
      isAudioPlaying = false;
    } else {
     
      sounds.forestAudio.play();
      isAudioPlaying = true;

    }
    forest.classList.toggle('active', isAudioPlaying);
  });
}

export function rainSounds() {
  let isAudioPlaying = false;

  rain.addEventListener('click', () => {
    if (isAudioPlaying) {
      
      sounds.rainAudio.pause();
      isAudioPlaying = false;
    } else {
     
      sounds.rainAudio.play();
      isAudioPlaying = true;

    }
    rain.classList.toggle('active', isAudioPlaying);
  });
}

export function coffeSounds() {
  let isAudioPlaying = false;

  coffe.addEventListener('click', () => {
    if (isAudioPlaying) {
      
      sounds.coffeshop.pause();
      isAudioPlaying = false;
    } else {
     
      sounds.coffeshop.play();
      isAudioPlaying = true;

    }
    coffe.classList.toggle('active', isAudioPlaying);
  });
}

export function firesouds() {
  let isAudioPlaying = false;

  fire.addEventListener('click', () => {
    if (isAudioPlaying) {
      
      sounds.fireAudio.pause();
      isAudioPlaying = false;
    } else {
     
      sounds.fireAudio.play();
      isAudioPlaying = true;

    }
    fire.classList.toggle('active', isAudioPlaying);
  });
}

