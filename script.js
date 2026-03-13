// Hero Section Scroll
const heroSection = document.querySelector('.hero-section');
let lastScrollY = window.scrollY;
let scrollActivated = false; // Flag to track if the scroll has been activated
let isTouchDevice = false; // Flag to check if the user is on a touch device

// Check if the user is using a touch device
const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') {
        isTouchDevice = true; // Set the flag if the input is from a touch device
    }
};

// Scroll handler
const handleScroll = () => {
    if (scrollActivated || isTouchDevice) return; // Exit if scroll has been activated or if it's a touch device

    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    const scrollDownThreshold = heroHeight * 0.2;

    // Only scroll down if the user has scrolled past the threshold
    if (scrollPosition > scrollDownThreshold && scrollPosition < heroHeight) {
        window.scrollTo({
            top: heroHeight,
            behavior: 'smooth'
        });
        scrollActivated = true; // Set the flag to true after activation
    }

    lastScrollY = scrollPosition;
};

// Listen for pointer down events to check for touch input
window.addEventListener('pointerdown', handlePointerDown);
window.addEventListener('scroll', handleScroll);


// fade in script
$(document).ready(function () {
    function checkVisibility() {
      $(".fade-in").each(function () {
        var sectionTop = $(this).offset().top;
        var scrollPos = $(window).scrollTop() + $(window).height();

        if (sectionTop < scrollPos) {
          $(this).addClass("visible");
        }
      });
    }

    let timeout;
    $(window).on("scroll", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        checkVisibility();
      }, 15);
    });
    checkVisibility();
  });

// Preload iframes, images, and links when they come into view
const iframes = document.querySelectorAll('.game-iframe');
const images = document.querySelectorAll('img');
const links = document.querySelectorAll('a');

// Add hover event listeners for preloading on each target
iframes.forEach(iframe => {
iframe.addEventListener('mouseover', () => preloadIframe(iframe.src));
});

images.forEach(image => {
image.addEventListener('mouseover', () => preloadImage(image.dataset.src || image.src));
});

links.forEach(link => {
link.addEventListener('mouseover', () => preloadLink(link.href));
});

// Preload functions
function preloadIframe(url) {
const link = document.createElement('link');
link.rel = 'preload';
link.href = url;
link.as = 'document';
document.head.appendChild(link);
}

function preloadImage(url) {
const img = new Image();
img.src = url; // This preloads the image
}

function preloadLink(url) {
const link = document.createElement('link');
link.rel = 'preload';
link.href = url;
link.as = 'fetch';
document.head.appendChild(link);
}


  // Open the Modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }