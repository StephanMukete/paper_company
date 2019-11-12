
window.addEventListener("load", () => {
 document.querySelector("body").classList.add("loaded");
});
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 1;
var slideInterval = setInterval(nextSlide,4000);


function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

var aDSlides = document.querySelectorAll('#advertBody .slide');
var current = 0;
var adSlideInterval = setInterval(nextAdSlide,3000);


function nextAdSlide(){
	aDSlides[current].className = 'slide';
	current = (current+1)%aDSlides.length;
	aDSlides[current].className = 'slide show';
}


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");

  }
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);

}
