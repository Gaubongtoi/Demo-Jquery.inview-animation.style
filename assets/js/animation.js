$(function () {
  // Kv
  $(".kv").on("inview", function (e, isInview) {
    if (isInview) {
      $(this)
        .find(".kv__img--01, .kv__img--02")
        .each(function () {
          $(this).addClass("animate__animated animate__fadeIn");
        });
      $(this)
        .find(
          ".kv__txt .txt-02,  .kv__txt .txt-01, .kv__txt .txt-02, .kv__txt img"
        )
        .each(function (index) {
          $(this)
            .css("animation-delay", `${index * 0.6}s`)
            .addClass("animate__animated animate__fadeInUp");
        });
    }
  });
  // Section 1
  $(".sec_01 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this)
        .find(".title_h2, .txt")
        .each(function (index) {
          $(this)
            .css("animation-delay", `${index * 0.7}s`)
            .addClass("animate__animated animate__fadeIn");
        });
    }
  });
  $(".sec_01 .container .list-items").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
      $(this)
        .children(".items")
        .each(function (index) {
          $(this)
            .css("animation-delay", `${index * 0.2}s`)
            .addClass("animate__animated animate__fadeInLeft");
        });
      $(".sec_01 .container .title_h3").addClass(
        "animate__animated animate__fadeInUp"
      );
    }
  });
  // List Image
  $(".list-img").on("inview", function (e, isInview) {
    if (isInview) {
      const containerTop = $(this).offset().top;
      const containerHeight = $(this).outerHeight();
      const containerMiddle = containerTop + containerHeight / 2;
      $(this).css("opacity", 1);
      $(this)
        .children(".items")
        .each(function (index) {
          const itemTop = $(this).offset().top + $(this).outerHeight() / 2;

          // Kiểm tra nếu phần tử nằm gần giữa container
          if (Math.abs(itemTop - containerMiddle) < 50) {
            $(this)
              .css("animation-delay", `${index * 0.2}s`)
              .addClass("animate__animated animate__fadeInRight")
              .css("opacity", 1);
          } else {
            $(this).removeClass("animate__animated animate__fadeInRight");
          }
        });
    }
  });

  // Section 2
  $(".sec_02 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_02 .container .list-benefits").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
    }
  });
  $(".container .list-benefits")
    .children(".items")
    .each(function () {
      $(this).css("opacity", 0);
    });
  $(".container .list-benefits .items:lt(3)").on(
    "inview",
    function (e, isInview) {
      if (isInview) {
        $(this).each((index) => {
          $(this)
            .css("animation-delay", `${index * 0.2}s`)
            .addClass("animate__animated animate__fadeInLeft");
        });
      }
    }
  );
  $(".container .list-benefits .items:gt(2)").on(
    "inview",
    function (e, isInview) {
      if (isInview) {
        $(this).each((index) => {
          $(this)
            .css("animation-delay", `${index * 0.2}s`)
            .addClass("animate__animated animate__fadeInRight");
        });
      }
    }
  );
  // Section 3
  $(".sec_03 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_03 .container .list-mess")
    .children(".items")
    .each(function (index) {
      $(this).css("opacity", 0);
      $(this).on("inview", function (e, isInview) {
        if (isInview) {
          if (index % 2 === 0) {
            // Phần tử hiện tại
            $(this)
              .css("animation-delay", `${index * 0.2}s`)
              .addClass("animate__animated animate__fadeIn");

            // Phần tử kế tiếp có độ trễ thêm 0.2s nữa
            $(this)
              .next(".items")
              .css("animation-delay", `${index * 0.2 + 0.2}s`)
              .addClass("animate__animated animate__fadeIn");
          }
        }
      });
    });
  // Section 4
  $(".sec_04").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_04 .block-group")
    .children(".block")
    .each(function (index) {
      $(this).css("opacity", 0);
      $(this).on("inview", function (e, isInview) {
        if (isInview) {
          $(this).css("opacity", 1);
          const isEven = $(this).is(":even");
          // Phần tử con đầu tiên (first-child) áp dụng animation theo hướng
          $(this)
            .children(":first-child")
            .css("animation-delay", `${index * 0.2}s`)
            .addClass(
              `animate__animated ${
                isEven ? "animate__fadeInRight" : "animate__fadeInLeft"
              }`
            );
          // Phần tử con cuối cùng (last-child) áp dụng animation theo hướng ngược lại
          $(this)
            .children(":last-child")
            .css("animation-delay", `${index * 0.2 + 0.1}s`)
            .addClass(
              `animate__animated ${
                isEven ? "animate__fadeInLeft" : "animate__fadeInRight"
              }`
            );
        }
      });
    });
  // Section 05
  $(".sec_05 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_05 .container .price").on("inview", function (e, isInview) {
    if (isInview && !$(this).hasClass("animated")) {
      $(this)
        .css("opacity", 0)
        .css("animation-delay", "0.2s")
        .addClass("animate__animated animate__fadeIn")
        .addClass("animated");
      $(this).animate({ opacity: 1 }, 400);
      $(this)
        .children(":first-child")
        .children("li")
        .each(function () {
          $(this).css("opacity", 0);
          $(this).on("inview", function (e, isInview) {
            if (isInview && !$(this).hasClass("li-animated")) {
              $(this).animate({ opacity: 1 }, 400);
              $(this).addClass("li-animated");
              $(this)
                .children()
                .each(function (index) {
                  $(this)
                    .css("animation-delay", `${(index + 1) * 0.5}s`)
                    .addClass("animate__animated animate__fadeIn");
                });
            }
          });
        });
    }
  });
  // Section 06
  $(".sec_06 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_06 .container .store").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
      $(this)
        .find(".map")
        .addClass("animate__animated animate__fadeInLeft")
        .css("animation-delay", "0.5s");
      $(this)
        .find(".thumb")
        .addClass("animate__animated animate__fadeInRight")
        .css("animation-delay", "0.5s");
    }
  });
  // Section 07
  $(".sec_07 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_07 .container .inquiry").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
      $(this)
        .find(".inquiry__img")
        .addClass("animate__animated animate__fadeInLeft")
        .css("animation-delay", "0.5s");
      $(this)
        .find(".inquiry__txt")
        .addClass("animate__animated animate__fadeInRight")
        .css("animation-delay", "0.5s");
    }
  });
  // Section 08
  $(".sec_08 .container").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).find(".title_h2").addClass("animate__animated animate__fadeInUp");
    }
  });
  $(".sec_08 .container .overview").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
      $(this)
        .find(".overview__txt")
        .addClass("animate__animated animate__fadeInLeft")
        .css("animation-delay", "0.5s");
      $(this)
        .find(".overview__img")
        .addClass("animate__animated animate__fadeInRight")
        .css("animation-delay", "0.5s");
    }
  });
  // Section 09
  $(".sec_09 .container .vision").on("inview", function (e, isInview) {
    if (isInview) {
      $(this).css("opacity", 1);
      $(this)
        .find(".vision__txt")
        .addClass("animate__animated animate__fadeInLeft")
        .css("animation-delay", "0.5s");
      $(this)
        .find(".vision__details")
        .addClass("animate__animated animate__fadeInRight")
        .css("animation-delay", "0.5s");
    }
  });
  // Float Social
});
