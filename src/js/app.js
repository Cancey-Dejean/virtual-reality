// let scrollDiv = document.querySelector(".side-panel");
// SimpleScrollbar.initEl(scrollDiv);

let closeBtn = document.querySelector(".mobile-menu .close");
let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let mobileLink = mobileMenu.querySelectorAll(".mobile-link");
let overlay = document.querySelector(".overlay");

// Toggle 'menu-opened' class on the overlay
function toggleMenuClasses() {
  overlay.classList.toggle("menu-opened");
}

for (let link of mobileLink) {
  link.addEventListener("click", toggleMenuClasses);
}

hamburger.addEventListener("click", toggleMenuClasses);
closeBtn.addEventListener("click", toggleMenuClasses);
mobileMenu.addEventListener("click", toggleMenuClasses);

overlay.addEventListener("click", function () {
  overlay.classList.remove("menu-opened");
});

// Animations
var tl = gsap.timeline({ defaults: { duration: .8 } });

tl.from(".hero", {
    duration: 1,
    ease: "power4.in",
    delay: .08,
    opacity: 0
  })
.from(".brand", {
  delay: 0.2,
  opacity: 0,
  // delay: -1,
})
.from(".list-link", {
    opacity: 0,
    delay: -.8,
    stagger: {
      amount: 0.6,
    },
  })
  .from(".section-title span", {
    duration: 1.6,
    y: 50,
    ease: "power4.out",
    // delay: 0.8,
    skewY: 7,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero p", {
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero .price, .hero .cta-container", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".item", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero img", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  });
