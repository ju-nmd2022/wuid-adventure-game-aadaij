const mainView = document.getElementById("view");
const clickZoneCalendar = document.getElementById("clickZoneCalender");
const clickZoneCan = document.getElementById("clickZoneCan");

// math random help form here https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// calendar text change
function randomHint() {
  var hintOptions = [
    "Right, I should also add fertiliser as well",
    "Where is the watering can?",
    "There must be a spray bottle somewhere",
  ];
  const displayedTip =
    hintOptions[Math.floor(Math.random() * hintOptions.length)];
  var textparagraph = document.getElementById("changableText");
  textparagraph.textContent = displayedTip;
}
clickZoneCalendar.addEventListener("click", randomHint);

//pick up the watercan
function watercan() {
  document.getElementById("can").style.visibility = "visible";
  mainView.src = "photos/desk-without.jpg";
  clickZoneCan.style.visibility = "hidden";
}
clickZoneCan.addEventListener("click", watercan);
