// source for multible click events https://www.sololearn.com/compiler-playground/WWXqYfP2FVEK/?ref=app
onload = init;

function init() {
  var onclick = clickUpdates();
  var mat = document.getElementById("clickZoneMat");
  mat.addEventListener("click", onclick, false);
}

function clickUpdates() {
  var count = 0;
  var next = function () {
    switch (count) {
      case 0:
        document.getElementById("view").src = "Photos/enterance-key.jpg";
        break;
      case 1:
        document.getElementById("view").src = "Photos/enterance-exit.jpg";
        document.getElementById("key").style.visibility = "visible";
        break;
    }
    count = count < 2 ? count + 1 : 2;
  };

  return next;
}

// source for making an if statement with the visibility as the condition https://cs50.stackexchange.com/questions/41168/how-to-fix-if-statements-within-event-listeners-in-javascript
function openDoor() {
  var key = document.getElementById("key");
  if (key.style.visibility == "visible") {
    window.open("game.html", "_self");
  } else {
    var textparagraph = document.getElementById("changableText");
    textparagraph.textContent = "Oh yeah the key";
  }
}
document.getElementById("clickZoneDoor").addEventListener("click", openDoor);
