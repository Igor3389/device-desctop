$(document).ready(function(){
    var ua = window.navigator.userAgent.toLowerCase(),
        is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if (is_ie) {
        document.createElement( "picture" );

        var svgSprite = $('symbol').parent();
        svgSprite.attr('style', 'display: none;');

        var IsIcnosDown = false;
        var sociaIcons = $('.social__icon');
        sociaIcons.on('mousedown', function () {
            $(this).css({'opacity': 0.1});
            IsIcnosDown = true;
        });
        sociaIcons.on('mouseout', function () {
            $(this).css({'opacity': 0.3});
            if (IsIcnosDown) {
                $(this).children().css('opacity', 1);
                IsIcnosDown = false;
            }

        });
        sociaIcons.on('mousemove', function () {
            if (!IsIcnosDown) {
                $(this).css({'opacity': 1});
            }
        });

        var IsHomeDown = false;
        var authorIcon = $('.main-footer__author-icon');
        authorIcon.on('mousedown', function () {
            $(this).css({'opacity': 0.1});
            IsHomeDown = true;
        });
        authorIcon.on('mouseout', function () {
                $(this).css('opacity', 1);
                IsHomeDown = false;

        });
        authorIcon.on('mousemove', function () {
            if (!IsHomeDown) {
                $(this).css({'opacity': 0.3});
            }
        });

        var worksLink = $('.categories__link');
        var isLinkDown = false;
        worksLink.on('mousedown', function () {
            $(this).children('.categories__icon').css('fill', 'rgba(0, 0, 0, 0.1)');
            $(this).children('.categories__subtitle').css('opacity', 0.1);
        });
        worksLink.on('mouseout', function () {
            $(this).children('.categories__icon').css('fill', 'rgba(0, 0, 0, 1)');
            $(this).children('.categories__subtitle').css('opacity', 1);
        });

        $('.search__field').css('padding', '8px 38px 19px');
        $('.write__field').css('padding', '3px 20px 16px');
    }
});
