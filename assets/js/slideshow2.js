document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide2");
    var currentSlide = 0;
  
    function showSlide(n) {
      // Hide all slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      // Show the current slide
      slides[n].style.display = "block";
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    // Automatically advance to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
  
    // Show the initial slide
    showSlide(currentSlide);
  });
  