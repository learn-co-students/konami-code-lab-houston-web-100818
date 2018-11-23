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
  var keyboardEvent = document.body.addEventListener("keydown", function(event){
    if (event.key == codes[index]) {
      if (index == (codes.length) - 1) {
        alert('Hurray!')
      }
      index++;
    } else {
      index = 0
    }
  });
}	