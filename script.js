// Music Play
const song = document.querySelector("#song");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");

let isPlaying = false;

function playAudio() {
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-volume-up-fill");
    audioIcon.classList.add("bi-volume-mute-fill");
  } else {
    song.play();
    audioIcon.classList.add("bi-volume-up-fill");
    audioIcon.classList.remove("bi-volume-mute-fill");
  }

  isPlaying = !isPlaying;
};

// Loading Page
const refreshPage = () => {
  location.reload();
};
const playLoader = () => {
  let loader = document.querySelector(".load-wrapper");
  let bodyLoad = document.querySelector("body");
  loader.style.display = "none";
  bodyLoad.classList.remove("overflow-hidden");
};
const stopLoader = () => {
  let loader = document.querySelector(".load-wrapper");
  loader.style.display = "none";
};
window.addEventListener("load", () => {
  let bodyLoad = document.querySelector("body");
  bodyLoad.classList.add("overflow-hidden");
  setTimeout(playLoader, 2500);
});

// Navbar
const navbar = document.querySelector("nav");
const musicIcon = document.querySelector(".music-icon");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    navbar.classList.remove("hidden");
    musicIcon.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
    musicIcon.classList.add("flex");
  }
});

// navbar Active
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let navActive = document.querySelector("nav a[href*=" + id + "]");
        navActive.classList.add("active");
      });
    }
  });
};

// Simply Countdown
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 6, // required
  day: 28, // required
  hours: 0, // Default is 0 [0-23] integer

  words: {
    //words displayed into the countdown
    days: { singular: "day", plural: "Days" },
    hours: { singular: "hour", plural: "Hours" },
    minutes: { singular: "minute", plural: "Minutes" },
    seconds: { singular: "second", plural: "Seconds" },
  },
});
