
function scrollToLegendSection() {

    const scrollBtn = document.getElementById("start-btn");
    const legendSection = document.querySelector(".legend");

    scrollBtn.addEventListener("click", function () {
        legendSection.scrollIntoView({ behavior: "smooth"});
    });
}

scrollToLegendSection();

function selectPlayers() {
    const choosePlayersBtn = document.getElementById("grid-one-btn");
    const selectorOne = document.getElementById("player-selector-one");
    const selectorTwo = document.getElementById("player-selector-two");

    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    const chamberGrid = document.getElementById("chamber-grid");
    const gridExplanation = document.getElementById("grid-explanation");

    choosePlayersBtn.addEventListener("click", function () {

        chamberGrid.style.display = "grid";
        selectorOne.style.display = "block";
        selectorTwo.style.display = "block";

        requestAnimationFrame(() => {
            const gridRect = chamberGrid.getBoundingClientRect();
            const rectOne = playerOne.getBoundingClientRect();
            const rectTwo = playerTwo.getBoundingClientRect();

            selectorOne.style.left = `${Math.round(rectOne.left - gridRect.left)}px`;
            selectorOne.style.top = `${Math.round(rectOne.top - gridRect.top)}px`;

            selectorTwo.style.left = `${Math.round(rectTwo.left - gridRect.left)}px`;
            selectorTwo.style.top = `${Math.round(rectTwo.top - gridRect.top)}px`;

            gridExplanation.style.display = "block";

            gridExplanation.scrollIntoView({ behavior: "smooth" });
        });
    });
}

selectPlayers();
