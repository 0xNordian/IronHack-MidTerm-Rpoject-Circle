async function printProjects(idProjects, sortedProjects) {
  const randomProject = sortedProjects.filter(
    (item) => item.uuid !== idProjects
  );
  console.log("random:", randomProject);
}

window.addEventListener("load", async function () {
  const params = new URLSearchParams(window.location.search);
  const idProjects = params.get("uuid");
  const sortedProjects = await fetchProjects();
  await printProjects(idProjects, sortedProjects);
  //console.log(idProjects);
  //const projects = await fetchProjects(idProjects);
});
