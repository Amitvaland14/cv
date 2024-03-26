/* ======================== Toggle style switcher ==========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// ==== Hidden style-switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ========================  Theme Colors ==========================*/ 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("sun");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("sun"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
let curentColor = 0;
let second = 500;
const allColor = ["color-1", "color-2", "color-3", "color-4", "color-5"];

setInterval(function () {
  if (curentColor === allColor.length - 1) {
    setActiveStyle(allColor[curentColor]);
    curentColor = 0;
  } else {
    setActiveStyle(allColor[curentColor]);
    curentColor++;
  }
}, second);