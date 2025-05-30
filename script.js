
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


function specialMoves() {
    const buttons = document.querySelectorAll('.animate-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const switchBlock = button.nextElementSibling;
        if (!switchBlock) return;
  
        const icon = switchBlock.querySelector('.animation-icons');
        if (!icon) return;
  
        const animId = icon.dataset.animId;
        if (!animId) return;
  
        const infoBlock = switchBlock.querySelector('.grid-info');
        if (!infoBlock) return;
  
        // Prevent multiple clicks while animation/info is showing
        if (icon.classList.contains('animating')) return;
  
        // Start animation
        icon.id = animId;
        icon.classList.add('animating');
        icon.style.opacity = '1';       // Make sure icon is visible
        infoBlock.style.opacity = '0';  // Hide info text initially
        infoBlock.style.display = 'none';
  
        // After 3.5 seconds, stop animation and show info
        setTimeout(() => {
          // Fade out icon
          icon.style.transition = 'opacity 0.5s ease';
          icon.style.opacity = '0';
  
          // After fade out completes
          setTimeout(() => {
            icon.id = ''; // stop animation
            icon.classList.remove('animating');
  
            // Hide icon completely
            icon.style.display = 'none';
  
            // Show and fade in infoBlock
            infoBlock.style.display = 'block';
            infoBlock.style.transition = 'opacity 0.7s ease';
            infoBlock.style.opacity = '1';
          }, 500); // wait for fade out duration
        }, 3500); // animation duration
      });
    });
  }
  
  specialMoves();
  