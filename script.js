const facultes = {
    se : { code : "se", nom : "Sciences Exactes"         },
    st : { code : "st", nom : "Sciences et Technologies" },
    ll : { code : "ll", nom : "Lettres et Langues"       },
};

const fillieres = [
    { code : "inf", nom : "Informatique",       faculte : facultes.se },
    { code : "mat", nom : "Mathématiques",      faculte : facultes.se },
    { code : "aut", nom : "Automatique",        faculte : facultes.st },
    { code : "tel", nom : "Télécommunications", faculte : facultes.st },
    { code : "fr",  nom : "Français",           faculte : facultes.ll },
    { code : "an",  nom : "Anglais",            faculte : facultes.ll },
];

const fillieresSelectElt = document.getElementById('fillieres');

(() => {
    fillieres.forEach(filliere => {
        const option = document.createElement('option');

        option.value = filliere.code;
        option.textContent = filliere.nom;

        fillieresSelectElt.appendChild(option);
    });
})();

const deductionAge = date => {
    const dateNaissance  = new Date(date);
    const dateAujourdhui = new Date();

    const diffAnnees = dateAujourdhui.getFullYear() - dateNaissance.getFullYear();
    const diffMois   = dateAujourdhui.getMonth() - dateNaissance.getMonth();
    const diffJours  = dateAujourdhui.getDate() - dateNaissance.getDate();

    if (diffMois < 0 || (diffMois === 0 && diffJours < 0))
        return diffAnnees - 1;

    return diffAnnees;
};

const verification = utilisateur => {
    const estUneLettre = c => ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'));

    const validite = chaine => {
        let possedeUnTiret     = false;

        for (let i = 0; i  < chaine.length; i++) {
            if (i >= 24)
                return false;

            if (chaine[i] === '-') {
                if (i === 0 || i === chaine.length - 1)
                    return false;

                if (!possedeUnTiret) {
                    possedeUnTiret = true;
                    continue;
                } else
                    return false;
            }

            if (!estUneLettre(chaine[i]))
                return false;
        }

        return true;
    }

    const prenomEstValide = validite(utilisateur.nom);
    const nomEstValide    = validite(utilisateur.prenom);
    const aPlusDe18ans    = utilisateur.age >= 18;

    if (!nomEstValide)
    {
        alert("Nom invalide, le nom doit seulement contenir des lettres ou un tiret, et ne doit pas faire plus de 24 caractères.");
        return false;
    }

    if (!prenomEstValide)
    {
        alert("Prénom invalide, le prénom doit seulement contenir des lettres ou un tiret, et ne doit pas faire plus de 24 caractères.");
        return false;
    }

    if (!aPlusDe18ans)
    {
        alert("Vous devez être majeur pour avoir une carte !");
        return false;
    }

    return true;
}

const deduireGrade = utilisateur => {
    if (utilisateur.age <= 21)
        utilisateur.grade = "Licence";
    else if (utilisateur.age <= 23)
        utilisateur.grade = "Master";
    else if (utilisateur.age <= 27)
        utilisateur.grade = "Doctorant";
    else
        utilisateur.grade = "Enseignant";
}

const anneeUniversitaire = () => {
    const date = new Date();

    const annee = date.getFullYear();
    const mois = date.getMonth();

    return mois >= 8 ? [annee, annee + 1] : [annee - 1, annee];
};

const carte = document.getElementById('carte');

const genererCarte = utilisateur => {
    const [debut, fin] = anneeUniversitaire();
    const externe      = utilisateur.lieu.code !== utilisateur.univ.code;

    if (externe)
        carte.classList.add('externe');
    else
        carte.classList.remove('externe');

    document.getElementById('carte-logo').src = `assets/${utilisateur.univ.code}.png`;

    document.getElementById('carte-titre').textContent = utilisateur.grade === 'Enseignant' ? "Carte enseignant" : "Carte étudiant";

    document.getElementById('carte-nom').textContent      = utilisateur.nom;
    document.getElementById('carte-prenom').textContent   = utilisateur.prenom;
    document.getElementById('carte-date').textContent     = utilisateur.dateNaissance;
    document.getElementById('carte-lieu').textContent     = utilisateur.lieu.nom;
    document.getElementById('carte-filliere').textContent = utilisateur.filliere.nom;
    document.getElementById('carte-faculte').textContent  = utilisateur.filliere.faculte.nom;
    document.getElementById('carte-grade').textContent    = utilisateur.grade;
    document.getElementById('carte-annee').textContent    = `${debut}/${fin}`;

    carte.style.display = 'block';
}

let utilisateur = { };
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const donnees = e.target.elements;

    const nom              = donnees.nom.value;
    const prenom           = donnees.prenom.value;
    const date             = donnees.date.value;
    const lieu             = donnees.lieu;
    const univ             = donnees.univ;
    const codeFilliere     = donnees.fillieres.value;
    const filliere         = fillieres.find(f => f.code === codeFilliere);

    const age = deductionAge(date);

    utilisateur.nom           = nom;
    utilisateur.prenom        = prenom;
    utilisateur.dateNaissance = date;
    utilisateur.age           = age;
    utilisateur.lieu          = { nom : donnees.lieu.options[lieu.selectedIndex].textContent, code : lieu.value }; 
    utilisateur.univ          = { nom : donnees.univ.options[univ.selectedIndex].textContent, code : univ.value }; 
    utilisateur.filliere      = filliere;

    if (!verification(utilisateur))
        return;

    deduireGrade(utilisateur);

    genererCarte(utilisateur);
});

form.addEventListener('reset', _ => carte.style.display = 'none');








