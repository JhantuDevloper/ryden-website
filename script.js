// let time = 5;
// let countdown = document.getElementById("countdown");
// let progress = document.querySelector(".progress");

// let width = 0;

// let timer = setInterval(() => {
//   time--;
//   width += 20;

//   countdown.innerText = "Redirecting in " + time + "s";
//   progress.style.width = width + "%";

//   if (time === 0) {
//     clearInterval(timer);
//     window.location.href = "https://www.youtube.com/watch?v=T55bh0I7sbY&pp=0gcJCcUKAYcqIYzv";
//   }

let time = 5;
let countdown = document.getElementById("countdown");
let progress = document.querySelector(".progress");

let videoID = "T55bh0I7sbY";

let timer = setInterval(() => {
  time--;

  // update text
  countdown.innerText = "Redirecting in " + time + "s";

  // progress bar
  progress.style.width = (5 - time) * 20 + "%";

  if (time === 0) {
    clearInterval(timer);

    // 🔥 Deep Linking Start

    // 1. Android Intent
    window.location.href =
      "intent://www.youtube.com/watch?v=" +
      videoID +
      "#Intent;package=com.google.android.youtube;scheme=https;end";

    // 2. Fallback to App
    setTimeout(() => {
      window.location.href = "youtube://watch?v=" + videoID;
    }, 1000);

    // 3. Final fallback browser
    setTimeout(() => {
      window.location.href =
        "https://www.youtube.com/watch?v=" + videoID;
    }, 2000);
  }

}, 1000);

// GSAP Animation

gsap.from(".card", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".thumb", {
  duration: 1.2,
  scale: 0.8,
  opacity: 0,
  delay: 0.3
});

gsap.from("h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  delay: 0.5
});

gsap.from(".watch-btn", {
  duration: 1,
  opacity: 0,
  delay: 0.8,
  scale: 0.5
});

gsap.from(".socials a", {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.2,
  delay: 1
});
// Continuous glow effect

gsap.to(".card", {
  boxShadow: "0 0 50px rgba(255,0,0,0.7)",
  duration: 1,
  repeat: -1,
  yoyo: true
});
if (window.innerWidth < 600) {
  gsap.globalTimeline.timeScale(1.5); // mobile me thoda fast
}

// window.location.href =
// "intent://www.youtube.com/watch?v=T55bh0I7sbY#Intent;package=com.google.android.youtube;scheme=https;end";