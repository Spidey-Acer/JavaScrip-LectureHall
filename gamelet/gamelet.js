const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowRight') {
        position += 10;
        ball.style.left = position + 'px';
    }
    if (e.code === 'ArrowLeft') {
        position -= 10;
        ball.style.left = position + 'px';
    }
    if (position < 0) {
        position = 0;
    }
    refresh();
}
function refresh() {
    if (position > 250) {
        ball.style.backgroundColor = 'red';
    } else {
        ball.style.backgroundColor = 'green';
    }
}