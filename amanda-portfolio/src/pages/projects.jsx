import { Link } from 'react-router-dom'

const WORK_PROJECTS = [
  {
    id: 'deloitte',
    tag: 'Data Analytics · AI',
    title: 'AI Engineering Division — Deloitte',
    emoji: '📊',
    color: 'var(--blue)',
  },
  {
    id: 'kwk-ops',
    tag: 'Operations · Nonprofit',
    title: 'AI & technology strategy for Kode with Klossy grassroots outreach',
    emoji: '⚙️',
    color: 'var(--green)',
  },
  {
    id: 'sacm',
    tag: 'Wealth Management · AI',
    title: 'Platform evaluation & AI strategy for Service Academy Capital Management',
    emoji: '📈',
    color: 'var(--yellow)',
  },
  {
    id: 'civic',
    tag: 'Civic Tech · Consulting',
    title: 'AAPI voter outreach & donor CRM infrastructure — Dot Movement Digital',
    emoji: '🗳️',
    color: 'var(--peach)',
  },
  {
    id: 'thurman',
    tag: 'Policy · Legal Tech',
    title: 'EZ Merge: merger eligibility review app — Thurman Arnold Project',
    emoji: '⚖️',
    color: 'var(--purple)',
  },
  {
    id: 'ub-neural',
    tag: 'Research · ML',
    title: 'Neural network action prediction using ATARI-Head eye gaze data',
    emoji: '🧠',
    color: 'var(--blue)',
  },
  {
    id: 'ub-carbon',
    tag: 'Research · Environmental',
    title: 'Sorbent modification for carbon capture — presented in Japan',
    emoji: '⚗️',
    color: 'var(--green)',
  },
]

const LEADERSHIP_PROJECTS = [
  {
    id: 'ycs-bootcamp',
    tag: 'Education · Community',
    title: 'Y/CS high school CS bootcamp — 600+ schools, 20 countries',
    emoji: '💻',
    color: 'var(--yellow)',
  },
  {
    id: 'ycs-apps',
    tag: 'Product · Software',
    title: '2 Y/CS web apps — 600+ users in first week',
    emoji: '🚀',
    color: 'var(--peach)',
  },
  {
    id: 'casa',
    tag: 'Community · Operations',
    title: 'CASA newsletter, $10K budget & board management — 1,200+ members',
    emoji: '🏮',
    color: 'var(--purple)',
  },
]

const SCHOOL_PROJECTS = [
  {
    id: 'roswell',
    tag: 'Research · Cancer Biology',
    title: 'ST6GAL1 & triple-negative breast cancer metastasis — Roswell Park',
    emoji: '🔬',
    color: 'var(--blue)',
  },
  {
    id: 'microplastics',
    tag: 'Research · Environmental',
    title: 'Ionization to reduce PET microplastics in water treatment',
    emoji: '🧪',
    color: 'var(--peach)',
  },
  {
    id: 'covid-website',
    tag: 'Health Equity · Web',
    title: 'COVID-19 misconceptions website for diverse communities — Weill Cornell',
    emoji: '🌐',
    color: 'var(--green)',
  },
  {
    id: 'kwk-web',
    tag: 'Web · HTML/CSS/JS',
    title: 'Medical disparities website — Kode with Klossy 2021',
    emoji: '🩺',
    color: 'var(--yellow)',
  },
  {
    id: 'kwk-app',
    tag: 'Mobile · Swift',
    title: 'Sustainability app for Gen Z — Kode with Klossy 2022',
    emoji: '🌱',
    color: 'var(--purple)',
  },
  {
    id: 'chicago-bikes',
    tag: 'Data · Civic',
    title: 'Mapping Chicago bike accidents to advocate for safer lanes',
    emoji: '🚲',
    color: 'var(--blue)',
  },
]

function ProjectTile({ project, basePath = '/projects' }) {
  return (
    <Link to={`${basePath}/${project.id}`} className="project-tile">
      {project.src
        ? <img src={project.src} alt={project.title} className="project-tile__image" />
        : <div
            className="project-tile__placeholder"
            style={{ background: project.color }}
          >
            <span className="project-tile__placeholder-emoji">{project.emoji}</span>
            <span className="project-tile__placeholder-label">{project.tag}</span>
          </div>
      }
      <div className="project-tile__overlay">
        <p className="project-tile__overlay-tag">{project.tag}</p>
        <h2 className="project-tile__overlay-title">{project.title}</h2>
        <div className="project-tile__overlay-cta">click to view more ✦</div>
      </div>
    </Link>
  )
}

function Section({ heading, sub, projects, basePath }) {
  return (
    <>
      <h2 style={{ marginTop: '4rem', marginBottom: '0.4rem' }}>{heading} ✦</h2>
      {sub && <p className="projects-page__sub">{sub}</p>}
      <div className="projects-grid-2">
        {projects.map(p => <ProjectTile key={p.id} project={p} basePath={basePath} />)}
      </div>
    </>
  )
}

export default function Projects() {
  return (
    <main className="projects-page">
      <h1>view my works ✦</h1>
      <p className="projects-page__sub">Always in the works — feel free to explore!</p>

      <Section
        heading="work experience"
        sub="Internships, research roles, and consulting projects."
        projects={WORK_PROJECTS}
        basePath="/projects"
      />

      <Section
        heading="leadership"
        sub="Organizations I've helped build and run."
        projects={LEADERSHIP_PROJECTS}
        basePath="/leadership"
      />

      <Section
        heading="school projects"
        sub="Coursework, independent studies, and side builds."
        projects={SCHOOL_PROJECTS}
        basePath="/school"
      />
    </main>
  )
}