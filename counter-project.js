let count = document.getElementById("count");
let higher = document.getElementById("higher");
let lower = document.getElementById("lower");

let i = 0;
count.textContent = i;

higher.addEventListener("click", function () {
  i++;
  count.textContent = i;
  colors();
});

lower.addEventListener("click", function () {
  i--;
  count.textContent = i;
  colors();
});

function colors() {
  if (i === 0) {
    count.style.color = "black";
  } else if (i > 0) {
    count.style.color = "green";
  } else {
    count.style.color = "red";
  }
}
