
// swiper sertificats
try {
    const swiper = new Swiper('.sert', {
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

// swiper slider
try {
    const swiper = new Swiper('.slider', {
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

// swiper slider 0
try {
    const swiper = new Swiper('.slider0', {
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

// swiper slider-family
try {
    const swiper = new Swiper('.slider-family', {
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

// swiper 1
try {
    const swiper = new Swiper('.slider1', {
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

// swiper 2
try {
    const swiper = new Swiper('.slider2', {
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

// swiper 3
try {
    const swiper = new Swiper('.slider3', {
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

// swiper 4
try {
    const swiper = new Swiper('.slider4', {
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

// swiper 5
try {
    const swiper = new Swiper('.slider5', {
        // Optional parameters
        //width: 1200,
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