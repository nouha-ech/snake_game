const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // on utilise 2d mais on peut avoir des autre contextes dans le futur comme webgl

function nettoieCanvas() {
  ctx.fillStyle = "green"; // couleur de notre playground
  ctx.strokeStyle = "brown"; // couleur du contour
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
}

// Declaration des Variables

// pour la vitesse du serpent
vx = 10; // vitesse horizontale
vy = 0; // vitesse verticale
// pour la pomme
let pommeX = 0;
let pommeY = 0;

let score = 0; // Score

let bugDirection = false; // pour eviter le bug

let stopGame = false; // pour arreter le jeu

// Declaration du serpent

let snake = [
  { x: 140, y: 150 }, // taille du tete du serpent
  { x: 130, y: 150 }, // 1er morceau du corps du serpent
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

function animation() {
  // animation
  if (stopGame === true) {
    return;
  } else {
    setTimeout(function () {
      bugDirection = false;
      nettoieCanvas(); // on nettoie le canvas
      dessinePomme(); // on dessine la pomme pour continuer le jeu
      faireAvancerSerpent();

      dessineLeSerpent();

      // recursivité
      animation();
    }, 100);
  }
}
animation();
creerPomme();

function dessineLesMorceaux(morceau) {
  // pour dessiner leq morceaux du corps du serpent
  ctx.fillStyle = "#62ff62";
  ctx.strokeStyle = "black";
  ctx.fillRect(morceau.x, morceau.y, 10, 10);
  ctx.strokeRect(morceau.x, morceau.y, 10, 10);
}
function dessineLeSerpent() {
  // pour dessiner le serpent, cette fonction fait appel a la fonction dessineLesMorceaux
  snake.forEach((morceau) => {
    dessineLesMorceaux(morceau);
  });
}

dessineLeSerpent();

function faireAvancerSerpent() {
  // pour faire avancer le serpent
  const head = { x: snake[0].x + vx, y: snake[0].y + vy };
  snake.unshift(head); // on ajoute la tete du serpent

  if (finDuJeu()) {
    snake.shift(head); // on enleve la tete du serpent
    recommencer(); //  recommencer le jeu
    stopGame = true;
    return;
  }

  const serpentMangePomme = snake[0].x === pommeX && snake[0].y === pommeY;

  if (serpentMangePomme) {
    score += 10;
    document.getElementById("score").innerHTML = score;

    creerPomme(); // on creer une nouvelle pomme
  } else {
    snake.pop();
  }
}

dessineLeSerpent();

document.addEventListener("keydown", changerDirection);

function changerDirection(event) {
  // console.log(event);

  // eviter le bug
  if (bugDirection) return;
  bugDirection = true;

  // codes des fleches
  const FLECHE_GAUCHE = 37;
  const FLECHE_DROITE = 39;
  const FLECHE_ENHAUT = 38;
  const FLECHE_ENBAS = 40;

  const direction = event.keyCode;

  const monter = vy === -10; //
  const descendre = vy === 10;
  const adroite = vx === 10;
  const agauche = vx === -10;

  // pour éviter que le serpent ne se retourne sur lui-même !!!!!

  if (direction === FLECHE_GAUCHE && !adroite) {
    //cas de gauche
    vx = -10;
    vy = 0;
  }
  if (direction === FLECHE_ENHAUT && !descendre) {
    //cas de haut
    vx = 0;
    vy = -10;
  }
  if (direction === FLECHE_DROITE && !agauche) {
    //cas de droite
    vx = 10;
    vy = 0;
  }
  if (direction === FLECHE_ENBAS && !monter) {
    //cas de bas
    vx = 0;
    vy = 10;
  }
}

function random() {
  // pour avoir une position aleatoire
  return Math.round((Math.random() * 290) / 10) * 10; // pour eviter d'avoir une position qui ne soit pas un nombre entier et multiple de 10
}

function creerPomme() {
  // pour donner une nouvelle position aleatoire a la pomme
  pommeX = random(); // horizontale
  pommeY = random(); // verticale

  snake.forEach(function (part) {
    const serpentSurPomme = part.x == pommeX && part.y == pommeY;

    if (serpentSurPomme) {
      creerPomme();
    }
  });
}

function dessinePomme() {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "darkred";
  ctx.beginPath();
  ctx.arc(pommeX + 5, pommeY + 5, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function finDuJeu() {
  // pour finir le jeu il faut que le serpent mordu ou qu'il touche le bord
  let snakeSansTete = snake.slice(1, -1);
  let mordu = false;
  snakeSansTete.forEach((morceau) => {
    if (morceau.x === snake[0].x && morceau.y === snake[0].y) {
      mordu = true;
    }
  });

  const toucheMurGauche = snake[0].x < -1;
  const toucheMurDroite = snake[0].x > canvas.width - 10;
  const toucheMurTop = snake[0].y < -1;
  const toucheMurBottom = snake[0].y > canvas.height - 10;

  let gameOver = false;

  if (
    mordu || // au cas ou le serpent mordu
    // les cas ou le serpent touche les bords
    toucheMurGauche ||
    toucheMurDroite ||
    toucheMurTop ||
    toucheMurBottom
  ) {
    gameOver = true;
  }

  return gameOver;
}

function recommencer() {
  // pour recommencer
  const restart = document.getElementById("recommencer");
  restart.style.display = "block";

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      // 13
      document.location.reload(true);
    }
  });
}
