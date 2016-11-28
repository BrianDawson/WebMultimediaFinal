$(function () {


    var $navBar = $('#headerWrap a');
    var $topic = $('#topic');
    var $currentId = $('#defaultTabs');
    var $contentWrap = $('div#contentWrap');
    
    $contentWrap.css({height: + $currentId.height() + 50 + 'px'});

    NavChange = (function () {

        init = function () {

            clickHandler();
        },

        clickHandler = function () {

            $navBar.on('click.NavChange', function () {

                var $this = $(this);

                $clickedId = $this.attr('id');
                newTopicText = $this.text();
                $clickedId = $('#' + $clickedId + 'Tabs');

                if ($clickedId.get(0) !== $currentId.get(0)) {

                    $topic.fadeOut(function () {
                        $(this).text(newTopicText).fadeIn();
                    });

                    $currentId.hide(200, function () {
                        $clickedId.show();
                        $currentId = $clickedId;
                                                
                        $contentWrap.css({height: + $currentId.height() + 50 + 'px'});
                    });
                    
                    return false;

                };

            });

        };


        return {
            init: init,
            //openItem: openItem
        };



    })();
    NavChange.init();
});