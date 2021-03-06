const themeScheme = document.getElementsByClassName('theme-swatch');

setTheme();

// Creates Event Listeners for Theme Swatches and Changes Styling
function setTheme() {
    setLocalTheme();
    //Set up Event Listener
    for (let i=0; i < themeScheme.length; i++) {
    themeScheme[i].addEventListener('click', () => {
        let theme = themeScheme[i].dataset.clicked;
        applyTheme(theme);
        });
    }
}

// Set up local storage variable to remember theme setting
function setLocalTheme() {
    let localTheme = localStorage.getItem('theme');
    console.log(localTheme);
    if (localTheme) {
        applyTheme(localTheme);
    }
    else {
        localTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
}

function applyTheme(theme) {
    let styleSheet = document.querySelector('#theme');

    switch (theme) {
        case 'dark':
            styleSheet.href = './styling/default.css';
            break;
        case 'blue':
            styleSheet.href = './styling/bluetheme.css';
            break;
        case 'green':
            styleSheet.href = './styling/greentheme.css';
            break;
        case 'creme':
            styleSheet.href = './styling/cremetheme.css';
            break;
    }
    //Update local storage variable
    localStorage.setItem('theme', theme);
}