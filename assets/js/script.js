const burgerToggle = document.getElementById('burger-toggle');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

// Fonction pour ouvrir/fermer
const toggleMenu = () => {
    burgerToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
};

burgerToggle.addEventListener('click', toggleMenu);

// Fermer le menu si on clique sur le voile (le flou)
overlay.addEventListener('click', toggleMenu);

// Fermer le menu si on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 1. On sélectionne tous les boutons d'ouverture
const openButtons = document.querySelectorAll('.btn-open');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        // On récupère l'ID écrit dans "data-target"
        const modalId = button.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.showModal(); // Ouvre la fenêtre
        }
    });
});

// 2. On gère la fermeture pour toutes les modales
const closeButtons = document.querySelectorAll('.btn-close');

closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // On remonte au parent <dialog> le plus proche pour le fermer
        const modal = e.target.closest('dialog');
        modal.close();
    });
});

// 3. BONUS : Fermer en cliquant à l'extérieur de la fenêtre
document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});