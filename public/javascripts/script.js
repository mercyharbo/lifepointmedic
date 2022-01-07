function classToggle(e) {
  let navs = document.querySelectorAll('.Navbar_items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));

    e.preventDefault();
}

document.querySelector('.Navbar_toggle')
  .addEventListener('click', classToggle);


// Testimony slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    
    if (n > slides.length) { slideIndex = 1 }
    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}
