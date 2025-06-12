
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

function viewChUnit() {

  const chBtn = document.getElementById("ch-unit-btn");
  const chInfo = document.getElementById("ch-info");

  chBtn.addEventListener("click", () => {

    chInfo.style.display = "block";
  });
}  

viewChUnit();

function viewVhUnit() {

  const vhBtn = document.getElementById("vh-unit-btn");
  const vhInfo = document.getElementById("vh-info");

  vhBtn.addEventListener("click", () => {

    vhInfo.style.display = "block";
  });
}

viewVhUnit();

function viewVwUnit() {

  const vwBtn = document.getElementById("vw-unit-btn");
  const vwInfo = document.getElementById("vw-info");

  vwBtn.addEventListener("click", () => {

    vwInfo.style.display = "block";
  });
}

viewVwUnit();

function viewVminUnit() {

  const vminBtn = document.getElementById("vmin-unit-btn");
  const vminInfo = document.getElementById("vmin-info");

  vminBtn.addEventListener("click", () => {

    vminInfo.style.display = "block";
  });
}

viewVminUnit();

function viewVmaxUnit() {

  const vmaxBtn = document.getElementById("vmax-unit-btn");
  const vmaxInfo = document.getElementById("vmax-info");

  vmaxBtn.addEventListener("click", () => {

    vmaxInfo.style.display = "block";
  });
}

viewVmaxUnit ();


function hidePercentageUnit() {

  const hidePercentageBtn = document.getElementById("hide-percentage-btn");
  const percentageInfo = document.getElementById("percentage-info");

  hidePercentageBtn.addEventListener("click", () => {

    percentageInfo.style.display = "none";

  });


}
hidePercentageUnit();

function hideEmUnit() {

  const hideEmBtn = document.getElementById("hide-em-btn");
  const EmInfo = document.getElementById("em-info");

  hideEmBtn.addEventListener("click", () => {

    EmInfo.style.display = "none";

  });


}
hideEmUnit();


function hideRemUnit() {

  const hidRemBtn = document.getElementById("hide-rem-btn");
  const RemInfo = document.getElementById("rem-info");

  hidRemBtn.addEventListener("click", () => {

    RemInfo.style.display = "none";

  });


}
hideRemUnit();

function hideChUnit() {

  const hideChBtn = document.getElementById("hide-ch-btn");
  const chInfo = document.getElementById("ch-info");

  hideChBtn.addEventListener("click", () => {

    chInfo.style.display = "none";

  });


}

hideChUnit();

function hideVhUnit() {

  const hideVhBtn = document.getElementById("hide-vh-btn");
  const vhInfo = document.getElementById("vh-info");

  hideVhBtn.addEventListener("click", () => {

    vhInfo.style.display = "none";

  });


}

hideVhUnit();

function hideVwUnit() {

  const hideVwBtn = document.getElementById("hide-vw-btn");
  const vwInfo = document.getElementById("vw-info");

  hideVwBtn.addEventListener("click", () => {

    vwInfo.style.display = "none";

  });

}

hideVwUnit();

function hideVminUnit() {

  const hideVminBtn = document.getElementById("hide-vmin-btn");
  const vminInfo = document.getElementById("vmin-info");

  hideVminBtn.addEventListener("click", () => {

    vminInfo.style.display = "none";

  });

}

hideVminUnit();

function hideVmaxUnit () {

  const hideVmaxBtn = document.getElementById("hide-vmax-btn");
  const vmaxInfo = document.getElementById("vmax-info");

  hideVmaxBtn.addEventListener("click", () => {

    vmaxInfo.style.display = "none";

  });

}

hideVmaxUnit();


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

  const roundOnePopup = document.getElementById("round-popup");

  const flexOneInfo = document.getElementById("flex1-info");
 
  document.querySelector('#ready-btn').addEventListener('click', () => {
    const audio = document.getElementById('roundAudio');
    if (audio) {
      audio.currentTime = 0; // rewind to start
      audio.play();
      
    }

    roundOnePopup.style.display = "block";
    flexOneInfo.style.display = "block";
    flexOneInfo.scrollIntoView({ behavior: "smooth"});
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
      flexTwoInfo.scrollIntoView({ behavior: "smooth"});

    });

}

playFightButton();



const p1HpBar = document.querySelectorAll(".p1-hp-stat-bar");
const p1DpsBar = document.querySelectorAll(".p1-dps-stat-bar");
const p1SpeedBar = document.querySelectorAll(".p1-speed-stat-bar");
const p1EnergyBar = document.querySelectorAll(".p1-energy-stat-bar");

const p4HpBar = document.querySelectorAll(".p4-hp-stat-bar");
const p4DpsBar = document.querySelectorAll(".p4-dps-stat-bar");
const p4SpeedBar = document.querySelectorAll(".p4-speed-stat-bar");
const p4EnergyBar = document.querySelectorAll(".p4-energy-stat-bar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

  p1HpBar.forEach(bar => {
  observer.observe(bar);
  });

  p1DpsBar.forEach(bar => {
  observer.observe(bar);

  });

  p1SpeedBar.forEach(bar => {
  observer.observe(bar);
  });

  p1EnergyBar.forEach(bar => {
  observer.observe(bar);
  });

  p4HpBar.forEach(bar => {
  observer.observe(bar);
  });

  p4DpsBar.forEach(bar => {
  observer.observe(bar);
  });

  p4SpeedBar.forEach(bar => {
  observer.observe(bar);  
  });

  p4EnergyBar.forEach(bar => {
  observer.observe(bar);  
  });
