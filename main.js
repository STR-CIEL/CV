function openNav() {
    document.getElementById('mobileNav').classList.add('open');
    document.getElementById('closeNav').style.display = 'block';
    document.getElementById('openNav').style.display = 'none';
    document.addEventListener('mousedown', handleOutsideClick);
    }
function closeNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('closeNav').style.display = 'none';
    document.getElementById('openNav').style.display = 'block';
    document.removeEventListener('mousedown', handleOutsideClick);
}
function handleOutsideClick(event) {
    const nav = document.getElementById('mobileNav');
    const openBtn = document.getElementById('openNav');
    if (!nav.contains(event.target) && event.target !== openBtn) {
        closeNav();
    }
}
function openLightbox(element) {
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    
    lightbox.classList.add('active');
    lightboxImg.src = element.src;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}