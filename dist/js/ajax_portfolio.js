window.onload = function () {

    let blocWorkList = document.querySelector("#blocWorkList");

    fetch("https://my-json-server.typicode.com/Randy-RM/portfolio/works")
        .then(function (response) {
            return response.json();
        })
        .then(function (works) {
            for (let work of works) {
                //
                let workBloc = document.createElement("div");
                workBloc.classList.add(
                    "col-md-4"
                );

                //
                let card = document.createElement("div");
                card.classList.add(
                    "p-2"
                );

                //
                let cardOverlayLink = document.createElement("a");
                cardOverlayLink.classList.add(
                    "card-overlay-link"
                );
                cardOverlayLink.setAttribute("href", `${work.projectLink}`);

                //
                let cardOverlay = document.createElement("div");
                cardOverlay.classList.add(
                    "card-overlay"
                );

                //
                let blocCardImage = document.createElement("p");
                blocCardImage.classList.add(
                    "text-center",
                    "thumb-post"
                );

                //
                let cardImage = document.createElement("img");
                cardImage.classList.add(
                    "rounded"
                );
                cardImage.setAttribute("src", `${work.projectPicture}`);
                cardImage.setAttribute("alt", `${work.alt}`);

                //
                let workTextBloc = document.createElement("div");
                workTextBloc.classList.add(
                    "overlay",
                    "rounded"
                );

                //
                let workTitle = document.createElement("h2");
                workTitle.classList.add(
                    "card-text-overlay",
                    "fw-bold"
                );
                workTitle.textContent = `${work.title}`;

                //
                let workContentText = document.createElement("p");
                workContentText.classList.add(
                    "card-text-overlay"
                );
                workContentText.textContent = `${work.content}`;
                //
                let blocWorkLink = document.createElement("p");
                blocWorkLink.classList.add(
                    "text-center",
                    "py-3"
                );
                //
                let workLink = document.createElement("a");
                workLink.classList.add(
                    "link-dark-decored",
                    "fw-bold"
                );
                workLink.setAttribute("href", `${work.projectLink}`);
                workLink.textContent = "See more";
                //

                blocWorkList.appendChild(workBloc);

                workBloc.appendChild(card);
                card.appendChild(cardOverlayLink);

                cardOverlayLink.appendChild(cardOverlay);
                cardOverlay.appendChild(blocCardImage);
                blocCardImage.appendChild(cardImage);

                cardOverlay.appendChild(workTextBloc);
                workTextBloc.appendChild(workTitle);
                workTextBloc.appendChild(workContentText);

                card.appendChild(blocWorkLink);
                blocWorkLink.appendChild(workLink);
            }
        });
};