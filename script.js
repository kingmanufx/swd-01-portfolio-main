const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const projectFilters = document.querySelector(".project-filters");
const featuredGrid = document.querySelector("#featured-projects .project-grid");
const allProjectsGrid = document.querySelector("#all-projects .project-grid");
const featuredSection = document.querySelector("#featured-projects");
const allProjectsSection = document.querySelector("#all-projects");
const projectCount = document.querySelector("#project-count");

function renderProjects(projectList, target, featured = false) {
  target.replaceChildren();

  projectList.forEach((project) => {
    const card = document.createElement("article");
    const title = document.createElement("h4");
    const summary = document.createElement("p");
    const stack = document.createElement("ul");
    const links = document.createElement("div");
    const repositoryLink = document.createElement("a");

    card.classList.add("project-card");
    title.textContent = project.title;
    summary.textContent = project.summary;
    stack.classList.add("project-stack");
    project.stack.forEach((technology) => {
      const item = document.createElement("li");
      item.textContent = technology;
      stack.append(item);
    });

    links.classList.add("project-links");
    repositoryLink.href = project.repo;
    repositoryLink.textContent = "Find repository";
    repositoryLink.target = "_blank";
    repositoryLink.rel = "noopener noreferrer";
    links.append(repositoryLink);

    if (project.caseStudy) {
      const caseStudyLink = document.createElement("a");
      caseStudyLink.href = project.caseStudy;
      caseStudyLink.textContent = "Case study";
      links.append(caseStudyLink);
    }

    if (project.live) {
      const liveLink = document.createElement("a");
      liveLink.href = project.live;
      liveLink.textContent = "Live site";
      liveLink.target = "_blank";
      liveLink.rel = "noopener noreferrer";
      links.append(liveLink);
    }

    card.append(title, summary, stack, links);
    if (featured) {
      const badge = document.createElement("span");
      badge.classList.add("featured-badge");
      badge.textContent = "Featured";
      card.prepend(badge);
    }
    target.append(card);
  });
}

function filterProjects(category) {
  const visibleProjects = category === "all"
    ? projects
    : projects.filter((project) => project.category === category);
  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const otherProjects = visibleProjects.filter((project) => !project.featured);

  renderProjects(featuredProjects, featuredGrid, true);
  renderProjects(otherProjects, allProjectsGrid);
  featuredSection.hidden = featuredProjects.length === 0;
  allProjectsSection.hidden = otherProjects.length === 0;
  projectCount.textContent = `Showing ${visibleProjects.length} ${visibleProjects.length === 1 ? "project" : "projects"}`;
}

filterProjects("all");

projectFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  projectFilters.querySelectorAll("button[data-filter]").forEach((filterButton) => {
    filterButton.setAttribute("aria-pressed", String(filterButton === button));
  });
  filterProjects(button.dataset.filter);
});

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});
