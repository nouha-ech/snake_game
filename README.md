# snake_game

![image](https://github.com/nouha-ech/nuha-extension/assets/154752182/c6b62843-5b51-4091-bc01-0dd075ab4a87)




Ce projet est un jeu de serpent classique développé en utilisant HTML5, CSS et JavaScript. L'interface graphique est rendue à l'aide de l'élément <canvas> de HTML5. Le jeu est simple et interactif, où le joueur contrôle un serpent qui grandit en mangeant des pommes.
![image](https://github.com/nouha-ech/nuha-extension/assets/154752182/578ac8da-9e6e-4fc1-b91e-253466bda619)


## Technologies Utilisées

HTML5 : pour la Structure de base de la page, comprenant l'élément <canvas> pour le rendu du jeu.

CSS: Styles pour le jeu, définis dans le fichier styles.css.

JavaScript : Logique du jeu implémentée dans script.js, incluant les fonctionnalités de déplacement du serpent, collision et score.

 pour plus détails voici cette documentation du code js:
 
-- Création du Canvas:
on l'a donné un Id,taille, en utilisant les fonctions suivantes :

getElementById('Canvas') pour récupérer le canvas.
getContext('2d') pour obtenir le contexte de dessin 2D.
fillStyle pour définir la couleur de remplissage.
strokeStyle() pour définir la couleur du contour.
fillRect() pour remplir le carré.
strokeRect() pour dessiner le contour du carré.

-- Dessin du serpent
dessineLesMorceaux(morceau): pour Dessiner un morceau du serpent (couleur verte et un contour noir) fct tableau
dessineLeSerpent(): Dessine l'ensemble du serpent en appelant dessineMorceaux

-- Faire avancer le serpent
faireAvancerSerpent(): Fait avancer le serpent horizontalement en ajustant ses morceaux.
unshift(): Ajoute un élément au début d'un tableau (utilisé pour ajouter une nouvelle tête au serpent).
pop(): Supprime le dernier élément d'un tableau (utilisé pour enlever la queue du serpent).
dessineSerpent(): Dessine le serpent sur le canvas.

-- Faire monter le serpent
NB: + VX pour se deplacer a droite et + VY vers le bas
-10 pour aller vers la gauche ou haut
la logique derrière le réglage des valeurs+++++++

-- Animation du serpent
NettoieCanvas(): Efface le canvas.
animation(): Contrôle l'animation du serpent.
setTimeout() pour appeler animation() toutes les 100 ms.
(La récursion assure une animation fluide)

-- Gestion des direction
meme fcts qu'avant +
changerDirection(event): pour eviter le retournement du serpent sur lui-même en empêchant les mouvements inverses.

-- Création de la pomme
Math.random()
Math.round()
creerPomme()
serpentMangePomme()
DessinePomme()

-- Score++
updateScore(): Met à jour le score lorsque le serpent mange une pomme.

-- GameOVER
finDuJeu()
recommencer()

-- Gestion des bugs
BugDirection()
changerDirection()


source du son: <https://www.youtube.com/watch?v=tUcaD3yiqEY>
