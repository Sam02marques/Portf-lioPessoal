// script.js
const themeToggle = document.getElementById('theme');
const icon = document.getElementById('icon');
const body = document.body;

// Alterna entre os temas
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  const isDarkMode = body.classList.contains('dark-mode');

  // Atualiza o ícone e o texto do botão
  if (isDarkMode) {
    icon.textContent = '💡';
    themeToggle.querySelector('#text').textContent = 'Modo Claro';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '🌙';
    themeToggle.querySelector('#text').textContent = 'Modo Escuro';
    localStorage.setItem('theme', 'light');
  }
});