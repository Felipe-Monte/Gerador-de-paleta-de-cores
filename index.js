const allBoxColors = document.querySelectorAll(".button_color");
const inputHex = document.querySelectorAll("input")
const btnChangeColor = document.querySelector(".button_change_color")
const btnLockColor = document.querySelectorAll(".btn_lock")

function generateRandomHex() {
  const letters = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    hex += letters[randomIndex];
  }
  return hex;
}

function generateColorOnScreen() {
  inputHex.forEach((input, index) => {
    let hexColor = generateRandomHex()
    const boxColor = allBoxColors[index];

    input.value = hexColor

    if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
      boxColor.style.backgroundColor = hexColor;
    } else {
      console.error(`Valor hexadecimal inválido: ${hexColor}`);
    }
  });
}

generateColorOnScreen()

btnChangeColor.addEventListener("click", generateColorOnScreen)

btnLockColor.forEach(function (btnLockColor) {
  btnLockColor.addEventListener("click", (e) => {
    const iconLock = btnLockColor.querySelector("i");

    if (iconLock.dataset.lock === 'unlocked') {
      iconLock.dataset.lock = 'lock'
      iconLock.classList.value = 'bi bi-lock'
      
    } else {
      iconLock.dataset.lock = 'unlocked'
      iconLock.classList.value = 'bi bi-unlock'
      
    }
  })
})





