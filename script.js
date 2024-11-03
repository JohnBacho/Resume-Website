// Hero Section Scroll
const heroSection = document.querySelector('.hero-section');

const handleScroll = () => {
    const heroHeight = heroSection.offsetHeight;

    const scrollPosition = window.scrollY;

    const scrollDownThreshold = heroHeight * 0.2;

    if (scrollPosition > scrollDownThreshold && scrollPosition < heroHeight) {
        window.scrollTo({
            top: heroHeight,
            behavior: 'smooth'
        });
    }
    else if (scrollPosition < heroHeight && scrollPosition < lastScrollY) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    lastScrollY = scrollPosition;
};

let lastScrollY = window.scrollY;

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
// Select all target elements
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
link.as = 'document'; // Use 'document' for web pages
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
link.as = 'fetch'; // Adjust 'as' depending on the type of resource
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