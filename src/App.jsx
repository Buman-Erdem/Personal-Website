import React from "react";

const AVATAR = `${import.meta.env.BASE_URL}me.jpeg`;
const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;
const GITHUB_HANDLE = "Buman-Erdem";
const GITHUB_URL = `https://github.com/${GITHUB_HANDLE}`;

const LINKS = {
  personalLive: "https://buman-erdem.github.io/Personal-Website/",
  filmLive: "https://Buman-Erdem.github.io/FilmMoods/",
};

const PROJECTS = [
  {
    title: "Personal Website",
    desc:
      "This site — responsive portfolio & blog built with React + Tailwind and deployed on GitHub Pages.",
    tags: ["React", "Tailwind", "GitHub Pages"],
    link: LINKS.personalLive,
  },
  {
    title: "FilmMoods",
    desc:
      "Mood-based movie recommender using client-side cosine similarity over curated embeddings.",
    tags: ["Next.js", "Recommender"],
    link: LINKS.filmLive,
  },
  {
    title: "To be continued…",
    desc: "More builds are on the way. Stay tuned!",
    tags: ["WIP"],
    link: "#",
  },
];

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
          {/* Avatar with perfect framing */}
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

            {/* Majors */}
            <p className="mt-2 text-[15px] text-slate-300">
              B.S. Computer Science • B.S. Data Science — UW–Madison
            </p>

            {/* Job-seeking summary */}
            <p className="mt-4 max-w-2xl text-slate-300">
              Seeking <span className="font-medium text-white">Software Engineer</span> roles with a focus on{" "}
              <span className="font-medium text-white">backend and platform</span>. Strong with REST APIs,
              data-heavy services, and React/Next.js frontends. Experienced with enterprise integrations,
              CI/CD, and developer tooling.
            </p>

            {/* Chips */}
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

            {/* CTAs */}
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
            <a
              key={p.title}
              href={p.link}
              className="group rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10 transition hover:-translate-y-[3px] hover:bg-slate-900/80 hover:ring-cyan-500/40"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-slate-400 group-hover:text-cyan-300">→</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — bigger company names */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <div className="mt-6 space-y-6">
          {/* INTEL */}
          <div className="rounded-2xl bg-slate-900/60 p-5 ring-2 ring-indigo-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Bigger company name */}
                <span className="rounded-lg bg-indigo-500/15 px-3 py-1 text-sm font-semibold text-indigo-300 ring-1 ring-indigo-500/30">
                  INTEL
                </span>
                <div className="text-base font-semibold">Software Engineering Intern</div>
              </div>
              <div className="text-xs text-slate-400">May–Aug 2025</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
              <li>
                Built authenticated <span className="font-medium text-white">Jira REST</span> integrations to sync HSD-ES records; refactored legacy scripts for maintainability.
              </li>
              <li>
                Upgraded GCC 9.2.0 → 12.2.0; fixed CI unit tests and stabilized builds across environments.
              </li>
              <li>
                Improved developer workflow with automated static analysis (Coverity/CppDepend) and expanded test coverage (Bullseye) on SLES15.
              </li>
            </ul>
          </div>

          {/* ARTLAB */}
          <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/30">
                  ARTLAB
                </span>
                <div className="text-base font-semibold">Backend Developer Intern</div>
              </div>
              <div className="text-xs text-slate-400">Jun–Sep 2024</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
              <li>Integrated TelcoCommunication API to centralize client call history and automate workflows.</li>
              <li>Tuned SQL and added robust error handling to protect data integrity and reliability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
            <h3 className="font-medium">Education</h3>
            <p className="mt-2 text-sm text-slate-300">
              University of Wisconsin–Madison — B.S. Computer Science & B.S. Data Science (May 2026). Dean’s List (2022–2024), GPA 3.7/4.0.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Coursework: Data Structures, OOP in Java, DBMS, Big Data Systems, AI, UI Design, Linear Algebra, Calculus I–III.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
            <h3 className="font-medium">Tech</h3>
            <p className="mt-2 text-sm text-slate-300">
              Java, C/C++, Python, JavaScript/TypeScript, React, Next.js, Node, SQL, AWS (Lambda, API Gateway, S3, Glue, Bedrock), Git/GitHub, Docker basics.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
          <div>
            Email:{" "}
            <a className="text-cyan-300 underline" href="mailto:bumanerdem2004@gmail.com">
              bumanerdem2004@gmail.com
            </a>
          </div>
          <div>
            Phone: <a className="underline" href="tel:+16089606679">(608) 960-6679</a>
          </div>
          <div>
            GitHub:{" "}
            <a className="text-cyan-300 underline" href={GITHUB_URL} target="_blank" rel="noreferrer">
              github.com/{GITHUB_HANDLE}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4 text-xs text-slate-400">
        © {new Date().getFullYear()} Buman-Erdem Enkhbold
      </footer>
    </div>
  );
}
