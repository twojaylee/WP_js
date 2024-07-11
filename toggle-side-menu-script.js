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
    function toggleMenu(event) {
        event.preventDefault(); // 기본 이벤트 방지
        sideMenu.classList.toggle('open');
        overlay.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
    }
    function closeMenu(event) {
        event.preventDefault(); // 기본 이벤트 방지
        sideMenu.classList.remove('open');
        overlay.style.display = 'none';
    }

    // 클릭과 터치 이벤트 모두 처리
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('touchend', toggleMenu);

    overlay.addEventListener('click', closeMenu);
    overlay.addEventListener('touchend', closeMenu);
});