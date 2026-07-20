// Renders the page from the content defined in data.js.

function renderProfile() {
  document.getElementById("name").textContent = PROFILE.name;
  document.getElementById("role").textContent = PROFILE.role;
  document.getElementById("sub").textContent = PROFILE.sub;
  document.getElementById("about-text").textContent = PROFILE.about;
  document.getElementById("status-text").textContent = PROFILE.status;
  document.title = `${PROFILE.name} — ${PROFILE.role}`;
}

function renderStack() {
  const container = document.getElementById("stack");
  container.innerHTML = STACK
    .map(tech => `<span class="tag">${tech}</span>`)
    .join("");
}

function renderLinks() {
  const container = document.getElementById("links");
  container.innerHTML = LINKS
    .map(link => `
      <a class="link-row active" href="${link.href}"
         ${link.external ? 'target="_blank" rel="noopener"' : ""}>
        <div class="link-main">
          <span class="link-title">${link.title}</span>
          <span class="link-sub">${link.sub}</span>
        </div>
        <span class="link-arrow">→</span>
      </a>
    `)
    .join("");
}

function renderBuildLog() {
  const log = document.getElementById("log");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    log.innerHTML = BUILD_LOG.map(line => line.text).join("\n");
    return;
  }

  let elapsed = 0;
  BUILD_LOG.forEach((line, i) => {
    elapsed += line.delay;
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "log-line";
      el.innerHTML = line.text;
      log.appendChild(el);

      if (i === BUILD_LOG.length - 1) {
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        log.appendChild(cursor);
      } else {
        log.appendChild(document.createTextNode("\n"));
      }
    }, elapsed);
  });
}

function init() {
  renderProfile();
  renderStack();
  renderLinks();
  renderBuildLog();
}

document.addEventListener("DOMContentLoaded", init);