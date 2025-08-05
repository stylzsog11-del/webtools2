// Theme Toggle Feature Implementation
// This code handles switching between light and dark themes

// Function to get theme from localStorage or default to 'light'
function getStoredTheme() {
    return localStorage.getItem('theme') || 'light';
}

// Function to apply theme to the body element
function applyTheme(theme) {
    document.body.className = theme + '-theme';
}

// Function to save theme to localStorage
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = getStoredTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply the new theme
    applyTheme(newTheme);
    
    // Save the new theme to localStorage
    saveTheme(newTheme);
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the stored theme preference
    const storedTheme = getStoredTheme();
    
    // Apply the theme to the body
    applyTheme(storedTheme);
    
    // Add click event listener to theme toggle button
    const themeToggleContainer = document.getElementById('theme-toggle-container');
    
    if (themeToggleContainer) {
        themeToggleContainer.addEventListener('click', toggleTheme);
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
