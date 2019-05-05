;function Popup(options) {
    that = this;
    that.popup = $(options.popup);
    that.overlay = $(options.overlay);
    that.closeModal = $(options.closeModal);



    this.open = function (innerHTML) {
        that.overlay.addClass('modal-overlay-visually');
        that.content = $(innerHTML.children()[0]).attr('class');
        that.popup.append(innerHTML.html());
    };

    this.close = function () {
        that.overlay.removeClass('modal-overlay-visually');
        $('.' + that.popup.attr('class') + ' .' + that.content).remove();
    };

    this.closeModal.on('click', this.close);

    this.popup.on('click', function (event) {
        event.stopPropagation();
    })

}
