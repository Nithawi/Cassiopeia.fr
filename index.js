

const etoiles = [
    { svg: ".segin", description: ".description_segin" },
    { svg: ".ruchbah", description: ".description_ruchbah" },
    { svg: ".navi", description: ".description_navi" },
    { svg: ".schedar", description: ".description_schedar" },
    { svg: ".caph", description: ".description_caph" },
    { svg: ".pacman", description: ".description_pacman" },
]

const conteneur = document.querySelector(".constelation");
const svgElement = conteneur.querySelector("svg");

function cacherDescriptions() {
    etoiles.forEach(({ description }) => {
        document.querySelectorAll(description).forEach((desc) => {
            desc.style.opacity = "0";
            desc.style.transform = "translateX(30px)";
            desc.style.display = "none";
        })
    })
    svgElement.style.transform = "translateX(0px)"

}

etoiles.forEach(({ svg, description }) => {
    const elements = document.querySelectorAll(svg);
    const descriptions = document.querySelectorAll(description);

    elements.forEach((element, index) => {
        element.addEventListener("click", () => {
            const descriptionActuelle = descriptions[index];
            const estVisible = descriptionActuelle.style.display === "block";

            cacherDescriptions();

            if (!estVisible) {
                descriptionActuelle.style.display = "block";

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        descriptionActuelle.style.opacity = "1";
                        descriptionActuelle.style.transform = "translateX(0px)";
                    });
                });
                svgElement.style.transform = "translateX(-75px)";
            
            }
        })
    })
})