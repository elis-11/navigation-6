const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classlist.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("CAME OVER!");
  }
}, 10);