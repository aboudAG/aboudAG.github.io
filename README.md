# Portfolio — Abdenour Agag

Site statique (HTML, CSS, JavaScript pur), sans base de données.

## Structure

```
portfolio-abdenour/
├── index.html            ← contenu du site
├── css/style.css         ← styles (couleurs modifiables en haut du fichier)
├── js/script.js          ← menu mobile, animations, filtres, formulaire
├── js/i18n.js            ← traductions anglaises (bouton FR / EN)
└── assets/
    ├── cv-abdenour-agag.pdf   ← CV web (sans téléphone)
    └── img/
        ├── photo.jpg          ← facultatif (ta photo)
        └── projets/           ← captures de tes projets
```

## À compléter

Tout est signalé par des commentaires `<!-- Remplacer ... -->` dans `index.html` :

1. Facultatif : une photo → `assets/img/photo.jpg` (sinon tes initiales s'affichent)
2. ~~CV~~ : déjà ajouté (version sans téléphone)
3. ~~LinkedIn et e-mail~~ : déjà ajoutés
4. ~~Formspree~~ : déjà relié (formulaire mnppykag), les messages arrivent dans ta boîte mail
5. Les liens « Démo » des projets (ou supprime ces boutons)
6. Facultatif : des captures de projets dans `assets/img/projets/`

## Voir le site

Ouvre simplement `index.html` dans ton navigateur.

## Mettre en ligne gratuitement (GitHub Pages)

1. Crée un dépôt public nommé `aboudAG.github.io`
2. Pousse le contenu de ce dossier (pas le dossier lui-même) à la racine du dépôt
3. Dans *Settings → Pages*, choisis la branche `main`
4. Le site est en ligne sur https://aboudag.github.io
