(function($) {

  if (!$.Fix) {
    $.Fix = {};
  }

  $.Fix = function(el, options) {
    var base = this;
    var $el, $fix;

    function init() {
      // console.log('init');

      base.options = $.extend({}, $.Fix.defaultOptions, options);

      base.$el  = $(el);
      base.$fix = base.$el.clone();
      base.$fix.addClass(base.options.class).insertAfter(base.$el);

      $el  = base.$el;
      $fix = base.$fix;

      $(window).resize(resize);
      $(window).scroll(scroll);

      $(window).trigger('scroll');
      $(window).trigger('resize');
    }

    function resize() {
      // console.log('resize');

      $fix.each(function(index) {
        $(this).css("width", $el.eq(index).outerWidth() + "px");
      });
    }

    function scroll() {
      // console.log('scroll');

      var $container = $("body ."  + base.options.container),
      $content = $("body ."  + base.options.content),
      _class = base.options.class,
      _top = base.options.top,
      scrollTop = $(this).scrollTop(),
      elTop = $el.offset().top,
      elBottom = (elTop + ($content.height() - $el.height()));

      $container.css({ 'height' : $content.height() });

      if ($el.outerWidth() !== $fix.outerWidth()) {
        $(window).trigger('resize');
      }

      if (scrollTop < elTop || scrollTop > elBottom) {

        if (scrollTop > elBottom) {
          $fix.removeClass(_class).addClass(_class + '-end');
          $fix.css("top", "auto");
        } else {
          $fix.hide();
        }

      } else if (scrollTop >= elTop && scrollTop <= elBottom) {
        $fix.removeClass(_class + '-end').addClass(_class);
        $fix.css("top", _top);
        $fix.show();
      }
    }

    init();
  };

  $.Fix.defaultOptions = {
    container : 'fix-container',
    content   : 'fix-content',
    class     : 'fix'
  };

  $.fn.fix = function(options) {
    if (!$.data(this, 'fix')) {
      $.data(this, 'fix', new $.Fix(this, options));
    }
  };

})(jQuery);
