
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
    const selectorOne = document.getElementById("player-selector-one"); // Starts in Player 3
    const selectorTwo = document.getElementById("player-selector-two"); // Starts in Player 1

    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    const playerThree = document.getElementById("player-three");
    const playerFour = document.getElementById("player-four");

    const chamberGrid = document.getElementById("chamber-grid");

    const chambers = [playerOne, playerTwo, playerThree, playerFour];

    choosePlayersBtn.addEventListener("click", function () {
        let indexOne = 0; // Selector One starts on Player 1
        let indexTwo = 2; // Selector Two starts on Player 3

        const cycleSpeed = 300;
        const totalCycles = 12;
        let hops = 0;

        const intervalId = setInterval(() => {
            const currentChamberOne = chambers[indexOne];
            const currentChamberTwo = chambers[indexTwo];

            const gridRect = chamberGrid.getBoundingClientRect();
            const rectOne = currentChamberOne.getBoundingClientRect();
            const rectTwo = currentChamberTwo.getBoundingClientRect();

            selectorOne.style.left = `${Math.round(rectOne.left - gridRect.left)}px`;
            selectorOne.style.top = `${Math.round(rectOne.top - gridRect.top)}px`;

            selectorTwo.style.left = `${Math.round(rectTwo.left - gridRect.left)}px`;
            selectorTwo.style.top = `${Math.round(rectTwo.top - gridRect.top)}px`;

            indexOne = (indexOne + 1) % chambers.length;
            indexTwo = (indexTwo + 1) % chambers.length;
            hops++;

            if (hops >= totalCycles) {
                clearInterval(intervalId);

                // Final positions:
                // Selector One lands on Player 1
                // Selector Two lands on Player 2
                const finalOne = playerOne.getBoundingClientRect();
                const finalTwo = playerTwo.getBoundingClientRect();

                selectorOne.style.left = `${finalOne.left - gridRect.left}px`;
                selectorOne.style.top = `${finalOne.top - gridRect.top}px`;

                selectorTwo.style.left = `${finalTwo.left - gridRect.left}px`;
                selectorTwo.style.top = `${finalTwo.top - gridRect.top}px`;
            }
        }, cycleSpeed);
    });
}

selectPlayers();
