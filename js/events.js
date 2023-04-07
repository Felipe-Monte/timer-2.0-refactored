import sounds from "./sounds.js"
const sound = sounds()
export default function events({
  buttonPlay,
  countdown,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  buttonVolumeUp,
  buttonVolumeDown,
  boxSoundForest,
  boxSoundRain,
  boxSoundMarket,
  boxSoundFire,
  volumeControlForest,
  volumeControlRain,
  volumeControlMarket,
  volumeControlFire,
  addVolumeRange,
  setDarkMode,
  sun,
  moon
}) {
  buttonPlay.addEventListener('click', function () {
    countdown()
  })

  buttonStop.addEventListener('click', function () {
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
  })

  buttonVolumeUp.addEventListener('click', function () {
    console.log("Aumentando som +")
  })

  buttonVolumeDown.addEventListener('click', function () {
    console.log("diminuindo som -")
  })

  boxSoundForest.addEventListener('click', function () {
    if (boxSoundForest.classList.contains('enable')) {
      boxSoundForest.classList.remove('enable')
      sound.forestSound.pause()
      return
    }

    boxSoundForest.classList.add('enable')
    sound.forestSound.play()
  })

  boxSoundRain.addEventListener('click', function () {
    if (boxSoundRain.classList.contains('enable')) {
      boxSoundRain.classList.remove('enable')
      sound.rainSound.pause()
      return
    }

    boxSoundRain.classList.add('enable')
    sound.rainSound.play()
  })

  boxSoundMarket.addEventListener('click', function () {
    if (boxSoundMarket.classList.contains('enable')) {
      boxSoundMarket.classList.remove('enable')
      sound.coffeeSound.pause()
      return
    }

    boxSoundMarket.classList.add('enable')
    sound.coffeeSound.play()
  })

  boxSoundFire.addEventListener('click', function () {
    if (boxSoundFire.classList.contains('enable')) {
      boxSoundFire.classList.remove('enable')
      sound.firePlaceSound.pause()
      return
    }

    boxSoundFire.classList.add('enable')
    sound.firePlaceSound.play()
  })

  volumeControlForest.addEventListener('input', function () {
    addVolumeRange(volumeControlForest, sound.forestSound)
  })

  volumeControlRain.addEventListener('input', function () {
    addVolumeRange(volumeControlRain, sound.rainSound)
  })

  volumeControlMarket.addEventListener('input', function () {
    addVolumeRange(volumeControlMarket, sound.coffeeSound)
  })

  volumeControlFire.addEventListener('input', function () {
    addVolumeRange(volumeControlFire, sound.firePlaceSound)
  })

  sun.addEventListener('click', function () {
    sun.classList.add('hide')
    moon.classList.remove('hide')
    setDarkMode()
  })

  moon.addEventListener('click', function () {
    moon.classList.add('hide')
    sun.classList.remove('hide')
    setDarkMode()
  })

}