const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', function() {
  root.classList.toggle('light-theme');
  root.classList.toggle('dark-theme');
  
  // Save user preference to localStorage
  if (root.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check user's preferred theme from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark-theme');
  } else {
    root.classList.add('light-theme');
  }
});
