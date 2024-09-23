$(document).ready(function() {
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {
                window.location.hash = hash;
            });
        }
    });

    $('#show-more').on('click', function() {
        var moreProjects = $('#more-projects');
        if (moreProjects.css('display') === 'none') {
            moreProjects.css('display', 'block');
            $(this).text('Show Less...');
        } else {
            moreProjects.css('display', 'none');
            $(this).text('Show More...');
        }
    });
});