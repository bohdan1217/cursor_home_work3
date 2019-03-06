$(document).ready(function () {

    $('.main-carousel').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'ease',
        speed: 600
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        $('[data-slide-nav]').removeClass('active');
        $('[data-slide-nav="'+ currentSlide +'"]').addClass('active');

        $('.bg').removeClass('active');

        switch (currentSlide) {
            case 0:
                $('.bg.__iron-man').addClass('active');
                break;
            case 1:
                $('.bg.__captain').addClass('active');
                break;
            case 2:
                $('.bg.__spider-man').addClass('active');
                break;
        }

        $('.current-slide').html('0' + parseInt(currentSlide + 1));

    });

    $('.tab-nav').on('click', function (e) {

        e.preventDefault();

        var slideId = $(this).attr('data-slide-nav');

        $('.main-carousel').slick('slickGoTo', slideId);

    });

    console.log('loaded');

});