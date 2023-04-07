
export function setDarkMode() {
  document.body.classList.toggle('dark-mode')
}

export function addVolumeRange(range, item) {
  const volumeValue = parseFloat(range.value) / 100
  if (!isNaN(volumeValue) && volumeValue >= 0 && volumeValue <= 1) {
    item.volume = volumeValue
  }
}



