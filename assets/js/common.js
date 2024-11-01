(function ($) {
  var header;
  $(function () {

    //navi sp
    $(".js-hamburger").on('click', function (e) {
      
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(".js-navi_sp").slideToggle().toggleClass('is-show');
      $("header").toggleClass('is-show');
      if ($(this).hasClass("is-active")) {
        var top = $(window).scrollTop();
        $("body").addClass("is-fixed");
        $("body").css({
          'top': "-" + top + "px"
        });
        $(this).attr('id', top);
      } else {
        $("body").css({
          'top': 0
        });
        $("body").removeClass("is-fixed");
        var top = $(this).attr('id');
        $(window).scrollTop(top);
      }
    });


    //tablet 
    if ("ontouchstart" in document.documentElement) {
      $('html').addClass('is-tablet no-effect');
      setTimeout(() => {
        $('html').removeClass('no-effect')
      }, 1000);
    }

    // active menu
    var url = location.href;
    var $menu = $(".js-gnav");
    var $current = $menu.find('a').filter(function () {
      return url.indexOf($(this).attr("href")) > -1
    });

    $current = $current.add($current.closest(".sub_navi li").find('a'));
    $current.addClass('current-menu');
    $current.parents('li').children('.js-navi').addClass('current-menu');
    if (window.innerWidth < 768) {
      $('.js-navi').removeClass('current-menu');
    }

    //scrool header page
    var header = $('.header').height();
    $(window).on("scroll", function () {
      // console.log($('.sec_top_04').offset().top);
      if ($(window).scrollTop() > header) {
        $("header, .float-social, body").addClass("is-scroll");
      }
      else {
        $("header, .float-social, body").removeClass("is-scroll");
        $("header").removeClass("hide");
      }

      // if ($(this).offset().top <= $(window).scrollTop() + $(window).height()) {
      //   $('.sec_top_04 .content').removeClass('fixed');
      // }

      // fade up
      fade_up();

    }).scroll();


    function fade_up() {
      $(".is-fade_up_list").each(function () {
        if ($(this).offset().top <= $(window).scrollTop() + $(window).height() + 0) {
          $(this).addClass('is-show');
          // $(this).parents('.is-fade_up_list_container').addClass('is-show');
        }
      });
    }


    $('.js-anchor').on('click', function (e) {
      // location.reload();
      $("body").removeClass("is-fixed");
      var href = $(this).attr('href');
      if (href.indexOf('#') > 0) {
        href = href.substring(href.indexOf('#'));
      }
      if (window.innerWidth < 768) {
        $(".header").removeClass('is-show');
        $(".js-hamburger").removeClass('is-active');
      }
      doAnchor(href);
    });

    $(document).ready(function () {
      $(window).scrollTop(0);
      initAnchor();
    });

    function initAnchor() {
      // check hash
      if (window.location.hash) {
        doAnchor(window.location.hash);
      }
    }

    function doAnchor(target) {
      if ($(target).length > 0) {
        $('html, body').animate({
          scrollTop: $(target).offset().top - header
        }, 1000);
      }
    }
    function isIOS() {
      var ua = navigator.userAgent;
      var ios = /iPhone|iPad|iPod/.test(ua);
      return ios;
    }
    if (isIOS()) {
      $('html').addClass('ios');
    } else {
    }
  });
})(jQuery);
