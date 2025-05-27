
function scrollToLegendSection() {

    const scrollBtn = document.getElementById("start-btn");
    const legendSection = document.querySelector(".legend");

    scrollBtn.addEventListener("click", function () {
        legendSection.scrollIntoView({ behavior: "smooth"});
    });
}
function selectPlayers() {
    const choosePlayersBtn = document.getElementById("grid-one-btn");
    const selectorOne = document.getElementById("player-selector-one");
    const selectorTwo = document.getElementById("player-selector-two");

    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    const playerThree = document.getElementById("player-three");
    const playerFour = document.getElementById("player-four");

    const chamberGrid = document.getElementById("chamber-grid");

    choosePlayersBtn.addEventListener("click", function () {
        // Reveal the chamber grid and players
        chamberGrid.style.display = "grid";
        playerOne.style.opacity = "1";
        playerTwo.style.opacity = "1";
        playerThree.style.opacity = "1";
        playerFour.style.opacity = "1";

        // Delay before showing and positioning selectors
        setTimeout(() => {
            selectorOne.style.display = "block";
            selectorTwo.style.display = "block";

            const gridRect = chamberGrid.getBoundingClientRect();
            const rectOne = playerOne.getBoundingClientRect();
            const rectTwo = playerTwo.getBoundingClientRect();

            selectorOne.style.left = `${Math.round(rectOne.left - gridRect.left)}px`;
            selectorOne.style.top = `${Math.round(rectOne.top - gridRect.top)}px`;

            selectorTwo.style.left = `${Math.round(rectTwo.left - gridRect.left)}px`;
            selectorTwo.style.top = `${Math.round(rectTwo.top - gridRect.top)}px`;
        }, 500); // Small delay for natural feel
    });
}

selectPlayers();
