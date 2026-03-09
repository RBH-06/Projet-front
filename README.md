#  Générateur de Carte Étudiant

Un projet web interactif permettant de générer une carte étudiant dynamique et stylisée à partir d'un formulaire. Ce projet a été réalisé en utilisant uniquement les technologies web standards (Vanilla).

## Fonctionnalités

- **Formulaire interactif** : Saisie des informations de l'étudiant (Nom, Prénom, Date de naissance, etc.).
- **Listes dynamiques** : Les filières et facultés sont gérées dynamiquement via JavaScript.
- **Validations strictes** : 
  - Vérification de la validité des noms/prénoms (lettres et tirets uniquement, max 24 caractères).
  - Vérification de la majorité (l'étudiant doit avoir au moins 18 ans).
- **Logique métier automatique** :
  - Calcul de l'âge exact à partir de la date de naissance.
  - Déduction automatique du grade (Licence, Master, Doctorant, Enseignant) en fonction de l'âge.
  - Calcul de l'année universitaire en cours.
- **Design dynamique** :
  - **Statut Interne/Externe** : Si le lieu de naissance correspond à l'université, la carte a un thème Violet (Interne). Sinon, elle a un thème Bleu (Externe).
  - **Logo dynamique** : Affichage automatique du logo de l'université sélectionnée (UAMB ou UMMTO).
  - Animation CSS d'apparition fluide lors de la génération.

## Technologies Utilisées

- **HTML5** : Structure sémantique du formulaire et de la carte.
- **CSS3** : Flexbox, variables, dégradés (linear-gradient), ombres portées et animations (`@keyframes`).
- **JavaScript (ES6)** : Manipulation du DOM, gestion des événements, algorithmes de vérification et objets.

## Structure du Projet

\`\`\`text
├── index.html     # Structure de la page et du formulaire
├── style.css      # Styles modernes et animations de la carte
├── script.js      # Logique de validation et de génération
├── assets/        # Dossier contenant les images
│   ├── bejaia.png # Logo de l'Université de Béjaïa (UAMB)
│   └── tizi.png   # Logo de l'Université de Tizi-Ouzou (UMMTO)
└── README.md      # Documentation du projet
\`\`\`
