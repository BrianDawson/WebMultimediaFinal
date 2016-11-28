$(function () {


    var $accordianLi = $('ul#accordion li');
    var $accordianLiChildren = $accordianLi.children('ul');

    $accordianLiChildren.hide();


    NavChange = (function () {

        init = function () {

            clickHandler();
        },

        clickHandler = function () {

            $accordianLi.on('click.NavChange', function () {

                $this = $(this);

                $nextUL = $this.children('ul').first();

                $visibleSiblings = $accordianLi.children('ul:visible');

                console.log($visibleSiblings);
                console.log($nextUL);

                if ($visibleSiblings.get(0) === $nextUL.get(0)) {

                    $nextUL.slideUp();

                } else if ($visibleSiblings.length > 0) {

                    $visibleSiblings.slideUp(function () {
                        $nextUL.show(500);

                    });

                } else if ($visibleSiblings.length <= 0) {
                    $nextUL.show(500);
                }
            });

        };

        return {
            init: init
        };



    })();
    NavChange.init();
});