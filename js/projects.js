const API_URL_PROJECTS =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchProjectsHTML(uuidActual) {
  const response = await fetch(API_URL_PROJECTS);
  if (!response.ok) {
    alert("Sorry! no response from API");
  }
  const dataPROJECTS = await response.json();

  const shufledProjects = dataPROJECTS.sort(function () {
    return Math.random() - 0.5;
  });

  const filteredShufledProjects = shufledProjects.filter(
    (item) => item.uuid !== uuidActual
  );
  const slicedShufled = filteredShufledProjects.slice(0, 3);
  return slicedShufled;
}

async function printProjects(idProjects2, sortedProjects) {
  const randomProject = sortedProjects.filter(
    (item) => item.uuid !== idProjects2
  );
}

// PINTA EL PROYECTO SELECIONADO
async function clickedProjects(uuidActual) {
  const randomSliced = await fetchProjects();
  const selectedProject = randomSliced.filter(
    (item) => item.uuid === uuidActual
  );
  console.log("selected:", selectedProject);
  console.log("id actual: ", uuidActual);
  const $bodyProject = document.getElementById("picked-project");
  $bodyProject.innerHTML = `
<article class="center-center border-test width-50 flex-column">
  <h1 class="h1"> ${selectedProject[0].name} </h1>
  <p class="text-center bod-med"> ${selectedProject[0].description} </p>
</article>
<div class="border-test width-50 align-end height-100 height-97px">
  <p class="bod-reg neutral-dark">
    Completed on <span class="bod-reg dark-grey">${selectedProject[0].completed_on}</span>
  </p>
</div>`;

  document.getElementById(
    "img-project"
  ).innerHTML = `<img src="${selectedProject[0].image}" alt="Project Banner" width="100%" height="520px">`;

  const $projectContent = document.getElementById("content-project");

  $projectContent.innerHTML = `
<div
       
        class="border-test body-reg project-content-style dark-grey margin-top-10"
      >
      ${selectedProject[0].content}
      </div>
`;
}
// IMPRIME CAJAS OUR PROJECTS
function printProjectsHTML(slicedShufled) {
  const $projectsHTML = document.getElementById("projects-html");
  console.log("sliced:", slicedShufled);

  slicedShufled.forEach((project) => {
    $projectsHTML.innerHTML += ` <article class="card__item">
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
}
window.addEventListener("load", async function () {
  const params2 = new URLSearchParams(window.location.search);
  const idProjects2 = params2.get("uuid");
  const randomSliced = await fetchProjectsHTML(idProjects2);
  printProjectsHTML(randomSliced);
  await printProjects(idProjects2, randomSliced);
  await clickedProjects(idProjects2);
});

/* window.addEventListener("load", async function () {
  const params = new URLSearchParams(window.location.search);
  const idProjects = params.get("uuid");
  const projects = await fetchProjects(idProjects);
  printIndex(projects);
});
 */
