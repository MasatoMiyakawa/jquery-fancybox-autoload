$(function(){

    secondNum = 60;     //set time
    timeoutId = 0;
    showFlg = false;    //set only once

    $.fn.intervalFunc();

    $('html').mousemove(function(e){
        clearTimeout(timeoutId);
        $.fn.intervalFunc();
    });

});

$.fn.extend({
    eventFunc : function()
    {
        if (showFlg == false) {
            $.fancybox({
                overlayColor:'#fff',
                overlayOpacity:0.9,
                centerOnScroll:true,
                hideOnContentClick:true,
                overlayShow:true,
                type:'iframe',
                width:500,
                height:600,
                href:'URL',
                scrolling:'no',
                autoScale:false,
                'onClosed':function() {  
                    showFlg = false; 
                    window.location = "URL";
                    return false;
                }
            });      
        }      
        showFlg = true;
    },
    intervalFunc : function()
    {
        timeoutId = setTimeout( function () {
            $.fn.eventFunc();
        } , secondNum * 1000 );
        
    }
});
