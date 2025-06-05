
function scrollToLegendSection() {

    const scrollBtn = document.getElementById("start-btn");
    const legendSection = document.querySelector(".legend");

    scrollBtn.addEventListener("click", function () {
        legendSection.scrollIntoView({ behavior: "smooth"});
    });
}

scrollToLegendSection();

function viewPercentageUnit() {

  const percentageBtn = document.getElementById("percentage-unit-btn");
  const percentageInfo = document.getElementById("percentage-info");

  percentageBtn.addEventListener("click", () => {

    percentageInfo.style.display = "block";
        
  });

}
viewPercentageUnit();

function viewEmUnit() {

  const emBtn = document.getElementById("em-unit-btn");
  const emInfo = document.getElementById("em-info");

  emBtn.addEventListener("click", () => {

    emInfo.style.display = "block";
        
  });

}

  viewEmUnit();

function viewRemUnit() {

  const remBtn = document.getElementById("rem-unit-btn")
  const remInfo = document.getElementById("rem-info");

  remBtn.addEventListener("click", () => {

  remInfo.style.display = "block";

  });
}  

  viewRemUnit();

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
      icon.style.opacity = '1';
      icon.style.visibility = 'visible';
      icon.style.display = 'block'; // keep layout space stable

      infoBlock.style.opacity = '0';
      infoBlock.style.visibility = 'hidden';
      infoBlock.style.display = 'block'; // keep layout space stable

      // After 3.5 seconds, stop animation and show info
      setTimeout(() => {
        icon.style.transition = 'opacity 0.5s ease';
        icon.style.opacity = '0';

        setTimeout(() => {
          icon.id = '';
          icon.classList.remove('animating');
          icon.style.visibility = 'hidden';

          infoBlock.style.transition = 'opacity 0.7s ease';
          infoBlock.style.opacity = '1';
          infoBlock.style.visibility = 'visible';
        }, 500);
      }, 3500);
    });
  });
}

specialMoves();

function playReadyButton() {

  const flexTwo = document.querySelector('.flex-two');
  const roundOnePopup = document.getElementById("round-popup");

  const flexOneInfo = document.getElementById("flex1-info");
 
  document.querySelector('#ready-btn').addEventListener('click', () => {
    const audio = document.getElementById('roundAudio');
    if (audio) {
      audio.currentTime = 0; // rewind to start
      audio.play();
      
    }

    flexTwo.scrollIntoView({ behavior: "smooth"});
    roundOnePopup.style.display = "block";
    flexOneInfo.style.display = "block";
  });
  
}

playReadyButton();

function playFightButton() {

    const fightBtn = document.getElementById("fight-btn");
    const fightPopup = document.getElementById("fight-popup");
    const flexTwoInfo = document.getElementById("flex2-info");

    fightBtn.addEventListener("click", () => {
      const fightAudio = document.getElementById("fightAudio");
      if (fightAudio) {
          fightAudio.currentTime = 0;
          fightAudio.play();
      }

      fightPopup.style.display = "block";
      flexTwoInfo.style.display = "block";

    });

}

playFightButton();