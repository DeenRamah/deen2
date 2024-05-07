const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('change', toggleMode);

function toggleMode() {
const body = document.body;
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8, h9');
const paragraphs = document.querySelectorAll('p');
const divs = document.querySelectorAll('div');

if (this.checked) {
body.classList.add('dark-theme', 'dark-mode');
navbar.classList.add('dark-mode');
sections.forEach(section => section.classList.add('dark-mode'));
headings.forEach(heading => heading.classList.add('dark-mode'));
paragraphs.forEach(paragraph => paragraph.classList.add('dark-mode'));
divs.forEach(div => div.classList.add('dark-mode'));
} else {
body.classList.remove('dark-mode', 'dark-theme');
navbar.classList.remove('dark-mode');
sections.forEach(section => section.classList.remove('dark-mode'));
headings.forEach(heading => heading.classList.remove('dark-mode'));
paragraphs.forEach(paragraph => paragraph.classList.remove('dark-mode'));
divs.forEach(div => div.classList.remove('dark-mode'));
}
}
