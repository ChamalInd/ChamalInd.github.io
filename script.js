function changeTheme() {
    const icon = document.getElementById('icon');
    const theme = document.getElementById('theme-link');

    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        theme.setAttribute('href', 'dark.css');
    } else {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        theme.setAttribute('href', 'light.css');
    }
}