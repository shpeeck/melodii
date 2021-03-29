
try {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 300,
        autoplay: {
            delay: 5000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
} catch (error) {
    
}





  // Открытие модалки формы 
  try {
    let mod = document.querySelector(".position");
    let op = document.querySelector(".add");
    let close = document.querySelector(".position__close");
    // console.log(op);
    // console.log(mod);

    // op.forEach(function (item, index) {
    op.addEventListener("click", function () {
        mod.classList.add("active");
        // console.log("нажата")
    });

    close.addEventListener("click", function () {
        mod.classList.remove("active");
    });
} catch (err) {
    // console.log(err);

};