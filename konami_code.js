const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0
  document.addEventListener('keydown',konamiCode)

  function konamiCode(e){

    const key = e.key
    div = document.getElementById("konami-code")
    bonus = document.createTextNode("+30 lives")
    if (key === codes[index]){
      index++;
      if (index === codes.length) {
        // why is the alert box not showing
        alert("+30 lives");
        div.appendChild(bonus)

        index = 0
      }      
    } else {
      index = 0
    }
  }
}
