let arr = [0]; // array with one entity
let dice = document.getElementById("dice");
document.getElementById("clear").style.display = "none";

document.getElementById("button").addEventListener("click", () => {
  dice.classList.remove("rotate");
  void dice.offsetWidth;
  dice.classList.add("rotate");
  
  const dFaces = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
  ];

  let randInt = Math.floor(Math.random() * 6); // número aleatório de 0 a 5
  let randDice = dFaces[randInt];

  document.getElementById("dice").innerHTML = randDice;

  let successor = arr[arr.length - 1] + 1;
  arr.push(successor); // Primeiro adiciona ao array

  document.getElementById("clear").style.display = "inline";

  document.getElementById("roll-history").innerHTML += `
    <li><span>Roll ${arr[arr.length - 1]}</span><span>${randDice}</span></li>
  `;
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("roll-history").innerHTML = "";
  arr.length = 1; // reseta mantendo o 0
  document.getElementById("clear").style.display = "none"; // esconde o botão imediatamente
});
