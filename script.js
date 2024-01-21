document.addEventListener('DOMContentLoaded', function () {
    const pointer = document.getElementById('pointer');
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    document.addEventListener('keydown', function (event) {
        const step = 10; // You can adjust the step size
        switch (event.key) {
            case 'ArrowUp':
                y -= step;
                break;
            case 'ArrowDown':
                y += step;
                break;
            case 'ArrowLeft':
                x -= step;
                break;
            case 'ArrowRight':
                x += step;
                break;
        }

        createTrailElement(x, y);
        updatePointerPosition();
    });

    function createTrailElement(x, y) {
        const trailElement = document.createElement('div');
        trailElement.className = 'trail';
        trailElement.style.left = `${x}px`;
        trailElement.style.top = `${y}px`;
        document.body.appendChild(trailElement);

        // Optional: Remove old trail elements to prevent the DOM from growing indefinitely
        const trailElements = document.querySelectorAll('.trail');
        if (trailElements.length > 10) {
            document.body.removeChild(trailElements[0]);
        }
    }

    function updatePointerPosition() {
        pointer.style.left = `${x}px`;
        pointer.style.top = `${y}px`;
    }
});