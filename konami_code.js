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
  // your code here
  let index = 0;
  const keyboardEvent = document.body.addEventListener("keydown", function(
    event
  ) {
    if (event.key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("YOU ARE IN!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
