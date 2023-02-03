( function($) {
  //home-container-world
  var posX = 0;
  var speed = 0;
  $( function() {
    //header-title
    var bounceIn = anime({
      targets: '.letter__part',
      translateY: {
            value: [-30, 0],
            duration: 900,
            delay: 1000,
            elasticity: 600,
            easing: 'easeOutElastic'
          },
          opacity: {
            value: [0, 1],
            duration: 300,
            easing: 'linear',
            delay: 1000
          }
      });
    
    var lineDrawing = anime({
      targets: '.color-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1000,
      loop: false,
      direction: 'alternate',
    });

    //section
    var $section = $("[data-section]");

    //gnb
    var gnbScroll = $(".gnb").offset().top;

    //home-container-world
    var $world = $(".home-container-world");
    var $cooper = $(".cooper");
    var go = window.setInterval( function() {    
      posX = posX - speed;  
      $world.css("background-position", posX);
      }, 100);


    //gnb up
    $(".gnb li").each( function(index) {      
      $(this).find("a")
      .delay(1200)
      .delay(index*300)
      .slideDown(800);
    });

    //gnb scroll
    $(".gnb").find("a").click( function( event ) {
      event.preventDefault();

      var $this = $(this);
      var index = $this.parent().index();
      var currentSection = $section.eq(index);
      var posY = currentSection.offset().top;

      $("html,body").animate({ 
        scrollTop : posY 
      }); 
    });

    $(window).scroll( function() {   
      var nowScroll = $(this).scrollTop();

      if( gnbScroll <= nowScroll ){
        $(".gnb").addClass("fixed");
      } else{
        $(".gnb").removeClass("fixed");
      };
    });

    //section-home 
    $(".home-container").delay(2600).addClass("up",1000);

     //home-container-world
     $(window).keydown( function( event ) {
      if( event.keyCode == 13 ){
        speed = + 30;
        go();
      };   
    });
    
    $(window).keydown( function( event ) {
      if( event.keyCode == 66 ){
        speed = speed + 10;
        go();
      };
    });

    $(window).keydown( function( event ) {
      if( event.keyCode == 74 ){
        $cooper
               .animate({bottom: 80})
               .animate({bottom: 50});
      };
    });

    $(window).keydown( function( event ) {
      if( event.keyCode == 83 ){
        speed = 0;
      };
    });

    //play game
    $(window).scroll( function() {
      var headerScroll = $(".section-home").offset().top-100;
      var nowScroll = $(this).scrollTop();

      if( headerScroll <= nowScroll ){
        anime({
          targets: '.play .move',
          translateX: -150,
          delay: anime.stagger(100)
        });
      }; 
    });
    
    //section-work 
    $(".work-container-title").click( function( event ) {
      event.preventDefault();

      var $this = $(this);
      
      if( $this.siblings().is(":visible") ){
        $this.siblings().slideUp();
      }else{
        $this.siblings().slideDown();
      }; 
    }); 
    
    //email form
    function email_check( email ) {

      var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return (email != '' && email != 'undefined' && regex.test(email));  
    };
    
    $("input[name='submit']").click( function() {
      var userName = $("input[name='name']").val();
      var userEmail = $("input[name='email']").val();
      var userSay = $("textarea[name='say']").val();

      if(userName == '') {
        alert("이름을 입력해주세요.");
        userName.focus();
        return false;
      };

      if(userEmail == '') {
        alert("이메일을 입력해주세요.");
        userName.focus();
        return false;
      };

      if(userSay == '') {
        alert("내용을 입력해주세요.");
        userName.focus();
        return false;
      };
      
      if( userEmail == '' || userEmail == 'undefined') return;

      if(! email_check(userEmail) ) {
          alert('잘못된 형식의 이메일 주소입니다.');
          $(this).focus();
          return false;
      };

      alert("메일이 전송되었습니다.");
    });

     //gnb-sidebar
     $(window).scroll( function() {
      var skillScroll = $(".section-skill").offset().top-100;
      var workScroll = $(".section-work").offset().top-100;
      var contactScroll = $(".section-contact").offset().top-100;
      var nowScroll = $(this).scrollTop();

      if( skillScroll <= nowScroll ){
        anime({
          targets: '.gnb-sidebar .move',
          translateX: -150,
          delay: anime.stagger(100)
        });
      }
      else {
        anime({
          targets: '.gnb-sidebar .move',
          translateX: 150,
          delay: anime.stagger(100)
        });
      }; 

      if( workScroll <= nowScroll ){
        $(".gnb-sidebar").css("color","#efc0bf");
      }
      else {
        $(".gnb-sidebar").css("color","initial");
      };

      if( contactScroll <= nowScroll ){
        $(".gnb-sidebar").css("color","initial");
      };
    });

    $(".gnb-sidebar").find("a").click( function( event ) {
      event.preventDefault();

      var $this = $(this);
      var index = $this.parent().index();
      var currentSection = $section.eq(index);
      var posY = currentSection.offset().top;

      $("html,body").animate({ 
        scrollTop : posY 
      }); 
    });

  });

})(jQuery);