
function scrollToLegendSection() {

    const scrollBtn = document.getElementById("start-btn");
    const legendSection = document.querySelector(".legend");

    scrollBtn.addEventListener("click", function () {
        legendSection.scrollIntoView({ behavior: "smooth"});
    });
}


scrollToLegendSection();

// Update method to select players
function selectPlayers() {
    const choosePlayersBtn = document.getElementById("grid-one-btn");
    const selector = document.getElementById("player-selector");

    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    const playerThree = document.getElementById("player-three");
    const playerFour = document.getElementById("player-four");

    const chamberGrid = document.getElementById("chamber-grid");

    const chambers = [playerOne, playerTwo, playerThree, playerFour];

    choosePlayersBtn.addEventListener("click", function () {
        let index = 0;

        const intervalId = setInterval(() => {
            const currentChamber = chambers[index];
            const chamberRect = currentChamber.getBoundingClientRect();
            const gridRect = chamberGrid.getBoundingClientRect();

            const left = chamberRect.left - gridRect.left;
            const top = chamberRect.top - gridRect.top;

            selector.style.left = left + "px";
            selector.style.top = top + "px";

            index++;
            if (index >= chambers.length) {
                index = 0;
            }
        }, 500);
    });
}

selectPlayers();
