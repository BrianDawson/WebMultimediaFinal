$(function () {

    var $ninjaTab = $('div#ninjaTab');
    var $ninjaJump = $('img#ninjaJump');
    var $ninjaWarrior = $('img#ninjaWarrior');
    var $webNinjaLink = $('a#webNinjaLink');
    var $ninjaPanel = $('div#ninjaPanel');
    var $webWarrior = $('#webWarrior');

    $ninjaJump.rotate(30);

    NavChange = (function () {

        init = function () {

            hoverHandler();
            clickHandler();
            linkHoverHandler();
        },

        hoverHandler = function () {

            $ninjaTab.hover(

                function () {
                    $(this).addClass('activeNinja');
                    $ninjaJump.stop(true, true).animate({
                        left: '10px',
                        top: '10px',

                    }).rotate({
                        duration: 200,
                        animateTo: -30
                    });
                    $ninjaJump.fadeTo("fast", 1);

                },
                function () {
                    $(this).removeClass('activeNinja');
                    $ninjaJump.stop(true, true).animate({
                        left: '-30px',
                        top: '10px',

                    }).rotate({
                        duration: 200,
                        animateTo: 30
                    });
                    $ninjaJump.fadeTo("slow", 0.20);

                }
            );

        };

        clickHandler = function () {

            $ninjaTab.click(function () {

                $ninjaWarrior.hover(

                    function () {

                        $ninjaWarrior.attr('src', 'images/ninja02_small2.png')
                                     .stop(true, true)
                                     .fadeTo("slow", 0.7);


                    },
                    function () {
                        
                        $ninjaWarrior.attr('src', 'images/ninja02_small.png')
                                     .stop(true, true)
                                     .fadeTo("slow", 0.3);

                    }
                );
                $ninjaPanel.animate({
                    width: 'toggle',
                    height: 'toggle'
                });

            });



        },
            
            linkHoverHandler = function () {

            $webNinjaLink.hover(

                function () {
                    
                    $ninjaWarrior.animate({
                        top: '240px'
                    }, 300, 'easeOutBounce', function(){
                        
                        var test = document.getElementById('webWarrior');
                        TweenLite.to(test, 1, {css:{opacity: 1, 
                                                    left: '130px',
                                                    top: '250px'}});
                         
                        
                    });
                    

                },
                function () {
                   

                }
            );

        };


        return {
            init: init
        };



    })();
    NavChange.init();
});