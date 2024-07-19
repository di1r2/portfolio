const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})
// Function to animate the text when it comes into view
function animateText() {
  var text = document.querySelector('.name');
  var bounding = text.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
    text.classList.add('animate__animated', 'animate__fadeInLeft');
  }
}

// Add event listener to trigger animation when scrolling
window.addEventListener('scroll', animateText);

// Initially trigger the animation when the page loads
animateText();

const text = document.querySelector(".second-text");
const textLoad=()=>{
  setTimeout(() =>{
    text.textContent="Mobile app developer";
  },
  0);
  setTimeout(()=>{
    text.textContent="Web developer";
  },
  4000);
  setTimeout(()=>{
    text.textContent="Freelancer";
  },
  4000);  

}
textLoad();
setInterval(textLoad,12000);



