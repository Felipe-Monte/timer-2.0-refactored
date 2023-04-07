import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

let resetTimer

export function countdown() {
  resetTimer = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    countdown()
  }, 10)

  return {
    countdown
  }
}



