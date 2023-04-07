
const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonVolumeUp = document.querySelector('#volume-up')
const buttonVolumeDown = document.querySelector('#volume-low')

const boxSoundForest = document.querySelector('#card-forest')
const boxSoundRain = document.querySelector('#card-rain')
const boxSoundMarket = document.querySelector('#card-market')
const boxSoundFire = document.querySelector('#card-fire')


let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

const volumeControlForest = document.querySelector('#range-forest')
const volumeControlRain = document.querySelector('#range-rain')
const volumeControlMarket = document.querySelector('#range-market')
const volumeControlFire = document.querySelector('#range-fire')

const sun = document.querySelector('.sun_icon')
const moon = document.querySelector('.moon_icon')

export {
  buttonPlay,
  buttonStop,
  buttonVolumeUp,
  buttonVolumeDown,
  boxSoundForest,
  boxSoundRain,
  boxSoundMarket,
  boxSoundFire,
  minutesDisplay,
  secondsDisplay,
  volumeControlForest,
  volumeControlRain,
  volumeControlMarket,
  volumeControlFire,
  sun,
  moon
}