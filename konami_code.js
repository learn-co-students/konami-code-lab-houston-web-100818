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

document.body.addEventListener('keydown', function(e) {
  const keyName = e.key;
  return keyName
})

let index = 0;

function init() {
  document.addEventListener('keydown', function(e) {
  const keyName = e.key;
  if (keyName === codes[index]) {
    index++;
    if (index === codes.length) {
      alert('Congratulations!')
      index = 0;
    }
  } else {
    index = 0;
  }
}, true)
}

