/*
00 -> preloader
01 -> Navbar toggle
02 -> search toggle
03 -> Box hover effect Style
04 -> Connect wallet toggle
05 -> chat box height adjust
06 -> input file
07 -> chat list toggle
08 -> notification toggle
09 -> header profile toggle
10 -> hide toggle items
11 -> 3D swiper effect
12 -> top player slider
13 -> game swiper
14 -> custom tab list
15 -> custom accordion list
16 -> count down timer
17 -> earning chart (apex line chart)
18 -> magnific popup
*/

$(document).ready(() => {
  "use strict";

  // 00 -> preloader
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  // 01 -> Navbar toggle
  $(".navbar-toggle-btn").on("click", function () {
    $(".navbar-toggle-item").toggleClass("open");
    $(this).toggleClass("open");
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".header-section").removeClass("fixed-header");
    } else {
      $(".header-section").addClass("fixed-header");
    }
  });
  $('.menu-item button').on('click', function () {
    $(this).siblings("ul").slideToggle(300);
  });

  // Navbar Auto Active Class 
  var curUrl = $(location).attr('href');
  var terSegments = curUrl.split("/");
  var desired_segment = terSegments[terSegments.length - 1];
  var removeGarbage = desired_segment.split(".html")[0] + ".html";
  var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
  var targetClass = checkLink.addClass('active');
  targetClass.parents('.menu-item').addClass('active');

  // 02 -> search toggle
  $(".search-toggle-btn").on("click", function () {
    $(".search-bar").toggleClass("open");
  });

  // 03 -> Box hover effect Style 
  const targetBtn = document.querySelectorAll('.box-style')
  if (targetBtn) {
    targetBtn.forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const x = e.offsetX + 'px';
        const y = e.offsetY + 'px';
        element.style.setProperty('--x', x);
        element.style.setProperty('--y', y);
      })
    })
  }

  // 04 -> Connect wallet toggle
  $(".wallet-btn").on("click", function () {
    $(".connect-wallet-section").toggleClass("active");
  })
  $(".wallet-close-btn").on("click", function () {
    $(".connect-wallet-section").toggleClass("active");
  })

  $(".connect-wallet-overlay").on("click", function (e) {
    if ($(e.target).hasClass("connect-wallet-overlay")) {
      $(".connect-wallet-section").toggleClass("active");
    }
  })

  // 05 -> chat box height adjust
  $('.chat-body').scrollTop($(document).height());

  // 06 -> input file 
  $(".add-file-btn").on("click", function () {
    $("#add-file-input").click()
  })

  // 07 -> chat list toggle 
  $(".chat-list-toggle-btn").on("click", function () {
    $(".chat-list-area").toggleClass("open");
  })

  // 08 -> notification toggle
  $(".ntf-btn").on("click", function () {
    $(".notification-area").toggleClass("open");
  })

  // 09 -> header profile toggle
  $(".header-profile").on("click", function () {
    $(".user-account-popup").toggleClass("open");
  })

  // 10 -> hide toggle items
  $(document).on("click", function (event) {
    // navbar toggle hide
    if (!$(event.target).closest(".navbar-toggle-item, .navbar-toggle-btn").length) {
      $(".navbar-toggle-item").removeClass("open");
      $(".navbar-toggle-btn").removeClass("open");
    }
    // search bar hide
    if (!$(event.target).closest(".search-bar, .search-toggle-btn").length) {
      $(".search-bar").removeClass("open");
    }
    // notification hide
    if (!$(event.target).closest(".notification-area, .ntf-btn").length) {
      $(".notification-area").removeClass("open");
    }
    // profile popup hide
    if (!$(event.target).closest(".user-account-popup, .header-profile").length) {
      $(".user-account-popup").removeClass("open");
    }
    // chat list hide
    if (!$(event.target).closest(".chat-list-area, .chat-list-toggle-btn").length) {
      $(".chat-list-area").removeClass("open");
    }
  })

  // 11 -> 3D swiper effect
  var swiper3D = new Swiper('.swiper-3d-container', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    speed: 1000,
    freeMode: true,
    effect: 'coverflow',
    autoplay: {
      delay: 3000,
    },
    coverflowEffect: {
      rotate: 1,
      stretch: 50,
      depth: 90,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      prevEl: ".swiper-3d-button-next",
      nextEl: ".swiper-3d-button-prev"
    },
    breakpoints: {
      1400: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2.4
      },
      640: {
        slidesPerView: 2
      }
    }
  });

  // 12 -> top player slider
  var topPlayerSwiper = new Swiper('.swiper-top-player', {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 24,
    freeMode: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      prevEl: ".top-player-prev",
      nextEl: ".top-player-next"
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
    }
  });

  // 13 -> game swiper
  var gameSwiper = new Swiper('.game-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".game-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      },
    }
  });

  var gameSwiper2 = new Swiper('.game-swiper2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    speed: 5000,
    freeMode: true,
    autoplay: {
      delay: 1,
    },
    pagination: {
      el: ".game-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      },
    }
  });

  var bannerSwiper = new Swiper(".banner-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".banner-swiper-pagination",
      clickable: true,
    },
  });

  // 14 -> custom tab list
  $(".tablinks .nav-links").each(function () {
    var targetTab = $(this).closest(".singletab");
    targetTab.find(".tablinks .nav-links").each(function () {
      var navBtn = targetTab.find(".tablinks .nav-links");
      navBtn.click(function () {
        navBtn.removeClass('active');
        $(this).addClass('active');
        var indexNum = $(this).closest("li").index();
        var tabcontent = targetTab.find(".tabcontents .tabitem");
        $(tabcontent).removeClass('active');
        $(tabcontent).eq(indexNum).addClass('active');
      });
    });
  });

  // 15 -> custom accordion list
  $(".accordion-single .acc-header-area").click(function () {
    if ($(this).closest(".accordion-single").hasClass("active")) {
      $(this).closest(".accordion-single").removeClass("active");
      $(this).next(".acc-content-area").slideUp();
    } else {
      $(".accordion-single").removeClass("active");
      $(this).closest(".accordion-single").addClass("active");
      $(".acc-content-area").not($(this).next(".acc-content-area")).slideUp();
      $(this).next(".acc-content-area").slideToggle();
    }
  });

  // 16 -> count down timer
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      setDate = "12/31/", // month/date/year
      // endingDate = setDate + yyyy; // end in current year
      endingDate = setDate + nextYear; // end in next year
    //endingDate = "12/01/" + yyyy; // month/date/year

    today = mm + "/" + dd + "/" + yyyy;
    if (today > endingDate) {
      endingDate = new Date(endingDate).getTime();
    }
    //end
    const countDown = new Date(endingDate).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;
        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");
        if (days && hours && minutes && seconds) {
          days.innerText = Math.floor(distance / (day)),
            hours.innerText = Math.floor((distance % (day)) / (hour)),
            minutes.innerText = Math.floor((distance % (hour)) / (minute)),
            seconds.innerText = Math.floor((distance % (minute)) / second);
        }
        if (distance < 0) {
          clearInterval(x);
        }
      }, 0)
  }());

  // 17 -> earning chart (apex line chart)
  var options = {
    colors: ['#F62F1A', '#F6471C'],
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return "$" + val
        },
        title: {
          show: false,
        },
      },
      x: {
        show: false,
      }
    },
    series: [{
      name: "Earnings",
      data: [0, 0, 150, 0, 0, 0, 0, 50, 0, 0, 0, 0]
    }],
    chart: {
      height: 150,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true,
        height: 100,
        width: '100%',
        colors: ['#F62F1A', '#F6471C'],
      }
    },
    grid: {
      show: false,
    },
    xaxis: {
      // show: false,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    markers: {
      colors: ['#F76D1F'],
    },

  };
  if (document.querySelector("#earning-chart")) {
    var chart = new ApexCharts(document.querySelector("#earning-chart"), options);
    chart.render();
  }

  // 18 -> magnific popup
  if (document.querySelector(".popupvideo") !== null) {
    $(".popupvideo").magnificPopup({
      disableOn: 300,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

});
