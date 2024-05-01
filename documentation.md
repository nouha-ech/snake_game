# File with heading

<h1> SNAKE GAME</h1>

ce mini projet a été crée apres avoir suivi un tutoriel
voici une documentation des étapes pour créer un jeu de Snake :

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
