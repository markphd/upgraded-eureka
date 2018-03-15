(function($) {
    $.fn.lazyLoader = function(options) {
        var images = this;
        var print = new $.Deferred();
        
        var settings = $.extend({
            loadingImage : '//www-static.cdn-one.com/images/onecom/lazy-loader-1.0.gif'
        }, options);

        function imageIsVisible(elem) {
            var $window = $(window);
            var $elem = $(elem);
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function insertLoadedImage(dataSrc, loadElement) {
            var img = $('<img />');
            
            img.attr('class', loadElement.attr('class'));

            img.hide().attr('src', dataSrc).insertAfter(loadElement).on('load', function() {
                loadElement.remove();
                $(this).fadeIn(function() {
                    if( ! images.hasClass('lazyloader--not-loaded')) {
                        print.resolve(true);
                    }
                });  
            });
        }

        function iterateImages(forceLoad) {
            images.each(function(index, element) {
                var iDeferred = new $.Deferred();

                var $element = $(element);
                if( (imageIsVisible(element) && $element.hasClass('lazyloader--not-loaded')) || forceLoad == true) {
                    $element.trigger('enable.lazyLoader');
                }
            });           
        }

        $('.print_icon').on('click', function(e) {
            e.preventDefault();

            images.trigger('enable.lazyLoader');

            $.when( print ).done(function() {
                window.print();
            });
        });

        $(document).bind('keydown', function(e) {
            if(e.ctrlKey && e.keyCode == 80) {
                e.preventDefault();

                images.trigger('enable.lazyLoader');

                $.when( print ).done(function() {               
                     window.print();    
                }); 
            }
        });

        $(window).on('load.lazyLoader scroll.lazyLoader', iterateImages); 

        return this.each(function() {
            var $this = $(this);
            if(!BO.ie6 && !BO.ie7 && !BO.ie8) {
                
                if ($this.is('[src]')) {
                    $this.bind('disable.lazyLoader', function() {
                        $this.attr('data-lazy-src', $this.attr('src') ).removeAttr('src').attr( 'src', settings.loadingImage).addClass('lazyloader--not-loaded');
                    });
                }

                $this.bind('enable.lazyLoader', function() {
                    var dataSrc = $this.attr('data-lazy-src');

                    $this.removeClass('lazyloader--not-loaded');

                    if(BO.isRetina) {
                        var dataSrc2X = [dataSrc.slice(0, dataSrc.lastIndexOf('.')), "@2x", dataSrc.slice(dataSrc.lastIndexOf('.'))].join('');
                        $.ajax({
                            type : 'HEAD',
                            url : dataSrc2X,
                            success : function(data) {
                                insertLoadedImage(dataSrc2X, $this);
                            },
                            error : function() {
                                insertLoadedImage(dataSrc, $this);
                            }
                        });
                    } else {
                        insertLoadedImage(dataSrc, $this);
                    }    
                });

                $this.trigger('disable.lazyLoader');
            } 
        });
    };
}(jQuery));