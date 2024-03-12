window.addEventListener('load', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        btn.style.width = btn.offsetWidth + 'px';
        content.style.width = btn.offsetWidth + 'px';
    });
});
