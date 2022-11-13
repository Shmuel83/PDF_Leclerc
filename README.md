# PDF Leclerc

Génération catalogue LECLERC en PDF vie une extension Chrome
Cette extension n'appartient pas à la société LECLERC
Depuis que LECLERC n'imprime plus de catalogue et affiche sur son site web le catague numériquement page par page, il apparait necessaire pour certains de télécharger et d'archiver les catalogues. Cette extension permet cela.

Regarder comment installer et utiliser l'extension : https://www.awesomescreenshot.com/video/12198989?key=14a7ab2ada4f80218ab2886b52e2609b

## Installation
Il est possible de l'installer sur un autre navigateur que chrome mais il sera necessaire de réaliser les action dans #install
Pour installer cette extension sur chrome : 
Télécharger dans le répertoire package l'archive.
Dézipper l'archive
Aller dans chrome et cliquer sur le petit puzzle noir en haut de chrome, puis gérer les extensions (ou taper dans l'url chrome://extensions/)
Activer le mode développeur en haut à droite
Cliquer sur Extension non empactée
Choisir le répertoire chrome et cliquer sur "ok"
Vous pouvez maintenant utiliser l'extension

## Fonctionnement
Aller sur le site web e.leclerc
Cliquer sur l'onglet Catalogue
Sélectionner le magasin
Il vous reste à cliquer sur télécharger le PDF dans le menu à droite
Le téléchargement en cours affichera l'état d'avancement

# Development

## Install

	$ npm install

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 

## Docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
