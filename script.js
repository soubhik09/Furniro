const slidingBtn = document.querySelector('.sliding_btn');


let currentIndex = 0;
const dots = document.querySelectorAll(".dot");


function moveActiveCircle() {
    // Remove active class from current circle
    dots[currentIndex].classList.remove("active");
    dots[currentIndex].style.backgroundColor = '#D8D8D8';

    // Move to the next circle in a loop
    currentIndex = (currentIndex + 1) % dots.length;

    // Add active class to the new circle
    dots[currentIndex].classList.add("active");
    dots[currentIndex].style.backgroundColor = '#B88E2F';
  }

  // Initialize the first circle as active
  dots[currentIndex].classList.add("active");
  dots[currentIndex].style.backgroundColor = '#B88E2F'


  slidingBtn.addEventListener('click', () => {
        let slides = document.querySelector('.slides');
        let items = document.querySelectorAll('.item');
    
        slides.appendChild(items[0]);

        moveActiveCircle();
    })