const themeSelector = document.getElementById('themeSelector');
const xtheme = document.getElementById('xtheme')
const savedTheme = localStorage.getItem('userTheme')

if (savedTheme) {
    themeSelector.value = savedTheme;
}

themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    
    xtheme.setAttribute('href', selectedTheme);
    localStorage.setItem('userTheme', selectedTheme);
});