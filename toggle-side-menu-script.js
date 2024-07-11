// 파일명: toggle-side-menu-script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        overlay.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
    });

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.style.display = 'none';
    });
});
