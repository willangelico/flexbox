;(function($){

  "use strict";

  $.fn.stickyBox = function( params ) {

    // Default options
    var o = $.extend( {
      area  : '#asideArea',
      box   : '#stickyBox'
    }, params);

    // Variables
    var $areaHeight = $( o.area ).outerHeight(),
        $areaTop = $( o.area ).offset().top,
        $areaBottom = $areaTop + $areaHeight;
    var $boxWidth = $( o.box ).outerWidth(),
        $boxHeight = $( o.box ).outerHeight(),
        $boxTop = $( o.box ).offset().top,
        $boxBottom = $boxTop + $boxHeight;

    // DOM elements
    var el = {
      $window: $(window)
    };

    // Methods
    var methods = {
      init: function(){
        events.windowScroll();
      },
      isSticky: function(){    
        return el.$window.scrollTop() > $areaTop;  
      },
      rolloverBox: function(){
        if($areaBottom - el.$window.scrollTop() - $boxHeight < 0){
          $( o.box ).css({
            'position': 'absolute',
            'width': $boxWidth,
            'top' : $areaBottom - $boxHeight + 'px'
          });
        }else{
          $( o.box ).css({
            'position': 'fixed',
            'width': $boxWidth,
            'top' : '10px'
          });
        }
      },
      setStaticBox: function(){
        $( o.box ).css({
          'position': 'static'
        });
      }
    };

    // Events
    var events = {
      windowScroll: function(){
        el.$window.scroll(function(event) {
          if(methods.isSticky()){
            methods.rolloverBox();  
          }else{
            methods.setStaticBox();
          }
        }); 
      }   
    };
    methods.init();
  };
})( jQuery );
