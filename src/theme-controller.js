const checkbox = document.getElementById('theme-controller');

// Save checkbox state on change
checkbox.addEventListener('change', (event) => {
    localStorage.setItem('theme-controller_state', event.target.checked);
});

// Restore checkbox state on page load
const savedState = localStorage.getItem('theme-controller_state');
if (savedState === 'true') {
    checkbox.checked = true;
}
