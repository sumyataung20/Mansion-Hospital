$(document).ready(function() {
    $(window).scroll(function() {
        var getscrollpoint = $(window).scrollTop();
// console.log(getscrollpoint);

if(getscrollpoint >= 220) {
    $(".infotexts").addClass("myright");
    $(".infopics").addClass("myright");
}else{
    $(".infotexts").removeClass("myright");
    $(".infopics").removeClass("myright");
}
    })

    $("#lightslider").lightSlider({
        item: 4,
        loop: true,
        slideMove: 1,
        auto: true,
        speed: 300,
      }).play();
  

    $(window).scroll(function() {
        let getscroll = $(this).scrollTop();

        if(getscroll >= 2450){
            $(".card1").addClass("moveleft");
            $(".card2").addClass("movebottom");
            $(".card3").addClass("moveright");
        }else{
            $(".card1").removeClass("moveleft");
            $(".card2").removeClass("movebottom");
            $(".card3").removeClass("moveright");
        }
    })


    // start form

    $("#accordions").accordion();
    // end form

    // start footer
    var date = new Date().getUTCFullYear();
    $("#getyear").text(date);
    // end footer

    $(window).scroll(function() {
        var getprogress = $("#progresses");
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();

        var getscrollheight = $(document).height();
        var getclientheight = $(window).height();

        var calcheight = getscrollheight - getclientheight;

        var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinalheight);
        getprogressval.text(`${getfinalheight}%`);

        getprogress.css({
            "background" :`conic-gradient(steelblue ${getfinalheight}%, #aaa ${getfinalheight}%)`
        })
    })

    $("#videos").click(function() {
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
    
        var videourlwithauto = getvideosrc + "?autoplay=1";
    
        $(getmodal + "iframe").attr("src",videourlwithauto);
    
        $(getmodal + "button.btn-close").click(function() {
          $(getmodal + "iframe").attr("src", getvideosrc);
        })
    
        $(getmodal).click('hidden.bs.modal', function() {
          $(getmodal + "iframe").attr("src" ,getvideosrc);
        })
      })
    
})