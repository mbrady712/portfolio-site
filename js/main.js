(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Portfolio Descriptions
    function generateHandlers (j){
        $( "." + j).on( "click", function() {
            console.log("hello");
            $("#" + j).css("display", "block");
        });

        $( ".exit").on( "click", function() {
            $("#" + j).css("display", "none");
        });
    }
    for(var i = 1; i <= 6; i++){
        generateHandlers(i);
    }

    //Email and Phone obfuscation
    var email1 ="michael"
    var email2 ="brady712"
    var email3 ="@gmail.com"
    var email = email1 + email2 + email3;
    $('.email').html(email);
    $('.emailButton').attr("href", "mailto:" + email);

    var phone1 ="410-"
    var phone2 ="608"
    var phone3 ="-8071"
    var phone = phone1 + phone2 + phone3;
    $('.phone').html(phone);
    $('.phone').attr("href", "tel:" + phone);
    
})(jQuery);

