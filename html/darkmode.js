// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light';
}

// Set theme on page load
document.addEventListener('DOMContentLoaded', () => {
  rootElement.setAttribute('data-theme', getPreferredTheme());
});

// Handle toggle button click
themeToggle.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});