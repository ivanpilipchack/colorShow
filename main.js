function main() {
    var colorClass = '';
    $('.select-color').on('click', function() {
        var selectedColor = $(this).attr('class');
        switch (selectedColor) {
            case 'select-color cyan not-selected':
                // Set color on box div
                colorClass = 'magenta';
                break;
            case 'select-color yellow not-selected':
                // Set color on box div
                colorClass = 'yellow';
                break;
            case 'select-color magenta not-selected':
                // Set color on box div
                colorClass = 'cyan';
                break;
        }
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');


    });
    $('.box').on('click', function() {
        $(this).toggleClass(colorClass);
    });
    $('.toggle-blink').on('click', function() {
        if (colorClass) {
            $('this').toggleClass('opacity');
            setInterval(function() {
                $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
            }, 350);
        }
    })
}
$(document).ready(main);