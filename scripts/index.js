
let errorScreen = document.getElementById('errorScreen');
let splash = document.getElementById('splash');
let mainpage = document.getElementById('mainpage');

function handleScreenWidthChange() {
    let innerWidth = window.innerWidth;
    if (innerWidth > 500) {
        errorScreen.style.display = 'block';
        splash.style.display = 'none';
        mainpage.style.display = 'none';
    } else {
        errorScreen.style.display = "none";
        mainpage.style.display = 'none';
        splash.style.display = 'block';
        setTimeout(() => {
            splash.style.display = 'none';
            mainpage.style.display = 'block';
        }, 3000);
    }
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

function toSignIn() {
    window.location.href = "./Login.html"
}