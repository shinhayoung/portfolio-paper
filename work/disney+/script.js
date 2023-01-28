(function($) {
  $( function() {
    /* gnb scroll */
    $(window).scroll( function() {
      var gnbScroll = $(".section-explanation").offset().top;
      var nowScroll = $(this).scrollTop();

      if( gnbScroll <= nowScroll ){
        $(".gnb-logo").css("opacity","1");
        $(".gnb-menu-join").css("opacity","1");
        $(".gnb").css("background-color","#000");
      } else{
        $(".gnb-logo").css("opacity","0");
        $(".gnb-menu-join").css("opacity","0");
        $(".gnb").css("background-color","initial");
      }
    });

    /* qanda acodian */
    $(".qanda-header").click( function() {
      var $this = $(this);
      
      if( $this.siblings().is(":visible") ){
        $this.siblings().slideUp(200);
        $this.find("p").text("+");
      }else{
        $this.siblings().slideDown(200);
        $this.find("p")
        .text("-");
      }; 
    });

  });
})(jQuery);