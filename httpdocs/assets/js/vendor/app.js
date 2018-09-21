
$(document).ready(function(){

	 	
/**************** Disable scrolling zoom in google maps started *************/

    $('#map-iframe').addClass('scrolloff');

    $('#map-overlay').on("mouseup" , function(){
        	$('#map-iframe').addClass('scrolloff');
    });
    $('#map-overlay').on("mousedown", function(){
        	$('#map-iframe').removeClass('scrolloff');
    });
    $('#map-iframe').mouseleave(function(){
        	$('#map-iframe').addClass('scrolloff');
    });

    /*** Disable scrolling zoom in google maps Completed ***/

    $('.about-panel').addClass('remove-opcity');
    $('.feature-jobs-panel__content').addClass('remove-opcity');


/************************* Carousel scripts started  ***********************/

    $('.bxslider').bxSlider(); // Call the scripts
       
    $('.jobs-slider').bxSlider({ // Jobs slider 
        pager: false,
        slideWidth: 200,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 24
        });


    $('.people-slider').bxSlider({ // People slider 
        pager: false,
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 20
    });

    $('.featured-jobs-slider').bxSlider({ // Jobs slider 
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 50
    });


    $('.career-current-jobs-slider').bxSlider({ // career-current-jobs-sliders
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 50
    });

    $('.oakleaf-stories-slider').bxSlider({ // career-stories
        pager: false,
        slideWidth: 480,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 50
    });

    $('.news-slider').bxSlider({
        mode: 'vertical',
        slideWidth: 700,
        minSlides: 3,
        slideMargin: 20
    });

    $('.testimonials-slider').bxSlider({ // Testimonials slider
        pager: false,
        slideWidth: 1100,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 5
    });

     $('.client-business-areas-slider').bxSlider({ // Testimonials slider
        slideWidth: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 5
    });

/************************* Carousel scripts completed ***********************/

/************************* Mobile Menu ***********************/


    $('.mobile-menu-open').click(function() {
        $('#menu').animate({
            left: "0px"
        }, 300);
        $('.page-wrapper').addClass('mobile-menu-opened');
    });

    $('#menu-close').click(function() {
        $('#menu').animate({
            left: "-=260px"
        }, 300);

        $('.page-wrapper').removeClass('mobile-menu-opened');
            
    });


/************************* Mobile Menu completed ***********************/


   

/************************* Show more option forms started ***********************/

    $('#more-option-show').click(function(e){
        e.preventDefault();
        $('.more-option-block-cover').slideToggle("slow");
        //$("#panel").slideToggle("slow");
        $('#more-option-show').hide();
        $('#less-option-show').show();
    });

    $('#less-option-show').click(function(e){
        e.preventDefault();
        $('.more-option-block-cover').slideUp("slow");
        $('#less-option-show').hide();
        $('#more-option-show').show();
       
    });

/************************* Show more option forms completed ***********************/



/************************* Salary checker display started ***********************/


    var salaryCheckerGraph = (function(){

        var $elem = $('.graph-bar'),
            wiggleRoomHigh = 15;
            wiggleRoomLow = 8;

        function testBar($bar, $high, $low) {

             if ($bar.width() > ($high.width() + wiggleRoomHigh)) {
                $high.addClass('hang-left');
            } else {
                $high.removeClass('hang-left');
            }

            if ($low.width() > ($bar.width() - wiggleRoomLow)) {
                $low.hide();
            } else {
                $low.show();
            }
        }

        function rejig() {

            $elem.each(function() {

                var $elem = $(this);

                var $bar = $elem.find('.graph-bar__bar'),
                    $high = $elem.find('.graph-bar__high'),
                    $low = $elem.find('.graph-bar__low');

                testBar($bar, $high, $low);

            });

        }

        rejig();

        $(window).on('resize', rejig);

    })();



/************************* Salary checker display completed ***********************/




/************************* Salary checker form ***********************/


    var numberFields = (function() {

        var $numberTextInputs = $('.js-input-text-number');

        $numberTextInputs.keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
                 (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
            }
           
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

    })();


    var formNumberAddGroup = (function(){

        // js-number-add-group
        // js-number-add
        // js-number-total-innerhtml
        // js-number-total-value

        var $groups = $('.js-number-add-group');

        $groups.each(function() {

            var $group = $(this),
                $items = $group.find('.js-number-add'),
                $totalInner = $group.find('.js-number-total-innerhtml'),
                $totalValue = $group.find('.js-number-total-value');

            $items.on('change', function() {

                var values = [],
                    result = 0;

                $items.each(function(i) {
                    values[i] = $(this).val();
                });

                function add(a, b) {
                    return parseInt(a) + parseInt(b);
                }

                result = values.reduce(add, 0);

                if (!isNaN(result)) {
                    if ($totalInner.length) {
                        $totalInner.html(result);
                    }

                    if ($totalValue.length) {
                        $totalValue.val(result);
                    }
               }

            });
        });


    })();



/************************* Salary checker form completed ***********************/


/************************* Accordion ***********************/


var accordions = (function() {

    var settings = {
        elemSelector : '.accordion',
        itemSelector : '.accordion__item',
        toggleSelector : '.accordion__bar',
        bodySelector : '.accordion__body',
        openClass : 'is-open'
    };

    function toggleEvent($item, callback) {

        if (!$item.length) {
            return;
        }

        var $toggle = $item.find(settings.toggleSelector),
            $body = $item.find(settings.bodySelector);

        $toggle.on('click', function(event) {
            if ($toggle.hasClass(settings.openClass)) {

                $toggle.removeClass(settings.openClass);
                $body.css('display', 'none');

            } else {
                $toggle.addClass(settings.openClass);
                $body.css('display', 'block');
            }

            // stop selecting on click
            event.preventDefault();
        });
    }

    function init(closeOtherItems) {

        $(settings.elemSelector).each(function() {

            var $elem = $(this),
                $items = $elem.find(settings.itemSelector),
                $body = $items.find(settings.bodySelector);

            // hide all body by default
            $body.css('display', 'none');

            // setup events for each item
            $items.each(function() {

                var $item = $(this);

                toggleEvent($item);

            });

        });
    }

    return {
        init : init
    }

})();

accordions.init();

/************************* Accordion completed ***********************/




}); // main ends










