import {
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
} from "./elements.js"

import Events from "./events.js"
import Sounds from "./sounds.js"
import { setDarkMode, addVolumeRange } from "./controls.js"
import { countdown } from "./timer.js"

const sound = Sounds()

Events({
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
})



