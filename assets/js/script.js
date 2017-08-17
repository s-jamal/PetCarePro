$(document).ready(function () {
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // $("#scrollUpId").click(function(e){
    //     e.preventDefault();
    //     // $.scrollUp();
    // })
    
    // $("#scrollUp").click(function(){
    //     $(function(){
    //         $.scrollUp();
    //     });
    // })

    // $(function () {
    // $.scrollUp({
    //     scrollName: 'scrollUp', // Element ID
    //     topDistance: '300', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'fade', // Fade, slide, none
    //     animationInSpeed: 200, // Animation in speed (ms)
    //     animationOutSpeed: 200, // Animation out speed (ms)
    //     scrollText: 'Scroll to top', // Text for element
    //     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    // });
    // });
    
    $("#header-menu").slicknav();
    var dropdown = $(".dropdown");
    var jdropdown = $(".j-dropdown")
    var bsexamplenavbarcollapse1 = $("#bs-example-navbar-collapse-1");
    var dropdowntoggle = $(".dropdown-toggle");
    var dropdownmenu = $(".dropdown-menu");
    var jdropdownmenu = $(".j-dropdown-menu");
    var nav = $(".nav");
    var navbarnav = $('.navbar-nav');
    var navbarright = $(".navbar-right");
    var side = $(".side");
    var sidedrop = $(".side-drop");

    menuAtts();
    $(window).resize(function() {
        menuAtts();
    });

    function menuAtts() {
        var w = $(window).width(); // New width
        if (w < 992) {
            menuRemoveClasses();
            $("header nav").css("display","none");
            $(".slicknav_menu").css("display","block");
        } else {
            menuAddClasses();
            $("header nav").css("display","block");
            $(".slicknav_menu").css("display","none");
        }
    }

    function menuRemoveClasses() {
        dropdown.removeClass("dropdown");
        jdropdown.removeClass("j-dropdown");
        bsexamplenavbarcollapse1.removeAttr('id');;
        dropdowntoggle.removeClass("dropdown-toggle");
        dropdownmenu.removeClass("dropdown-menu");
        jdropdownmenu.removeClass("j-dropdown-menu");
        nav.removeClass("nav");
        navbarnav.removeClass("navbar-nav");
        navbarright.removeClass("navbar-right");
        side.removeClass("side");
        sidedrop.removeClass("side-drop");
    }

    function menuAddClasses() {
        dropdown.addClass("dropdown");
        jdropdown.addClass("j-dropdown");
        bsexamplenavbarcollapse1.attr('id', 'bs-example-navbar-collapse-1');;;
        dropdowntoggle.addClass("dropdown-toggle");
        dropdownmenu.addClass("dropdown-menu");
        jdropdownmenu.addClass("j-dropdown-menu");
        nav.addClass("nav");
        navbarnav.addClass("navbar-nav");
        navbarright.addClass("navbar-right");
        side.addClass("side");
        sidedrop.addClass("side-drop");
    }
    

    // $(".dropdown").removeClass("dropdown");
    // $(".j-dropdown").removeClass("j-dropdown");
    // $("#bs-example-navbar-collapse-1").removeAttr('id');;
    // $(".dropdown-toggle").removeClass("dropdown-toggle");
    // $(".dropdown-menu").removeClass("dropdown-menu");
    // $(".dropdown-menu").removeClass("dropdown-menu");
    // $(".dropdown-menu").removeClass("dropdown-menu");
    
    

    if ($(this).scrollTop() > $("header").height()) {
        $("header").addClass("fixed");
        // $("a.scrollup").css("display","block");
    } else {
        $("header").removeClass("fixed");
        // $("a.scrollup").css("display","none");
    }

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > $("header").height()) {
            $("header").addClass("fixed");
            $("a.scrollUp").css("display","block");
        } else {
            $("header").removeClass("fixed");
            $("a.scrollUp").css("display","none");
        }
    })
    
    // $.scrollUp({
    //     scrollName: 'scrollUpId', // Element ID
    //     //topDistance: '300', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'Fade', // Fade, slide, none
    //     animationInSpeed: 200, // Animation in speed (ms)
    //     animationOutSpeed: 200, // Animation out speed (ms)
    //     // scrollText: 'Scroll to top', // Text for element
    //     // activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    // });

   


   
});


