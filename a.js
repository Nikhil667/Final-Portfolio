// // set height of the svg path as constant
// const svg = document.getElementById("svgPath");
// const length = svg.getTotalLength();

// // start positioning of svg drawing
// svg.style.strokeDasharray = length;

// // hide svg before scrolling starts
// svg.style.strokeDashoffset = length;

// window.addEventListener("scroll", function () {
//   const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   const draw = length * scrollpercent;

//   // Reverse the drawing when scroll upwards
//   svg.style.strokeDashoffset = length - draw;
// });


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




const span = document.querySelector('.hover-btn2');
const overlay = document.querySelector('.overlay');
const wrapper = document.querySelector('.wrapper');


wrapper.addEventListener('mousemove', (e) => {
  const { clientX, clientY} = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(overlay, {
    '--x' : `${x}%`,
    '--y' : `${y}%`,
    duration: 0.3,
    ease: 'sine.out'
  })
})

span.addEventListener('click', () => {
  overlay.classList.toggle('is-open')
})
