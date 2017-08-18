// see below to activate the tooltip including the html rendering
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// see below the actions pause/resume for the carousel
var button = $("#carousel-button");
button.click(function(){
    var spanchild = button.children("span");
    var carousel = $("#mycarousel");
    if (spanchild.hasClass('fa-pause')) {
        carousel.carousel('pause');
        spanchild.removeClass('fa-pause');
        spanchild.addClass('fa-play');
    }
    else if (spanchild.hasClass('fa-play')){
        carousel.carousel('cycle');
        spanchild.removeClass('fa-play');
        spanchild.addClass('fa-pause');
    }
});