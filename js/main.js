
$(document).ready(function(){

    $(window).scroll(function(){

        var pageY = $(window).scrollTop();
        // var sec2_top = $('.section_2').offset().top;

        if(pageY >= 300){

           
            $('header').css({
                position: 'fixed',
                backgroundColor:'rgba(255,255,255,0.5)',
            });


            
        }else if(pageY == 0){

             $('header').css({               
                backgroundColor:'unset'
            });
        
        };

    
    });
    // scroll end

    

});







    
        



