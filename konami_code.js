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
  function onKeyDownHandler(event) {
    const key = event.key;
    if (key === codes[index]) {
      index++;
      console.log('nice')
      if (index === codes.length) {
        alert("KONAMI SUCCESS!")
        index = 0;
      }
    } else {
      index = 0
    }
  }

  let index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler)
}
