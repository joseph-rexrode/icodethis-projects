var box = document.getElementById('notify');
var check = document.getElementById('check');

box.addEventListener('click', toggleCheck);

function toggleCheck() {
    if (check.getAttribute('visibility') == 'hidden') {
        check.setAttribute('visibility', 'visible');
    }
    else {
        check.setAttribute('visibility', 'hidden');
    }
}