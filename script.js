
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

    console.log("Button:", choosePlayersBtn);

    choosePlayersBtn.addEventListener("click", function () {
            console.log("SELECTOR BUTTON CLICKED");
    });
    
}
selectPlayers();