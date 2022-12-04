// constants through all the views
const isCanVisible = sessionStorage.getItem("watercanVisibility");
const isSprayVisible = sessionStorage.getItem("sprayBottleVisibility");
const isFertiliserVisible = sessionStorage.getItem("fertiliserVisibility");
const isWaterCanFull = sessionStorage.getItem("waterCanFull");

// everything for the game.html
function game() {
  const gameView = document.getElementById("viewGame");
  const textGame = document.getElementById("changableTextGame");
  const clickZoneCalendar = document.getElementById("clickZoneCalender");
  const clickZoneCan = document.getElementById("clickZoneCan");

  // calling local storage
  function localStorageCeckGame() {
    if (isCanVisible == "true") {
      var can = document.getElementById("canGame");
      can.style.visibility = "visible";
      gameView.src = "Photos/desk-without.jpg";
      clickZoneCan.style.visibility = "hidden";
    }
    if (isSprayVisible == "true") {
      var sprayGame = document.getElementById("sprayGame");
      sprayGame.style.visibility = "visible";
    }
    if (isFertiliserVisible == "true") {
      var fertalizerGame = document.getElementById("fertalizerGame");
      fertalizerGame.style.visibility = "visible";
    }
  }
  localStorageCeckGame();

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
    textGame.textContent = displayedTip;
  }
  clickZoneCalendar.addEventListener("click", randomHint);

  //pick up the watercan
  function watercan() {
    var can = document.getElementById("canGame");
    can.style.visibility = "visible";
    gameView.src = "Photos/desk-without.jpg";
    clickZoneCan.style.visibility = "hidden";
    sessionStorage.setItem("watercanVisibility", true);
  }
  clickZoneCan.addEventListener("click", watercan);
}

// everything for the window.html
function windowFunction() {
  const windowView = document.getElementById("viewWindow");
  const clickZoneSpray = document.getElementById("clickZoneSpray");
  const clickZonePlant = document.getElementById("clickZonePlant");
  const textWindow = document.getElementById("changableTextWindow");
  const spray = document.getElementById("sprayWindow");
  const canWindow = document.getElementById("canWindow");

  //   calling local storage
  function localStorageCeckWindow() {
    if (isSprayVisible == "true") {
      spray.style.visibility = "visible";
      windowView.src = "Photos/window-without.jpg";
      clickZoneSpray.style.visibility = "hidden";
    }
    if (isCanVisible == "true") {
      canWindow.style.visibility = "visible";
    }

    if (isFertiliserVisible == "true") {
      var fertalizerWindow = document.getElementById("fertalizerWindow");
      fertalizerWindow.style.visibility = "visible";
    }
  }
  localStorageCeckWindow();

  // pick up the spray bottle
  function SprayBottle() {
    spray.style.visibility = "visible";
    windowView.src = "Photos/window-without.jpg";
    clickZoneSpray.style.visibility = "hidden";
    sessionStorage.setItem("sprayBottleVisibility", true);
  }
  clickZoneSpray.addEventListener("click", SprayBottle);

  // work on plant
  function plant() {
    if (
      isWaterCanFull == "true" &&
      isCanVisible == "true" &&
      isSprayVisible == "true" &&
      isFertiliserVisible == "true"
    ) {
      windowView.src = "Photos/completed-plant.jpg";
      spray.style.visibility = "hidden";
      canWindow.style.visibility = "hidden";
      fertalizerWindow.style.visibility = "hidden";
      //   source for time out https://stackoverflow.com/questions/15719729/i-want-to-load-another-html-page-after-a-specific-amount-of-time
      setTimeout(function () {
        window.location.href = "end.html";
      }, 4000);
    } else if (
      isWaterCanFull != "ture" &&
      isCanVisible == "true" &&
      isSprayVisible == "true" &&
      isFertiliserVisible == "true"
    ) {
      textWindow.textContent = "I need some water in the can.";
    } else {
      textWindow.textContent =
        "I should spray and water the plant with rich water.";
    }
  }
  clickZonePlant.addEventListener("click", plant);
}

// everything for the kitchen.html
function kitchen() {
  const kitchenView = document.getElementById("viewKitchen");
  const clickZoneFertiliser = document.getElementById("clickZoneFertiliser");
  const clickZoneSink = document.getElementById("clickZoneSink");
  const textKitchen = document.getElementById("changableTextKitchen");
  const sprayKitchen = document.getElementById("sprayKitchen");
  const canKitchen = document.getElementById("canKitchen");
  const fertiliserKitchen = document.getElementById("fertiliserKitchen");

  //   calling local storage
  function localStorageCeckKitchen() {
    if (isSprayVisible == "true") {
      sprayKitchen.style.visibility = "visible";
    }
    if (isCanVisible == "true") {
      canKitchen.style.visibility = "visible";
    }
    if (isFertiliserVisible == "true") {
      fertiliserKitchen.style.visibility = "visible";
      kitchenView.src = "Photos/kitchen-without.jpg";
      clickZoneFertiliser.style.visibility = "hidden";
    }
  }
  localStorageCeckKitchen();

  //   picking up fertiliser
  function FertiliserBottle() {
    fertiliserKitchen.style.visibility = "visible";
    kitchenView.src = "Photos/kitchen-without.jpg";
    clickZoneFertiliser.style.visibility = "hidden";
    sessionStorage.setItem("fertiliserVisibility", true);
    textKitchen.textContent = "Should add this to the water.";
  }
  clickZoneFertiliser.addEventListener("click", FertiliserBottle);

  //   filling up watercan
  function kitchenSink() {
    if (canKitchen.style.visibility == "visible") {
      textKitchen.textContent = "*filled the watering can*";
      sessionStorage.setItem("waterCanFull", true);
    } else {
      textKitchen.textContent = "There was a watering can somewhere here.";
    }
  }
  clickZoneSink.addEventListener("click", kitchenSink);
}

function reset() {
  sessionStorage.clear();
  localStorage.clear();
}
