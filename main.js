window.onload = function () {
    const elem = document.getElementById("el");
    const elem1 = document.getElementById("el1");
    elem.addEventListener('click', function () {
        document.body.style.backgroundColor = 'LightPink';
    });
    elem1.addEventListener('click', function () {
        window.location = "https://www.youtube.com/watch?v=l5YZpGmKxbo"
    });
};

