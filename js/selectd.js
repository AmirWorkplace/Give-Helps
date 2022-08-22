function addToSelectdCard(playerNames) {
  const playerIdName = document.getElementById(playerNames);
  const playerName = playerIdName.innerText;

  const addNameList = document.getElementById("add-name-list");
  const createLl = document.createElement("li");
  createLl.innerText = playerName;
  addNameList.appendChild(createLl);
  return playerName;
}

// messi-btn
document.getElementById("messi-btn").addEventListener("click", function () {
  const messiReturn = addToSelectdCard("messi-name");
});

// Ronaldo
document.getElementById("ronaldo-btn").addEventListener("click", function () {
  const ronaldoReturn = addToSelectdCard("ronaldo-name");
});

// salah
document.getElementById("salah-btn").addEventListener("click", function () {
  const salahReturn = addToSelectdCard("salah-name");
});

// kevin
document.getElementById("kavin-btn").addEventListener("click", function () {
  const kavinReturn = addToSelectdCard("kavin-name");
});

// NEYMER
document.getElementById("neymer-btn").addEventListener("click", function () {
  const neymerReturn = addToSelectdCard("neymer-name");
});

// Di maria
document.getElementById("dimaria-btn").addEventListener("click", function () {
  const dimariaReturn = addToSelectdCard("dimaria-name");
});

// ==========per player Calculate==========

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerField = document.getElementById("per-player-field");
  const perPlayerToString = perPlayerField.value;
  const perplayer = parseInt(perPlayerToString);

  const parPlayerCalculet = perplayer * playerName;
  console.log(parPlayerCalculet);
});

// ========== All player Calculation ! e==========

function Amir() {

  const playerValue = document.querySelector(".playerValue");
  const avgValue = document.querySelector(".avgValue");
  const countInp = document.querySelector(".countInp");

  countInp.addEventListener("keyup", function () {
    let playerMoney = countInp.value;

    playerValue.addEventListener("click", function () {
      const allPlayer = document.querySelectorAll(".allPlayerList li");
      let avgPlayer = allPlayer.length;
      let Average = avgPlayer * playerMoney;

      avgValue.innerHTML = Average;
      // console.log(`The All value of Your Selected Players are : $${Average} !`);
    });

    // console.log(playerMoney);
  });
};
Amir();
