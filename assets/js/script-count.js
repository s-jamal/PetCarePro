$(document).ready(function () {
    var counterCheck = 0;
    $(window).scroll(function() {
        var hT = $('#counterStartLine').offset().top,
            hH = $('#counterStartLine').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS > (hT+hH-wH)) && counterCheck == 0){
            counterStart();
            counterCheck = 1;
        }
    });

    function noScroll() {
        var hT = $('#counterStartLine').offset().top,
            hH = $('#counterStartLine').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS > (hT+hH-wH)) && counterCheck == 0){
            counterStart();
            counterCheck = 1;
        }
    }
    noScroll();

    function counterStart() {
        var obj550 = $("#counter550");
        var obj30 = $("#counter30");
        var obj150 = $("#counter150");
        var obj12 = $("#counter12");

        var options = {
          useEasing : false, 
          useGrouping : false, 
          separator : ',', 
          decimal : '.', 
        };
        var demo1 = new CountUp(counter550, 0, 550, 0, 1, options);
        var demo2 = new CountUp(counter30, 0, 30, 0, 1, options);
        var demo3 = new CountUp(counter150, 0, 150, 0, 1, options);
        var demo4 = new CountUp(counter12, 0, 12, 0, 1, options);
        demo1.start();
        demo2.start();
        demo3.start();
        demo4.start();
    }
});