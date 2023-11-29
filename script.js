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
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
});

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
