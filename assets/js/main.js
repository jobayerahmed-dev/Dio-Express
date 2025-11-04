(function ($) {
  ("use strict");

  /**-----------------------------
   *  Mobile Menu
   * ---------------------------*/

  /* -----------------------------------------------------
    Header Search
    ----------------------------------------------------- */
  let header_search = document.querySelector(".cdx-search-form");
  let search_icon = document.querySelector("#search_icon");
  let search_close = document.querySelector("#search_close");
  if (header_search) {
    search_icon.addEventListener("click", function () {
      header_search.classList.add("cdx-open-search");
      search_icon.style.display = "none";
      search_close.style.display = "block";
    });
    search_close.addEventListener("click", function () {
      header_search.classList.remove("cdx-open-search");
      search_icon.style.display = "block";
      search_close.style.display = "none";
    });
  }

  /**-----------------------------
   *  banner-video-slider
   * ---------------------------*/
  const videoSlider = new Swiper(".cdx-banner-video-slider", {
    slidesPerView: 1,
    speed: 2000,
    navigation: {
      nextEl: ".cdx-video-banner-next",
      prevEl: ".cdx-video-banner-prev",
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });

  /**-----------------------------
   *  heading-text-sliderr
   * ---------------------------*/
  const textSlider = new Swiper(".cdx-heading-text-slider", {
    spaceBetween: 100,
    speed: 15000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1.2,
      },
      2000: {
        slidesPerView: 1.6,
        spaceBetween: 100,
      },
    },
  });

  /* -----------------------------------------------------
    Service Slider One
  ----------------------------------------------------- */
  const serviceSlider = new Swiper(".cdx-service-slider-1", {
    spaceBetween: 25,
    speed: 3000,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    pagination: {
      el: ".cdx-service-slider-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 2.5,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    Service Slider Two
  ----------------------------------------------------- */
  const serviceSliderTwo = new Swiper(".cdx-service-slider-2", {
    spaceBetween: 25,
    speed: 3000,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".cdx-service-slider-2-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  /* -----------------------------------------------------
    Service Slider Three
  ----------------------------------------------------- */
  const serviceSliderThree = new Swiper(".cdx-service-slider-3", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".cdx-service-next",
      prevEl: ".cdx-service-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    Service Slider Four
  ----------------------------------------------------- */
  const serviceSliderFour = new Swiper(".cdx-service-slider-4", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".cdx-service-next",
      prevEl: ".cdx-service-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    cdx-client-slider
  ----------------------------------------------------- */
  const clientSlider = new Swiper(".cdx-client-slider", {
    speed: 3000,
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: ".cdx-client-next",
      prevEl: ".cdx-client-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4.9,
      },
    },
  });

  //blog-slider-1
  /* -----------------------------------------------------
    cdx-client-slider
  ----------------------------------------------------- */
  const blogSlider = new Swiper(".cdx-blog-slider-1", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    pagination: {
      el: ".cdx-blog-slider-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    blog-slider-3
  ----------------------------------------------------- */
  const blogSliderThree = new Swiper(".cdx-blog-slider-3", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    slidesPerView: 2,
    pagination: {
      el: ".pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return "0" + number;
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  /* -----------------------------------------------------
    blog-slider-4
  ----------------------------------------------------- */
  const blogSliderFour = new Swiper(".cdx-blog-slider-4", {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 3000,
    loop: true,
    pagination: {
      el: ".cdx-blog-pagination-4",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    blog-slider-5
  ----------------------------------------------------- */
  const blogSliderFive = new Swiper(".cdx-blog-slider-5", {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 3000,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".cdx-blog-pagination-5",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    blog-slider-6
  ----------------------------------------------------- */
  const blogSliderSix = new Swiper(".cdx-blog-slider-6", {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 3000,
    loop: true,
    pagination: {
      el: ".cdx-blog-pagination-6",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    shipment-slider-1
  ----------------------------------------------------- */
  const shipmentSlider = new Swiper(".cdx-shipment-track-slider-1", {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 3000,
    loop: false,
    autoplay: false,
    pagination: {
      el: ".cdx-shipment-track-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  /* -----------------------------------------------------
    video popup
  ----------------------------------------------------- */
  if ($(".cdx-popup-video").length) {
    $(".cdx-popup-video").magnificPopup({
      type: "iframe",
      mainClass: "video-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  /* -----------------------------------------------------
    counter
  ----------------------------------------------------- */
  if ("counterUp" in window) {
    const skill_counter = window.counterUp.default;
    const skill_cb = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };
    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1,
    });
    const els = document.querySelectorAll(".cdx-counter");
    els.forEach((el) => {
      IO.observe(el);
    });
  }

  /* -----------------------------------------------------
    Testimonial Slider One
  ----------------------------------------------------- */
  const testimonialSlider = new Swiper(".cdx-testimonial-slider-1", {
    speed: 3000,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".cdx-testimonial-banner-next",
      prevEl: ".cdx-testimonial-banner-prev",
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Two
  ----------------------------------------------------- */
  const testimonial = new Swiper(".cdx-testimonial-slider-2", {
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".cdx-pagination-bullet",
      clickable: true,
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Three
  ----------------------------------------------------- */
  const testimonialThree = new Swiper(".cdx-testimonial-slider-3", {
    speed: 3000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      el: ".cdx-testimonial-pagination-3",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Four
  ----------------------------------------------------- */
  var testimonialFour = new Swiper(".cdx-testimonial-galler-4", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    speed: 1500,
  });
  var testimonialThumbFour = new Swiper(".cdx-testimonial-thumb-4", {
    loop: true,
    speed: 1500,
    spaceBetween: 10,
    navigation: {
      nextEl: ".cdx-testimonial-next-4",
      prevEl: ".cdx-testimonial-prev-4 ",
    },
    thumbs: {
      swiper: testimonialFour,
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider five
  ----------------------------------------------------- */
  const testimonialSliderFive = new Swiper(".cdx-testimonial-slider-5", {
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Six
  ----------------------------------------------------- */
  const testimonialSliderSix = new Swiper(".cdx-testimonial-slider-6", {
    speed: 3000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: ".cdx-testimonial-next-6",
      prevEl: ".cdx-testimonial-prev-6",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Seven
  ----------------------------------------------------- */
  var testimonialSeven = new Swiper(".cdx-testimonial-slider-7", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    effect: "fade",
    speed: 1500,
  });
  var testimonialThumbSeven = new Swiper(".cdx-testimonial-thumbslider-7", {
    loop: true,
    speed: 1500,
    navigation: {
      nextEl: ".cdx-testimonial-next-7",
      prevEl: ".cdx-testimonial-prev-7 ",
    },
    thumbs: {
      swiper: testimonialSeven,
    },
  });

  /* -----------------------------------------------------
    Testimonial Slider Nine
  ----------------------------------------------------- */
  const testimonialSliderNine = new Swiper(".cdx-testimonial-slider-9", {
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });

  /* -----------------------------------------------------
    Home Slider Two
  ----------------------------------------------------- */
  const heroSliderTwo = new Swiper(".cdx-hero-slider-2", {
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".cdx-hero-2-next",
      prevEl: ".cdx-hero-2-prev ",
    },
  });

  /* -----------------------------------------------------
    hero-slider-3
  ----------------------------------------------------- */
  const heroSliderThree = new Swiper(".cdx-hero-slider-3", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".cdx-hero-next",
      prevEl: ".cdx-hero-prev",
    },
    pagination: {
      el: ".cdx-hero-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return "0" + number;
      },
    },
  });

  /* -----------------------------------------------------
    Slider count
  ----------------------------------------------------- */
  let sliderCount = document.querySelectorAll(".cdx-hero-slide-3");
  let slideNumber = document.querySelector(".cdx-number-3");
  sliderCount.forEach((item) => {
    slideNumber.innerHTML = item.style.length;
  });

  /* -----------------------------------------------------
    hero-slider-4
  ----------------------------------------------------- */
  var heroThumbFour = new Swiper(".cdx-hero-thumb-4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    speed: 2000,
    watchSlidesProgress: true,
  });
  var heroSliderFour = new Swiper(".cdx-hero-slider-4", {
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: ".cdx-hero-next-4",
      prevEl: ".cdx-hero-prev-4",
    },
    pagination: {
      el: ".cdx-hero-pagination-4",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return "0" + number;
      },
    },
    thumbs: {
      swiper: heroThumbFour,
    },
  });

  /* -----------------------------------------------------
    portfolio slider
  ----------------------------------------------------- */
  const portfolioSlider = new Swiper(".cdx-portfolio-slider", {
    speed: 3000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    pagination: {
      el: ".cdx-portfolio-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return "0" + number;
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4.4,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    Portfolio Slider Three
  ----------------------------------------------------- */
  const portfolioSliderThree = new Swiper(".cdx-portfolio-slider-3", {
    speed: 3000,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    pagination: {
      el: ".cdx-progress-bar",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  /* -----------------------------------------------------
    Portfolio Slider Four
  ----------------------------------------------------- */
  const portfolioSliderFour = new Swiper(".cdx-portfolio-slider-4", {
    speed: 3000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: ".cdx-portfolio-next-4",
      prevEl: ".cdx-portfolio-prev-4",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3.8,
        spaceBetween: 30,
      },
    },
  });

  /* -----------------------------------------------------
    Portfolio Slider Five
  ----------------------------------------------------- */
  const portfolioSliderFive = new Swiper(".cdx-portfolio-slider-5", {
    speed: 3000,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".cdx-portfolio-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".cdx-portfolio-next-5",
      prevEl: ".cdx-portfolio-prev-5",
    },
  });

  /* -----------------------------------------------------
    portfolio-slider-9
  ----------------------------------------------------- */
  const portfolioSliderNine = new Swiper(".cdx-portfolio-slider-9", {
    speed: 3000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".cdx-portfolio-next",
      prevEl: ".cdx-portfolio-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* -----------------------------------------------------
    portfolio-slider-10
  ----------------------------------------------------- */
  const portfolioSliderTen = new Swiper(".cdx-portfolio-slider-10", {
    speed: 3000,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".cdx-portfolio-btn",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  /* -----------------------------------------------------
    team-slider-1
  ----------------------------------------------------- */
  const teamSliderOn = new Swiper(".cdx-team-slider-1", {
    speed: 3000,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".cdx-team-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  /* -----------------------------------------------------
    team-slider-9
  ----------------------------------------------------- */
  const teamSliderNine = new Swiper(".cdx-team-slider-9", {
    speed: 3000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".cdx-pagination-bullet-2",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /* -----------------------------------------------------
    cdx-client-slider-9
  ----------------------------------------------------- */
  const clientSliderNine = new Swiper(".cdx-client-slider-9", {
    speed: 3000,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".cdx-client-next",
      prevEl: ".cdx-client-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  /* -----------------------------------------------------
    rollslider-1
  ----------------------------------------------------- */
  const rollslider = new Swiper(".cdx-rollslider-1", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  rollslider.slides.forEach((slide, index) => {
    slide.style.width = "auto";
  });

  /* -----------------------------------------------------
    rollslider-2
  ----------------------------------------------------- */
  const rollsliderTwo = new Swiper(".cdx-rollslider-2", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  rollsliderTwo.slides.forEach((slide, index) => {
    slide.style.width = "auto";
  });

  /* -----------------------------------------------------
    produt-gallery
  ----------------------------------------------------- */
  var productGallery = new Swiper(".cdx-produt-gallery", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  var productThumb = new Swiper(".cdx-product-thumb-slider", {
    loop: true,
    thumbs: {
      swiper: productGallery,
    },
  });

  /* -----------------------------------------------------
    produt-gallery
  ----------------------------------------------------- */
  var productSlider = new Swiper(".cdx-product-slider", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    speed: 3000,
    pagination: {
      el: ".cdx-product-slider-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /* -----------------------------------------------------
    Cart Quantity
  ----------------------------------------------------- */
  $(".cdx-cart-minus").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".cdx-cart-plus").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  /* -----------------------------------------------------
    Filter by price
  ----------------------------------------------------- */
  if (true) {
    function getVals() {
      /* -----------------------------------------------------
    Get slider values
  ----------------------------------------------------- */
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }
      let displayElement = parent.getElementsByClassName("cdx-range-values")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }
    window.onload = function () {
      let sliderSections = document.getElementsByClassName("cdx-range-slide");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByClassName("cdx-filter-input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
    };
  }

  /* -----------------------------------------------------
    Form distance slider
  ----------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("range-bar");
    let output = document.getElementById("demo");
    if (output) {
      output.innerHTML = slider.value;
      slider.oninput = function () {
        output.innerHTML = this.value;
      };
    }
  });

  /* -----------------------------------------------------
    Menu style 10
  ----------------------------------------------------- */
  let menuItems = document.querySelectorAll(".cdx-menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const subMenu = this.querySelector(".cdx-sub-menu");
      if (subMenu) {
        subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
        subMenu.style.height = subMenu.style.height === "auto" ? "0px" : "auto";
        subMenu.style.opacity = subMenu.style.opacity === "1" ? "0" : "1";
      }
    });
  });

  /* -----------------------------------------------------
    Loader style
  ----------------------------------------------------- */
  const preLoader = document.getElementById("cdx-preloader");
  window.addEventListener("load", function () {
    function hidden() {
      preLoader.style.display = "none";
    }

    preLoader.classList.add("loaded");

    this.setTimeout(hidden, 1000);
  });
})(jQuery);
