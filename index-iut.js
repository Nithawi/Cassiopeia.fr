const buttonts = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const descriptions = document.querySelectorAll(".description");

buttonts.forEach((button) => {
    button.addEventListener("click", (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1;
        const slideActuel = document.querySelector(".active");
        const descriptionActuel = document.querySelector(".description.active");

        newIndex = calcNextSlide + [...slides].indexOf(slideActuel);
        
        
        if (newIndex < 0) 
            newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) 
            newIndex = 0;

        slides [newIndex].classList.add("active");
        slideActuel.classList.remove("active");
        descriptions [newIndex].classList.add("active");
        descriptionActuel.classList.remove("active");
    });
});
    
    


