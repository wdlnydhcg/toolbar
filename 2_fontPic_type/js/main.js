requirejs.config({
    paths:{
        jquery:'jquery-1.11.3.min'
    }
});
requirejs(['jquery','scrollto'],function ($,scrollto) {
    var scroll = new scrollto.ScrollTo({
        dest:0,
        speed:2000
    });

    $('#backTop').on('click', $.proxy(scroll.move, scroll));

    $(window).on('scroll',function () {
        checkPosition($(window).height());
    });

    checkPosition($(window).height());

    function move() {
        $('html,body').animate({
            scrollTop:0
        })
    }
        
})