AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".site-navigation");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});





// input textarea remaining 
function ApplicationDetailsCharacters() {
  var inputText = document.getElementById("application-details").value;
  var remaining = 4000 - inputText.length;
  
  if (remaining < 0) {
    inputText.value = inputText.substring(0, 50);
    remaining = 0;
  }

  document.getElementById("remainingapplication-details").innerText = " " + remaining;
}

function RemainingCharacters() {
  var inputText = document.getElementById("Residential-Address").value;
  var remaining = 150 - inputText.length;
  
  if (remaining < 0) {
    inputText.value = inputText.substring(0, 50);
    remaining = 0;
  }

  document.getElementById("remainingResidential").innerText = " " + remaining;
}




$(document).ready(function() {
  $('.exclude-from-select2').select2();
});

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#scrollButton').fadeIn();
			} else {
				$('#scrollButton').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scrollButton').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

jQuery(document).ready(function ($) {
  "use strict";

  var slider = function () {
    $(".nonloop-block-3").owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 15,
      margin: 20,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
      responsive: {
        600: {
          margin: 20,
          items: 2,
        },
        1000: {
          margin: 20,
          items: 3,
        },
        1200: {
          margin: 20,
          items: 3,
        },
      },
    });
  };
  slider();

  var siteMenuClone = function () {
    $('<div class="site-wrap-overlay"></div>').appendTo("body");

    $('<div class="site-mobile-menu"></div>').prependTo("body");

    $('<div class="site-mobile-menu-header"></div>').prependTo(
      ".site-mobile-menu"
    );
    $('<div class="site-mobile-menu-close "></div>').prependTo(
      ".site-mobile-menu-header"
    );
    $('<div class="site-mobile-menu-logo"></div>').prependTo(
      ".site-mobile-menu-header"
    );

    $('<div class="site-mobile-menu-body"></div>').appendTo(
      ".site-mobile-menu"
    );

    $(".js-logo-clone").clone().appendTo(".site-mobile-menu-logo");

    $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo(
      ".site-mobile-menu-close"
    );

    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});
