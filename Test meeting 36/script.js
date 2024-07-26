var genres = ["Jazz", "Pop", "Rock", "Dangdut"]
//for loop
for(i=0; i<genres.length; i++) {
 document.write("I choose " + genres[i] + "<br>" );
}
//for each
genres.forEach(function(genre) {
 document.write("I choose " + genre + "<br>" );
})


var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".sliderbtn");
let currentSlide = 1;
//Manual images slider
var manualNav = function(manual) {
 slides.forEach(function (slide) {
 slide.classList.remove("active");
 buttons.forEach((btn) => {
 btn.classList.remove("active");
 });
 });
 slides[manual].classList.add("active");
 buttons[manual].classList.add("active");
}
buttons.forEach(function(btn, i) {
 btn.addEventListener("click", function() {
 manualNav(i);
 currentSlide = i;
 })
})

var repeat = function(activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;
    var repeater = function() {
    setTimeout(function() {
    [...active].forEach(function(activeSlide) {
    activeSlide.classList.remove("active");
    });
    slides[i].classList.add("active");
    buttons[i].classList.add("active");
    i++; 
    if(slides.length == i) {
    i = 0;
    }
    if(i >= slides.length) {
    return;
    }
    repeater();
    }, 5000);
    }
    repeater();
   }
   repeat();


// // Pilih elemen slide dan tombol
// var slides = document.querySelectorAll(".slide");
// var buttons = document.querySelectorAll(".sliderbtn");
// let currentSlide = 0; // Mulai dengan slide pertama
// let autoSlideInterval;

// // Fungsi untuk navigasi manual
// function manualNav(index) {
//     // Hapus kelas 'active' dari semua slide dan tombol
//     slides.forEach((slide, i) => {
//         slide.classList.toggle("active", i === index);
//     });
//     buttons.forEach((btn, i) => {
//         btn.classList.toggle("active", i === index);
//     });
//     currentSlide = index;
// }

// // Atur navigasi manual
// buttons.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         manualNav(i);
//         resetAutoSlide(); // Reset auto slide ketika manual navigation
//     });
// });

// // Fungsi untuk slider otomatis
// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//         currentSlide = (currentSlide + 1) % slides.length;
//         manualNav(currentSlide);
//     }, 5000);
// }

// // Reset auto slide saat navigasi manual
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     startAutoSlide(); // Mulai ulang slider otomatis
// }

// // Inisialisasi slider
// function initSlider() {
//     if (slides.length > 0 && buttons.length > 0) {
//         manualNav(0); // Tampilkan slide pertama secara default
//         startAutoSlide(); // Mulai slider otomatis
//     } else {
//         console.error("Slides atau tombol tidak ditemukan.");
//     }
// }

// initSlider();
