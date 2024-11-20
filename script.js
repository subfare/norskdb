// Add functionality for dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach((button) => {
    button.addEventListener('click', (event) => {
        const dropdown = event.target.closest('.dropdown');
        dropdown.classList.toggle('open');

        // Close other open dropdowns
        document.querySelectorAll('.dropdown').forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('open');
            }
        });
    });
});

// Close dropdowns when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach((dropdown) => {
            dropdown.classList.remove('open');
        });
    }
});
