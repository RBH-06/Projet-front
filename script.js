
let filieres = [
  { nom: "Mathématiques", code: "mat" },
  { nom: "Informatique", code: "inf" },
  { nom: "Automatique", code: "aut" },
  { nom: "Télécommunications", code: "tel" },
  { nom: "Français", code: "fra" },
  { nom: "Anglais", code: "ang" }
];

const selectionFiliere = document.getElementById("filiere");


filieres.forEach(function(filiere) {
  let option = document.createElement("option");
  option.value = filiere.code;
  option.textContent = filiere.nom;
  selectionFiliere.appendChild(option);
});

document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();


    if (nom.length > 24 || !verifierNomOuPrenom(nom)) {
        alert("Le nom n'est pas valide.");
        return;
    }


    if (prenom.length > 24 || !verifierNomOuPrenom(prenom)) {
        alert("Le prénom n'est pas valide.");
        return;
    }


    alert("Nom et prénom valides !");
});

function verifierNomOuPrenom(texte) {
    if (texte.length === 0) 
        return false;

    let tiret = false;
    let avantTiret = 0;
    let apresTiret = 0;

    for (let i = 0; i < texte.length; i++) {
        let c = texte[i];

        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
            if (!tiret) {
                avantTiret++;
            } else {
                apresTiret++;
            }
        } else if (c === '-') {
        
            if (tiret || i === 0 || i === texte.length - 1) {
                return false;
            }
            tiret = true;
        } else {
            return false;
        }
    }

    if (tiret) {
        return avantTiret > 0 && apresTiret > 0;
    } else {
        return avantTiret > 0;
    }
}
document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const dateNaissance = document.getElementById("dateNaissance").value;

    if (nom.length > 24 || !verifierNomOuPrenom(nom)) {
        alert("Le nom n'est pas valide.");
        return;
    }

    if (prenom.length > 24 || !verifierNomOuPrenom(prenom)) {
        alert("Le prénom n'est pas valide.");
        return;
    }

    let naissance = new Date(dateNaissance);
    let aujourdHui = new Date();
    let age = aujourdHui.getFullYear() - naissance.getFullYear();

    if ( aujourdHui.getMonth() < naissance.getMonth() || (aujourdHui.getMonth() === naissance.getMonth() && aujourdHui.getDate() < naissance.getDate())
    ) {
        age = age - 1;
    }

    if (age < 18) {
        alert("Vous avez seulement " + age + " ans. Il faut avoir au moins 18 ans.");
        return;
    }

    const facultes = {
      se: "Faculté des Sciences Exactes",
      st: "Faculté de Technologie",
      ll: "Faculté des Lettres et des Langues"
    };
    
});

