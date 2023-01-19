( function($) {
  var current = 0;
  var active = "active";
  var backgroundColor = "background-color";

  $( function() {
    var $heroLogo = $(".herologo li");   
    var $screenCover = $(".screen-cover");

    var selectLogo = function() {
      var $current = $heroLogo.eq(current);
      var $siblings = $heroLogo.not($current);
      var logoColor = $current.data("color");

      $current.addClass(active);
      $siblings.removeClass(active);

      $current.css(backgroundColor, logoColor);
      $siblings.css(backgroundColor, "initial");

      $screenCover.animate({ left: -600 * current });
    };

    $(".herologo li")
      .click(function () {
        current = $(this).index();
        selectLogo();
      })
      .eq(0)
      .trigger("click");

    $(".prev").click(function (event) {
      event.preventDefault();

      current = current - 1;

      if (current < 0) {
        current = 4;
      };

      selectLogo();
    });

    $(".next").click(function (event) {
      event.preventDefault();

      current = current + 1;

      if (current > 4) {
        current = 0;
      };

      selectLogo();
    });
  })

})(jQuery);




