$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = $('.toc>ul>li>a');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this).parent(),
            $next = $this.find('ul');

        $next.slideToggle();
        $this.toggleClass('open');
        if (!e.data.multiple) {
            $el.find('>li>ul').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.toc>ul'), false);
});
$(function(){  
  $('a').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top-20;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        500);
        showMe(this);
        return false;
      }
    }
  });
});
var int = 0;
var obj = null;
function showMe(thisObj){
    var index = 0;
    if(int != 0){
        int = self.clearInterval(int);
        obj.style.color = "#000";
        int = 0;
    }
    obj = document.getElementById(thisObj.href.split("#")[1]);
    int = setInterval(function (){
        if(index >= 80){
            int = self.clearInterval(int);
            obj.style.color = "#000";
            int = 0;
        }
        var color = "#FFFFFF|#E8E8E8|#D1D1D1|#B9B9B9|#A2A2A2|#8B8B8B|#747474|#5D5D5D|#464646|#2E2E2E|#171717|#000000|#171717|#2E2E2E|#464646|#5D5D5D|#747474|#8B8B8B|#A2A2A2|#B9B9B9|#D1D1D1|#E8E8E8|#FFFFFF";
        color = color.split("|");
        obj.style.color = color[index%23]; 
        index++;       
        return false;
    }, 60);
}