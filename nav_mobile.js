    const navmobile = document.getElementById('nav-mobile');
    const navliens = document.getElementById('nav-liens');

    // Ouvre le menu choix mobile
    navmobile.addEventListener('click', () => {
        navliens.classList.toggle('open');
    })

    // Ferme le menu quand on clique sur un lien
    navliens.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navliens.classList.remove('open');
        })
    })