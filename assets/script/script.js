const checkBox = document.querySelector('#check');
const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const navList = document.querySelector('nav ul');

checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        navList.style.height = '17.7rem';
        navList.style.transition = '0.3s ease';
        navList.style.overflow = 'hidden';
    } else {
        navList.style.height = '0';
    }
});

function updateNavHeight() {
    if (window.innerHeight > 868) {
        navList.style.height = '';
    } else {
        navList.style.height = checkBox.checked ? '17.7rem' : '0';
    }
}

checkBox.addEventListener('change', () => {
    if (window.innerWidth <= 868) {
        navList.style.height = checkBox.checked ? '17.7rem' : '0';
    }
});

window.addEventListener('resize', updateNavHeight);
updateNavHeight()