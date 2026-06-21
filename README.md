# SETUP ENVIRONNEMENT DE TRAVAIL
1. Clone du repo en local 
```
git clone https://github.com/TyphaineLeGales/DNAMDE_II.git
```
naviguer a l'interieur du dossier et installer les packages
```
npm i
```
tester que tout marche en lancant le serveur de dev 
```
npm run dev
```

2. Créer sa propre branche avec son nom (exemple avec mon nom typhaine-legales)
```
git checkout -b typhaine-legales
```
remplacer le texte qui s'affiche par "Bonjour {votre prénom}"

sauvegarder les modifs (remplacer le nom de ma branche par le votre)
```
git add . 
git commit -m "feat: my first commit"
git push --set-upstream origin typhaine-legales
```

quand vous retournez ici https://github.com/TyphaineLeGales/DNAMDE_II, votre branche avec votre nom devrait s'afficher ici (/image/setup-branch.png)