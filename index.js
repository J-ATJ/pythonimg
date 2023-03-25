window.onload = function () {
    
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

    document.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName == 'IMG') {
            evt.preventDefault();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "F12") {
            event.preventDefault();
        }
    });
};