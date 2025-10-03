import React from "react";

const AVATAR = `${import.meta.env.BASE_URL}me.jpeg`;
const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;
const GITHUB_HANDLE = "Buman-Erdem";
const GITHUB_URL = `https://github.com/${GITHUB_HANDLE}`;

const LINKS = {
  personalLive: "https://buman-erdem.github.io/Personal-Website/",
  personalRepo: "https://github.com/Buman-Erdem/Personal-Website",
  filmLive: "https://Buman-Erdem.github.io/FilmMoods/",
  filmRepo: "https://github.com/Buman-Erdem/FilmMoods",
};

const PROJECTS = [
  {
    title: "Personal Website",
    desc:
      "This site — responsive portfolio & blog built with React + Tailwind and deployed on GitHub Pages.",
    tags: ["React", "Tailwind", "GitHub Pages"],
    live: LINKS.personalLive,
    repo: LINKS.personalRepo,
  },
  {
    title: "FilmMoods",
    desc:
      "Mood-based movie recommender using client-side cosine similarity over curated embeddings.",
    tags: ["Next.js", "Recommender"],
    live: LINKS.filmLive,
    repo: LINKS.filmRepo,
  },
  {
    title: "To be continued…",
    desc: "More builds are on the way. Stay tuned!",
    tags: ["WIP"],
    wip: true,
  },
];

function Tag({ children }) {
  return (
    <span className="inline-block rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  const Wrapper = ({ children }) =>
    p.wip ? (
      <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">{children}</div>
    ) : (
      <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10 transition hover:-translate-y-[3px] hover:bg-slate-900/80 hover:ring-cyan-500/40">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {!p.wip && (
          <a
            href={p.live}
            className="text-sm text-indigo-300 hover:text-indigo-200 underline"
            target="_blank"
            rel="noreferrer"
          >
            Live →
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      {!p.wip && p.repo && (
        <div className="mt-4">
          <a
            href={p.repo}
            className="text-sm text-slate-400 hover:text-slate-200 underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      )}
      {p.wip && (
        <div className="mt-4 text-sm bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
          To be continued…
        </div>
      )}
    </Wrapper>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-50">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_20%_-10%,rgba(79,70,229,0.25),transparent_60%),radial-gradient(50%_40%_at_90%_10%,rgba(6,182,212,0.22),transparent_60%)]" />

      {/* NAV */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">BE</a>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid items-center gap-10 md:grid-cols-[190px_1fr]">
          {/* Avatar */}
          <div className="mx-auto h-[190px] w-[190px] rounded-full bg-slate-900/60 p-1 ring-2 ring-indigo-500/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]">
            <div className="h-full w-full overflow-hidden rounded-full bg-slate-800">
              <img
                src={AVATAR}
                alt="Buman-Erdem Enkhbold"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Buman-Erdem Enkhbold
            </h1>

            <p className="mt-2 text-[15px] text-slate-300">
              B.S. Computer Science • B.S. Data Science — UW–Madison
            </p>

            <p className="mt-4 max-w-2xl text-slate-300">
              Seeking <span className="font-medium text-white">Software Engineer</span> roles with a focus on{" "}
              <span className="font-medium text-white">backend and platform</span>. Strong with REST APIs,
              data-heavy services, and React/Next.js frontends. Experienced with enterprise integrations,
              CI/CD, and developer tooling.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-200 ring-1 ring-indigo-500/40">
                C.S. & D.S. double major
              </span>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-200 ring-1 ring-cyan-500/40">
                Dean’s List • GPA 3.7/4.0
              </span>
              <span className="rounded-full bg-slate-800/70 px-3 py-1 text-slate-300 ring-1 ring-white/10">
                Open to relocation & sponsorship
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] hover:opacity-95"
              >
                Contact Me
              </a>
              <a
                href={GITHUB_URL}
                className="rounded-xl bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:ring-indigo-500/40"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={RESUME}
                className="rounded-xl bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:ring-cyan-500/40"
                target="_blank"
                rel="noreferrer"
              >
                Download Résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      {/* (unchanged — keep your sections as before) */}

      {/* ABOUT */}
      {/* (unchanged) */}

      {/* CONTACT */}
      {/* (unchanged) */}

      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4 text-xs text-slate-400">
        © {new Date().getFullYear()} Buman-Erdem Enkhbold
      </footer>
    </div>
  );
}
