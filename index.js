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

btnLockColor.forEach(btn => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i")

    if(icon.dataset.lock === "unlocked"){
      icon.dataset.lock = "lock"
     icon.classList.value = "bi bi-lock"
    }else{
      icon.dataset.lock = "unlocked"
      icon.classList.value = "bi bi-unlock"
    }
    
  })
 })
 
btnChangeColor.addEventListener("click", () => {
  allBoxColors.forEach((box,index)=> {
    const color = generateRandomHex()
    const input = inputHexValue[index]
    const icon = iconLock[index]
    
    // if(icon.dataset.lock === "unlocked"){
    //   icon.classList.value = 'bi bi-lock'
    // }else{
    //   icon.classList.value = 'bi bi-unlock'
    // }

    input.value = color
    
    box.style.backgroundColor = color
  })
})
























































// function generateColorOnScreen() {
//   inputHex.forEach((input, index) => {
//     let hexColor = generateRandomHex()
//     const boxColor = allBoxColors[index];

//     input.value = hexColor

//     if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
//       boxColor.style.backgroundColor = hexColor;
//     } else {
//       console.error(`Valor hexadecimal inválido: ${hexColor}`);
//     }
//   });
// }

// generateColorOnScreen()

// btnChangeColor.addEventListener("click", generateColorOnScreen)

// btnLockColor.forEach(function (btnLockColor) {
//   btnLockColor.addEventListener("click", (e) => {
//     const iconLock = btnLockColor.querySelector("i");

//     if (iconLock.dataset.lock === 'unlocked') {
//       iconLock.dataset.lock = 'lock'
//       iconLock.classList.value = 'bi bi-lock'
      
//     } else {
//       iconLock.dataset.lock = 'unlocked'
//       iconLock.classList.value = 'bi bi-unlock'
      
//     }
//   })
// })





