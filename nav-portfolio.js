const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav_text')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.backgroundImage = '';
                link.style.webkitBackgroundClip = '';
                link.style.webkitTextFillColor = '';
            })
            const activeLink = document.querySelector(`.nav_text[href="#${entry.target.id}"]`)
            if (activeLink) {
                activeLink.style.backgroundImage = 'linear-gradient(to right, #4A0E24, #C4A882, #722040)';;
                activeLink.style.webkitBackgroundClip = 'text';
                activeLink.style.webkitTextFillColor = 'transparent';
            }
        }
    })
}, { threshold: 0.8 })

sections.forEach(section => observer.observe(section))