(function($) {

        $(document).ready(function() {

                $(function() {

                        var container = $('#features-section'),
                        titles = container.find('.content-titles'),
                        mobileNav = container.find('.content-mobile-nav'),
                        features = container.find('.feature-contents ul li'),
                        toggle, current;

                        createContentTitles();
                        activateContent();
                        autoToggle(20);

                        function autoToggle(duration) {
                                toggle = setInterval(function() {
                                        activateContent(validContentIndex(current));
                                        current++;
                                }, 1000 * duration);
                        }

                        function createContentTitles() {
                                var i, list;
                                titles.append('<h5 class="text-uppercase">Features</h5><ul class="list-unstyled" role="navigation"></ul>');
                                mobileNav.append('<ul class="list-unstyled text-center" role="navigation"></ul>');
                                list = titles.find('ul'),
                                mobileList = mobileNav.find('ul');
                                features.each(function(i, e) {
                                        list.append('<li><i class="glyphicon glyphicon-stop"></i><a href="#" class="text-uppercase">' + $(e).find('article h6').text() + '</a></li>');
                                        mobileList.append('<li><a href="#"><i class="glyphicon glyphicon-stop"></i></a></li>');
                                });

                                function bindClickHandler(i, elm) {
                                        $(elm).click(function(e) {
                                                e.preventDefault();
                                                activateContent(i);
                                        });
                                }

                                titles = list.find('li').each(bindClickHandler);
                                mobileNav = mobileList.find('li').each(bindClickHandler);
                        }

                        function validContentIndex(index) {
                                return (typeof index === "number" && index >= 0 && index < features.length) ? index : 0;
                        }

                        function getActiveContent() {
                                return features.filter(function(i, e) {
                                        return $(e).hasClass('active');
                                });   
                        }

                        function activateContent(index) {
                                var active = getActiveContent();
                                (active.length > 0) && active.removeClass('active') && titles.removeClass('active') && mobileNav.removeClass('active');
                                current = index = validContentIndex(index || 0);
                                $(features.get(index)).addClass('active') && $(titles.get(index)).addClass('active') && $(mobileNav.get(index)).addClass('active');
                        }
                        
                });

                $(function() {

                        var header = $('#header'),
                        bannerHeader = $('#banner-header')[0],
                        hotelsCount = $('#hotels-worldwide .hotels-count'),
                        hotels = hotelsCount.parents('#hotels-worldwide')[0],
                        odometer;

                        bootOdometer();

                        function bootOdometer() {
                                window.odometerOptions = {
                                        auto: false
                                };
                                odometer = new Odometer({
                                        el: hotelsCount[0],
                                        format: 'd',
                                        value: 0,
                                });
                                odometer.render();
                        }

                        $(window).scroll(function() {
                                var hotelsDim = hotels.getBoundingClientRect(),
                                headerDim = bannerHeader.getBoundingClientRect();
                                (hotelsDim.top <= $(this).height() / 2) && setTimeout(function() {
                                        odometer.update(hotelsCount.data('hotels-count'));
                                }, 500);
                                (headerDim.top < -(headerDim.height)) ? header.slideDown('slow') : header.slideUp('slow');
                        });

                });

                var currentItem;
                var k = $('#banner-container').on('jcarousel:createend', function(event, carousel) {
                        var controls = $('#controls');
                        for (var i = 0; i < carousel.items().length; i++) {
                                // controls.append('<i class="glyphicon glyphicon-map-marker"></i>');
                        }
                        controls.children().each(function(i) {
                                $(this).jcarouselControl({
                                        target: i
                                });
                        });
                        $(this).jcarousel('scroll', 0);
                }).on('jcarousel:scroll', function(event, carousel, target) {
                        var current, item = $(this).jcarousel('items').get(target);
                        if (!(typeof currentItem == 'number' && currentItem == target)) {
                                current = $(this).jcarousel('items').get(currentItem);
                                $(item).addClass('fadeIn').show();
                                $(current).addClass('tada');
                                currentItem = target;
                        }
                        // current.css({marginRight: 0, opacity: 1}).animate({
                        // 	marginRight: '100%',
                        // 	opacity: 0
                        // 	},
                        // 	1200, function() {
                        // 	// $(this).hide();
                        // });
                        // $(item).css({marginLeft: '100%', opacity: 0}).show().animate({
                        // 	marginLeft: 0,
                        // 	opacity: 1
                        // 	},
                        // 	1200, function() {
                        // 	/* stuff to do after animation is complete */
                        // });
                }).jcarousel({
                        list: '#carousel-container',
                        items: '.carousel-item',
                }).data('jcarousel');
                // var k = $('#banner-carousel').jcarousel('items');
                // console.log(k);

                

                $(window).scroll(function(e) {
                        // odometer.update(57000);
                });
                // setTimeout(function() {
                //         odometer.update(57000);
                // }, 8000);

        });
})(jQuery);