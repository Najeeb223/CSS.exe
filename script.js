
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
    const selector = document.getElementById("player-selector-one");

    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    const playerThree = document.getElementById("player-three");
    const playerFour = document.getElementById("player-four");

    const chamberGrid = document.getElementById("chamber-grid");

    const chambers = [playerOne, playerTwo, playerThree, playerFour];

    choosePlayersBtn.addEventListener("click", function () {
        let index = 0;

        const cycleSpeed = 300; // ms between hops
        const totalCycles = 12; // how many total hops
        let hops = 0;

        const intervalId = setInterval(() => {
            const currentChamber = chambers[index];
            const chamberRect = currentChamber.getBoundingClientRect();
            const gridRect = chamberGrid.getBoundingClientRect();

            const left = chamberRect.left - gridRect.left;
            const top = chamberRect.top - gridRect.top;

            selector.style.left = `${Math.round(left)}px`;
            selector.style.top = `${Math.round(top)}px`;

            index = (index + 1) % chambers.length;
            hops++;

            if (hops >= totalCycles) {
                clearInterval(intervalId);

                // Land on Player 1
                const finalRect = playerOne.getBoundingClientRect();
                const finalLeft = finalRect.left - gridRect.left;
                const finalTop = finalRect.top - gridRect.top;

                selector.style.left = `${finalLeft}px`;
                selector.style.top = `${finalTop}px`;
            }
        }, cycleSpeed);
    });
}
//
selectPlayers();
