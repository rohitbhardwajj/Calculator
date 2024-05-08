document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear')) {
                clearScreen();
            } else if (button.classList.contains('equal')) {
                calculate();
            } else {
                appendValue(button.textContent);
            }
        });
    });

    function appendValue(value) {
        screen.value += value;
    }

    function clearScreen() {
        screen.value = '';
    }

    function calculate() {
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
        }
    }
});
