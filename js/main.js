$(function() {
    var offsettopaside = $('aside').offset().top;
    var offsetwidthaside = $('aside').outerwidth();
    var offsetwidthbox = $('.box-container').outerwidth();      
    $(window).scroll(function(){    
        if($(window).scrolltop() > offsettopaside){
            var bottombox = $('.box-container').offset().top + $('.box-container').outerheight();
            var bottomaside = $('aside').offset().top + $('aside').outerheight();
            if( bottomaside - $(window).scrolltop() -  $('.box-container').outerheight() < 0){
                $('.box-container').css({
                    'position': 'absolute',
                    'width': offsetwidthbox,
                    'top' : bottomaside - $('.box-container').outerheight() + 1 +'px'
                });   
            }else{
                $('.box-container').css({
                    'position': 'fixed',
                    'width': offsetwidthaside,
                    'top' : '10px'
                });
            }
        }else{
            $('.box-container').css({
                'position' : 'static'
            });
        } 
    })
}); 