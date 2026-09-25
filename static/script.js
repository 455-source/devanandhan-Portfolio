/* PROJECT CAROUSEL*/

const cards = document.querySelectorAll(".project-card");

const nextButton = document.getElementById("nextProject");
const prevButton = document.getElementById("prevProject");

const currentProject =
    document.getElementById("currentProject");

let activeIndex = 0;


/* UPDATE CAROUSEL */

function updateCarousel() {

    cards.forEach((card, index) => {

        card.className = "project-card";

        let position =
            (index - activeIndex + cards.length)
            % cards.length;

        card.classList.add(
            `position-${position}`
        );

    });

    currentProject.textContent =
        String(activeIndex + 1).padStart(2, "0");
}


/* NEXT  */

function nextProject() {

    activeIndex =
        (activeIndex + 1) % cards.length;

    updateCarousel();

}


/* PREVIOUS */

function previousProject() {

    activeIndex =
        (activeIndex - 1 + cards.length)
        % cards.length;

    updateCarousel();

}


/*BUTTONS  */

nextButton.addEventListener(
    "click",
    nextProject
);

prevButton.addEventListener(
    "click",
    previousProject
);


/*CLICK SIDE CARDS */

cards.forEach((card, index) => {

    card.addEventListener(
        "click",
        () => {

            activeIndex = index;

            updateCarousel();

        }
    );

});


/* AUTO ROTATION */

let autoRotate =
    setInterval(nextProject, 5000);


/* Stop automatic movement while interacting */

const carousel =
    document.querySelector(".project-carousel");

carousel.addEventListener(
    "mouseenter",
    () => {
        clearInterval(autoRotate);
    }
);


carousel.addEventListener(
    "mouseleave",
    () => {

        autoRotate =
            setInterval(nextProject, 5000);

    }
);


/*INITIAL STATE */

updateCarousel();