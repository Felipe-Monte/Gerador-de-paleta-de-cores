const allBoxColors = document.querySelectorAll(".button_color");
const inputHexValue = document.querySelectorAll("input")
const btnChangeColor = document.querySelector(".button_change_color")
const btnLockColor = document.querySelectorAll(".btn_lock")
const iconLock = document.querySelectorAll("i")

function generateRandomHex() {
  const letters = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    hex += letters[randomIndex];
  }
  return hex;
}

function lockColor() {
  btnLockColor.forEach(btn => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector("i")

      if (icon.dataset.lock === "unlocked") {
        icon.dataset.lock = "lock"
        icon.classList.value = "bi bi-lock"
      } else {
        icon.dataset.lock = "unlocked"
        icon.classList.value = "bi bi-unlock"
      }
    })
  })
}
lockColor()

function changeColor() {
  btnChangeColor.addEventListener("click", () => {
    allBoxColors.forEach((box, index) => {

      const input = inputHexValue[index]
      const icon = iconLock[index]

      if (icon.dataset.lock === "unlocked") {
        const color = generateRandomHex()
        input.value = color

        box.style.backgroundColor = color
      }
    })
  })
}
changeColor()

allBoxColors.forEach((box, index) => {
  const color = generateRandomHex()
  const input = inputHexValue[index]

  box.style.backgroundColor = color
  input.value = color
})

function copyColor() {
  allBoxColors.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.nextElementSibling;
      const textCopy = e.target;

      code.select();
      code.setSelectionRange(0, 7);
      navigator.clipboard.writeText(code.value);
      textCopy.innerText = 'Copiado!';

      setTimeout(() => {
        e.target.innerText = 'Clique para copiar';
      }, 1500);
    });
  });
}
copyColor()







