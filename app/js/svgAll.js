;(function(window, document) {
    'use strict';
    var ua = window.navigator.userAgent.toLowerCase(),
        is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if (is_ie) {

        var useElement = document.querySelectorAll('use'),
            useAttr;

        for (var i = 0; i < useElement.length; i++) {
            useAttr = useElement[i].getAttribute('xlink:href');
            useAttr = '#' + useAttr.split('#')[1];
            useElement[i].setAttribute('xlink:href', useAttr)
        }
        var file = 'img/svg/symbol/sprite.svg', // путь к файлу спрайта на сервере
            revision = 5;            // версия спрайта
        if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
        var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
            request,
            data,
            insertIT = function() {
                document.body.insertAdjacentHTML('afterbegin', data);
            },
            insert = function() {
                if (document.body) insertIT();
                else document.addEventListener('DOMContentLoaded', insertIT);
            };

        if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
            data = localStorage.getItem('inlineSVGdata');
            if (data) {
                insert();
                return true;
            }
        }
        try {
            request = new XMLHttpRequest();
            request.open('GET', file, true);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    data = request.responseText;
                    insert();
                    if (isLocalStorage) {
                        localStorage.setItem('inlineSVGdata', data);
                        localStorage.setItem('inlineSVGrev', revision);
                    }
                }
            }
            request.send();
        } catch (e) {}
    }
}(window, document));

window.onload = function () {

};