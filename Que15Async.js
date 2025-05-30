let time = 10;
let timer = setInterval(() => {
  if (time > 0) {
    console.log(`Time left: ${time} seconds`);
    time--;
  } else {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      clearInterval(timer);
      console.log("Countdown Stopped by User!");
    }
  });
}, 500);
