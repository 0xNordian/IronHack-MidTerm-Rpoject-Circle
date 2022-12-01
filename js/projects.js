async function printProjects(idProjects, sortedProjects) {
  const randomProject = sortedProjects.filter(
    (item) => item.uuid !== idProjects
  );

  let shuffledProjects = randomProject.sort(function () {
    return Math.random() - 0.5;
  });
  console.log("Shuffled", shuffledProjects);

  const filteredShuffledProjects = shuffledProjects.slice(0, 3);
  console.log("Sliced:", filteredShuffledProjects);
}

async function clickedProjects(idProjects, sortedProjects) {
  const selectedProject = sortedProjects.filter(
    (item) => item.uuid === idProjects
  );
  console.log(selectedProject);
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
  ).innerHTML = `<img src="${selectedProject[0].image}" alt="Project Banner" width="100%" height="100%">`;

  const $projectContent = document.getElementById("content-project");

  $projectContent.innerHTML = `
<div
       
        class="border-test body-reg project-content-style dark-grey"
      >
      ${selectedProject[0].content}
      </div>
`;
}
window.addEventListener("load", async function () {
  const params = new URLSearchParams(window.location.search);
  const idProjects = params.get("uuid");
  const sortedProjects = await fetchProjects();
  await printProjects(idProjects, sortedProjects);
  await clickedProjects(idProjects, sortedProjects);
  //console.log(idProjects);
  //const projects = await fetchProjects(idProjects);
});
