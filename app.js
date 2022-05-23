let slide = document.querySelectorAll(".slide");
let rigtbBtn = document.getElementById("right-btn");
let leftBtn = document.getElementById("left-btn");
let nav = document.querySelector(".slider-wrap");
let numbers = document.querySelectorAll(".number");
let currentSlide = 0;
let started = false;
let down = document.getElementById("down");
down.addEventListener("click", () => {
  scrollTo({
    top: 640,
    behaviour: "smooth",
  });
});
/*remover function*/
function removeAll() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("active");
  }
}
/*next action*/
rigtbBtn.addEventListener("click", () => {
  if (currentSlide + 1 == slide.length) {
    currentSlide = 0;
    removeAll();
    slide[currentSlide].classList.add("active");
  } else {
    removeAll();
    currentSlide++;
    slide[currentSlide].classList.add("active");
  }
});
/*previous action*/
leftBtn.addEventListener("click", () => {
  if (currentSlide == 0) {
    currentSlide = slide.length - 1;
    removeAll();
    slide[currentSlide].classList.add("active");
  } else {
    removeAll();
    currentSlide--;
    slide[currentSlide].classList.add("active");
  }
});
/*sliding*/
let time = setInterval(() => {
  if (currentSlide + 1 == slide.length) {
    currentSlide = 0;
    removeAll();
    slide[currentSlide].classList.add("active");
  } else {
    removeAll();
    currentSlide++;
    slide[currentSlide].classList.add("active");
  }
}, 4000);

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= nav.offsetTop) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};
let names = [
  "911 CARRERA MODELS",
  "THE NEW PANAMERA MODELS",
  "MACAN MODELS",
  "911 CARRERA MODELS",
  "THE NEW PANAMERA MODELS",
  "MACAN GTS",
];
let nums = [
  "$89,400.00",
  "$85,000.00",
  "$67,200.00",
  "$89,400.00",
  "$85,000.00",
  "$67,200.00",
];
let namespan = document.getElementById("name");
let Numspan = document.getElementById("num");
let cars = document.querySelectorAll(".cars");
for (let i = 0; i < cars.length; i++) {
  cars[i].addEventListener("click", () => {
    car.src = cars[i].src;
    for (let j = 0; j < cars.length; j++) {
      cars[j].classList.remove("fullO");
    }
    cars[i].classList.add("fullO");
    for (let index = 0; index < names.length; index++) {
      namespan.innerHTML = names[i];
      Numspan.innerHTML = nums[i];
    }
  });
}

// let searchBtn = document.querySelector(".btn1");
// let SearchIcon = document.getElementById("icon");
// searchBtn.addEventListener("click", () => {
//   if (searchBtn.classList.contains("show")) {
//     SearchIcon.classList.remove("fa-search");
//     SearchIcon.classList.add("fa-times");
//   } else {
//     SearchIcon.classList.remove("fa-times");
//     SearchIcon.classList.add("fa-search");
//   }
// });

