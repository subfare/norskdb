// Add functionality for dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach((button) => {
    button.addEventListener('click', (event) => {
        const dropdown = event.target.closest('.dropdown');
        dropdown.classList.toggle('open');
    });
});
