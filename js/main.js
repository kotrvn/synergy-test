$(document).ready(function() {
  $("a.promo__play").fancybox();

  $("a.find-out__btn").fancybox({
    afterClose: function() {
        $("#ctaForm").removeAttr('style');
    }
  });
  $("a.about__btn").fancybox({
    afterClose: function() {
        $("#ctaForm").removeAttr('style');
    }
  });

});
