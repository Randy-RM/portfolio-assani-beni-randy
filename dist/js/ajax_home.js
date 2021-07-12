window.onload = function () {

    let aboutMe = document.querySelector("#aboutMe");
    let blocProfilPicture = document.querySelector("#blocProfilPicture");

    fetch("https://my-json-server.typicode.com/Randy-RM/portfolio/profils")
        .then(function (response) {
            return response.json();
        })
        .then(function (profils) {
            for (let profil of profils) {
                //
                let fullNameTitle = document.createElement("h2");
                fullNameTitle.classList.add("featurette-heading");

                let salutation = document.createElement("span");
                salutation.textContent = "HI. I'm ";

                let fullName = document.createElement("span");
                fullName.classList.add("fw-bold");
                fullName.textContent = `${profil.prenom} ${profil.nom}`;

                let nickName = document.createElement("span");
                nickName.classList.add("text-muted");
                nickName.textContent = ` (${profil.surnom})`;

                aboutMe.appendChild(fullNameTitle);
                fullNameTitle.appendChild(salutation);
                fullNameTitle.appendChild(fullName);
                fullNameTitle.appendChild(nickName);

                //

                let biography = document.createElement("p");
                biography.classList.add("lead");
                biography.textContent = `${profil.biographie}`;

                aboutMe.appendChild(biography);

                //

                let blocLinkContact = document.createElement("p");
                blocLinkContact.classList.add("display-5");

                let githubLink = document.createElement("a");
                githubLink.classList.add("link-dark");
                githubLink.setAttribute("href", `${profil.gitHubLink}`);

                let githubIcon = document.createElement("i");
                githubIcon.classList.add("fab", "fa-github");

                let linkedinLink = document.createElement("a");
                linkedinLink.classList.add("link-dark");
                linkedinLink.setAttribute("href", `${profil.linkedInLink}`);

                let linkedinIcon = document.createElement("i");
                linkedinIcon.classList.add("fab", "fa-linkedin-in");

                let space = document.createTextNode(`  `);

                aboutMe.appendChild(blocLinkContact);

                blocLinkContact.appendChild(githubLink);
                githubLink.appendChild(githubIcon);

                blocLinkContact.appendChild(space);

                blocLinkContact.appendChild(linkedinLink);
                linkedinLink.appendChild(linkedinIcon);

                //
                let blocProfil = document.createElement("p");

                let profilPicture = document.createElement("img");
                profilPicture.setAttribute('src', profil.photoProfil);
                profilPicture.setAttribute('alt', `Picture ${profil.prenom} ${profil.nom} ${profil.postnom}`);
                profilPicture.classList.add(
                    "bd-placeholder-img",
                    "bd-placeholder-img-lg",
                    "featurette-image",
                    "img-fluid",
                    "mx-auto",
                    "rounded-circle",
                    "border-light-blue"
                );
                profilPicture.height = 400;
                profilPicture.width = 400;

                blocProfilPicture.appendChild(blocProfil);
                blocProfil.appendChild(profilPicture);
            }
        });
};