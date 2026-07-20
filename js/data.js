// All editable portfolio content lives here.
// Update this file to change what's shown — no need to touch index.html or main.js.

const PROFILE = {
  name: "Ramón Cherta",
  role: "Applied AI & Full-Stack Developer",
  sub: "3rd-year CS Student · MATCOM, University of Havana",
  about: "I build complete, working systems — from backend logic to the interface people actually use. Recently: an information retrieval system with RAG and LSI search, an LLM-assisted clinical triage optimizer, and a full-stack clinic management platform built with a small team. Open to internship and entry-level opportunities in applied AI or full-stack development.",
  status: "currently training for HYROX, currently learning applied AI/LLMs"
};

const STACK = [
  "Python", "Applied AI", "React", "PostgreSQL", "RAG",
  "C", "Rust", "C++", "C#", ".NET"
];

const LINKS = [
  {
    title: "GitHub",
    sub: "github.com/ChertaPro",
    href: "https://github.com/ChertaPro",
    external: true
  },
  {
    title: "LinkedIn",
    sub: "/in/ramon-cherta",
    href: "https://linkedin.com/in/ramon-cherta-1b3145422",
    external: true
  },
  {
    title: "Email",
    sub: "chertapro@gmail.com",
    href: "mailto:chertapro@gmail.com",
    external: false
  },
  {
    title: "Blog",
    sub: "A New Repo",
    href: "https://chertapro.github.io/a-new-repo/",
    external: true
  }
];

// Each line renders in sequence, `delay` ms after the previous one finished.
const BUILD_LOG = [
  { text: '<span class="prompt">$</span> ./build --target=chertapro.net', delay: 0 },
  { text: '[1/4] linking about.o ..................... <span class="ok">ok</span>', delay: 220 },
  { text: '[2/4] linking stack.o ..................... <span class="ok">ok</span>', delay: 180 },
  { text: '[3/4] linking links.o ..................... <span class="ok">ok</span>', delay: 180 },
  { text: '[4/4] linking footer.o .................... <span class="ok">ok</span>', delay: 180 },
  { text: 'build finished in 0.94s — 0 warnings, 0 errors', delay: 220 }
];