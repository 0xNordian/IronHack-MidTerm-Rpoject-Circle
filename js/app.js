const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchProjects(uuid) {
  const response = await fetch(API_URL);
  if (!response.ok) {
    alert("Sorry! no response from API");
  }
  const data = await response.json();

  const projects = data;
  const sortedProjects = projects.sort(function (item1, item2) {
    if (Number(item1.uuid) < Number(item2.uuid)) {
      return -1;
    }
    if (Number(item1.uuid) > Number(item2.uuid)) {
      return 1;
    }
    return 0;
  });

  const topProjects = sortedProjects.slice(0, 3);
  const $projects = document.getElementById("projects");
  const $cardTitle = document.getElementsByClassName("card__title");
  const $otherProjects = document.getElementById("other-projects");
  const collection = [...$cardTitle];

  topProjects.forEach((project) => {
    $projects.innerHTML += ` <article class="card__item">
      <div class="card__content">
        <figure id="project-picture1" class="card__picture">
          <img src="${project.image}" alt="Project Image" class="card__img" />
        </figure>

        <div class="card__text">
          <h3 class="card__title bod-med">${project.name}</h3>
          <p class="card__paragraph">${project.description}</p>
          <div class="card__footer"><a href="project.html?uuid=${project.uuid}">Learn More</a></div>
        </div>
      </div>
    </article>
`;
  });

  return topProjects;
}

window.addEventListener("load", async function () {
  const projects = await fetchProjects();
  const params = new URLSearchParams(window.location.search);

  const idProjects = params.get("uuid");
});
