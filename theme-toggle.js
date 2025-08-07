// Theme Toggle Feature Implementation
// This code handles switching between light and dark themes

// Theme toggle logic for all pages

const body = document.body;
const toggleContainer = document.getElementById('theme-toggle-container');
const toggleIcon = document.getElementById('theme-toggle-icon');

// Set theme based on saved preference or system preference
function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    toggleIcon.textContent = '🌙';
  } else {
    body.classList.remove('dark');
    toggleIcon.textContent = '🌞';
  }
}

// Get saved theme or system preference
function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Toggle theme and save preference
function toggleTheme() {
  const isDark = body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getPreferredTheme());
  if (toggleContainer) {
    toggleContainer.addEventListener('click', toggleTheme);
  }
});

// Alternative approach using arrow functions (more modern):
/*
const themeToggle = {
    getStored: () => localStorage.getItem('theme') || 'light',
    apply: (theme) => document.body.className = theme + '-theme',
    save: (theme) => localStorage.setItem('theme', theme),
    toggle() {
        const current = this.getStored();
        const newTheme = current === 'light' ? 'dark' : 'light';
        this.apply(newTheme);
        this.save(newTheme);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    themeToggle.apply(themeToggle.getStored());
    document.getElementById('theme-toggle-container')?.addEventListener('click', () => themeToggle.toggle());
});
*/
