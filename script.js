// Add click event to all dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', (event) => {
        const menu = event.target.nextElementSibling;
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

// Hide dropdowns when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});
