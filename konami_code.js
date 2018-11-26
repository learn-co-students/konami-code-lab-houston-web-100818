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

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === codes[index]) {
      //console.log('key');
      index++;

      if (index === codes.length) {
        //console.log('great!')
        alert("achievement unlocked.");
        index = 0;
      }
    } else {
      index = 0;
      //console.log('wrong');
    }
  })
}

// function init() {
//   document.body.addEventListener('keydown', function(e) {
//     console.log(e.key);
//   })
// }

// init();
