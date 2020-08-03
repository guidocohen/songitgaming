// Initialize WOW & Materialize Carousel, MaterialBox.
$(document).ready(function() {
    $('.carousel').carousel();
    $('.parallax').parallax();
    new WOW().init();
});

$('#imageView').on('show.bs.modal', function(event) {
    var b = $(event.relatedTarget); // Button that triggered the modal
    $("#idImagenModal").attr("src", b.children().attr('src'));
    $("#idTituloModal").text(b.children().attr('alt'));
})

// GO TO
$('#gototop').click(function(e) {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});

$('.nav-item').click(function(e) {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 80
    }, 600);
});

// Twitch scripts
new Twitch.Embed("twitch-embed-1", {
    width: 540,
    height: 400,
    autoplay: false,
    video: "667068324"
});

new Twitch.Embed("twitch-embed-2", {
    width: 540,
    height: 400,
    autoplay: false,
    video: "684623972"
});

new Twitch.Embed("twitch-embed-3", {
    width: 540,
    height: 400,
    autoplay: false,
    video: "689872826"
});

new Twitch.Embed("twitch-embed-4", {
    width: 540,
    height: 400,
    autoplay: false,
    video: "683899955"
});