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

    let startDate = new Date("2023-08-15");
    let currentDate = new Date();
    let timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    let numberOfCoffees = diffDays * 3;
    document.getElementById("coffee-number").innerText = numberOfCoffees;
});