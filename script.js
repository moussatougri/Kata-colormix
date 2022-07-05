const colorBlue= document.querySelector(".blue")
const colorYellow= document.querySelector(".yellow")
const colorMix= document.querySelector(".empty")
const colorMixBtn= document.querySelector(".color-mix")

function mixColor() {
  colorYellow.textContent =""
  colorBlue.textContent =""
  colorBlue.classList.remove("blue");
  colorYellow.classList.remove("yellow");
  colorMix.classList.add("green");
  colorMix.innerText ="green"
}


colorMixBtn.addEventListener("click", mixColor)