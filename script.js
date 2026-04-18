// Change website theme 
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

// Text animation in terminal
const text = `const Person {
    "name": "Chamal Induwara",
    "age": 21,
    "role": "CS Undergrad",
    "focus": ["Software", "Code"]
}`;
let i = 0;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeCode() {
    while (true) { 
        for (let i = 0; i < text.length; i++) {
            document.querySelector('.text-appear').innerHTML += text.charAt(i);
            await sleep(40); 
        }

        await sleep(2000);

        document.querySelector('.text-appear').innerHTML = '';
    }
}

typeCode()