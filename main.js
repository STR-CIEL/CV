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
    // 1. Récupérer la lightbox et l'image à l'intérieur
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // 2. Afficher la lightbox
    lightbox.classList.add('active');

    // 3. Mettre la source de l'image cliquée dans l'image de la lightbox
    lightboxImg.src = element.src;
}

function closeLightbox() {
    // Cacher la lightbox
    document.getElementById('lightbox').classList.remove('active');
}