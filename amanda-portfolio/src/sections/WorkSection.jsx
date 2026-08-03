import { useState, useEffect } from 'react'

const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'work',     label: 'Work & Internships' },
  { id: 'research', label: 'Research' },
  { id: 'coding',   label: 'Coding & Projects' },
]

// ── ADD YOUR LINKS & IMAGES HERE ─────────────────────────────────────────────
// image: put a file in /public/work/sacmgmt.png etc, or leave null for emoji
// links: array of { label, href } — renders as pink pill buttons that open
//   a preview modal (PDF/image inline, PPTX/DOC/XLS via Office viewer) with
//   Open/Download actions
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'sacmgmt', category: 'work', emoji: '🩷', color: '#E88C30',
    image: '/worksection/MAI.jpg',
    title: 'MAI Capital Management: Tech Transformation',
    meta: 'Strategy & Ops · Wealth Management · 2025',
    desc: 'Led an evaluation of various wealth management platforms by conducting stakeholder interviews, scoring vendors, researching demos, and presenting a recommendation to leadership that cut projected platform cost by 78%.',
    links: [],
  },
  {
    id: '363', category: 'coding', emoji: '⚗️', color: '#4FA3A5',
    image: null,
    title: 'Global Water and Sanitation Landscape Analysis',
    meta: 'Research · UN · 2026',
    desc: 'Utilized UN census data to understand the global landscape of water and sanitation access, and what drives the disparities between and within countries. Using techniques like PCA, Cluster and Factor Analysis, we uncovered how rural access to water and sanitation serves as an indicator of overall infrastructure conditions.',
    links: [],
  },
  {
    id: 'civic', category: 'work', emoji: '🗳️', color: '#3E7CB1',
    image: '/worksection/dmd.png',
    title: 'Dot Movement Digital: Non-Profit Funding & Curriculum Development',
    meta: 'Civic Tech · Consulting · 2024',
    desc: 'Restructured a CRM system of 500+ donors and researched grants for an Asian American non-profit organization. Additionally launched an Asian American Pacific Islander K-12 Curriculum for schools across the United States.',
    links: [
      {label: 'AANHPI Curriculum: Learn More', href: 'https://www.ocanational.org/k12'}
    ],
  },
  {
    id: 'thurman', category: 'research', emoji: '⚖️', color: '#7A5FA3',
    image: '/worksection/ysm.jpg',
    title: 'Yale School of Management: Thurman Arnold Project',
    meta: 'Policy · Legal Tech · 2025',
    desc: "Built a scalable merger-eligibility review application to flag dangerous mergers and acquisitions under every state's anti-trust requirements. Drafted a State Statute and published a research paper on how unregulated mergers harm consumers. Presented at the New York Attorney General's Office.",
    links: [
      { label: 'View the work', href: 'https://som.yale.edu/centers/thurman-arnold-project-at-yale/student-projects' },
      { label: 'View the deck', href: '/deliverables/tap_slides.pptx' },
    ],
  },
  {
    id: 'ub-carbon', category: 'research', emoji: '⚗️', color: '#4FA3A5',
    image: null,
    title: 'University at Buffalo: Carbon Capture Research',
    meta: 'Research · Environmental · 2023',
    desc: 'Conducted research on sorbent-modification to increase gas uptake for carbon capture, presented internationally at Ritsumeikan University in Japan through the Sakura Science Exchange Program.',
    links: [
     { label: 'View the poster', href: '/deliverables/ssp_carbon_capture.pptx' },
     { label: 'Learn more', href: 'https://engineering.buffalo.edu/chemical-biological/people/faculty-directory.host.html/content/shared/engineering/chemical-biological/profiles/faculty/lin-haiqing.detail.research.html'}
    ],
  },
  {
    id: 'roswell', category: 'research', emoji: '🔬', color: '#C85F82',
    image: null,
    title: 'ST6GAL1 & Breast Cancer — Roswell Park',
    meta: 'Research · Cancer Biology · 2022',
    desc: 'Triple-negative breast cancer (TNBC) is an invasive type of breast cancer that lacks indicators for early diagnosis. Conducted NIH-funded research on how the ST6GAL1 enzyme drives metastasis in TNBC. Presented poster at the Roswell Comprehensive Cancer Center Symposium.',
    links: [
      { label: 'View the poster', href: '/deliverables/roswell_poster.pdf' },
      { label: 'Read the abstract', href: '/deliverables/st6gal1abstract.pdf' },
    ],
  },
  {
    id: 'microplastics', category: 'research', emoji: '🧪', color: '#6FA99E',
    image: null,
    title: 'Ionization & PET Microplastics',
    meta: 'Research · Environmental · 2021',
    desc: 'Researched how ionizing carbon rods by inducing an electric current can increase PET microplastic removal in Water Waste Treatment Plants. Earned 1st place in poster session and 1st place for presentation at the International Student Science Fair.',
    links: [],
  },
  {
    id: 'cryptic', category: 'coding', emoji: '✏️', color: '#D99A2B',
    image: null,
    title: 'Decrypting the Minute Cryptic',
    meta: 'NLP · Machine Learning · 2024',
    desc: 'A two-stage ML pipeline using logistic regression that solves online cryptic crossword clues, reaching 69% classification accuracy on wordplay types.',
    links: [
      { label: 'Read the Paper', href: '/deliverables/LING_FINAL_ACL.pdf' },
      { label: 'View the Deck', href: '/deliverables/mcd.pptx' },
    ],
  },
  {
    id: 'covid-website', category: 'coding', emoji: '🌐', color: '#5B8FC9',
    image: null,
    title: 'Stormont Vail Health: Patient Journey',
    meta: 'Health Equity · Hackathon · 2026',
    desc: "Co-Developed an interactive dashboard for healthcare providers to track and aggregate patient encounters across fragmented hospital encounters. This application ties together clinical events into a streamlined workflow. By delivering dynamic summary statistics based on visits, medical codes, and comprehensive timelines, the application helps medical professionals quickly digest a patient's full medical history. Crucially, we designed the platform to benchmark individual journey lengths against overall hospital norms. This allows clinicians to audit their own care pathways for potential socio-demographic biases and identify if structural barriers, such as a patient's geographic location, are causing dropped check-ins or delayed care. Data is confidential under ASA.",
    links: [
      { label: 'Read more', href: 'https://statistics.yale.edu/posts/2026-04-23-sds-majors-win-best-business-value-at-2026-asa-datafest' },
    ],
  },
]

const VOLUNTEER = [
  { name: 'Chinese American Student Association', role: 'Vice President',      emoji: '🏮' },
  { name: 'Queer + Asian @ Yale',                role: 'Treasurer',            emoji: '🌈' },
  { name: 'Yale Computer Society',               role: 'Events Director',      emoji: '💻' },
  { name: "Women's Leadership Initiative",       role: 'Vice President',       emoji: '👩🏻‍💼' },
  { name: 'Volunteer Income Tax Assistance',     role: 'Coordinator',          emoji: '💰' },
  { name: 'New Haven Community Health Care Van', role: 'Volunteer',            emoji: '💉' },
  { name: 'Yale Pathways to Science',            role: 'Volunteer',            emoji: '🧪' },
  { name: 'HARVEST — Yale Sustainable Food',     role: 'Orientation Leader',   emoji: '👩🏻‍🌾' },
]

const OFFICE_EXTS = ['ppt', 'pptx', 'doc', 'docx', 'xls', 'xlsx']
const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'webp']

function fileKind(href) {
  const ext = href.split('.').pop().toLowerCase()
  if (ext === 'pdf') return 'pdf'
  if (IMAGE_EXTS.includes(ext)) return 'image'
  if (OFFICE_EXTS.includes(ext)) return 'office'
  return 'other'
}

// Office Online's viewer needs a publicly reachable URL, so PPTX/DOC/XLS
// previews only render on the deployed site — not on localhost.
function DeliverableModal({ link, onClose }) {
  const kind = fileKind(link.href)
  const absoluteUrl = new URL(link.href, window.location.origin).href
  const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(absoluteUrl)}`

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="resume-modal" onClick={onClose}>
      <div className="resume-modal__panel" onClick={e => e.stopPropagation()}>
        <div className="resume-modal__bar">
          <span className="resume-modal__title">📄 {link.label}</span>
          <div className="resume-modal__actions">
            <a href={link.href} target="_blank" rel="noreferrer" className="resume-modal__link">Open ↗</a>
            <a href={link.href} download className="resume-modal__link">Download ↓</a>
            <button className="resume-modal__close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        <div className="resume-modal__scroll">
          {kind === 'pdf' && (
            <embed src={link.href} type="application/pdf" className="deliverable-embed" />
          )}
          {kind === 'image' && (
            <img src={link.href} alt={link.label} className="resume-img" />
          )}
          {kind === 'office' && (
            <iframe src={officeViewerUrl} title={link.label} className="deliverable-embed" />
          )}
          {kind === 'other' && (
            <div className="resume-modal__placeholder">
              <p>Preview isn't available for this file type.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ p, onPreview }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="wcard">
      {/* ── image / emoji header ── */}
      <div className="wcard__img-wrap" style={{ '--card-color': p.color }}>
        {p.image && !imgFailed ? (
          <img
            src={p.image}
            alt={p.title}
            className="wcard__img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="wcard__emoji">{p.emoji}</span>
        )}
      </div>

      {/* ── body ── */}
      <div className="wcard__body">
        <h3 className="wcard__title">{p.title}</h3>
        <p className="wcard__meta">{p.meta}</p>
        <p className="wcard__desc">{p.desc}</p>

        {/* ── links ── */}
        {p.links && p.links.filter(l => l.href).length > 0 && (
          <div className="wcard__links">
            {p.links.filter(l => l.href).map(link => (
              <button
                key={link.label}
                type="button"
                className="wcard__pill"
                onClick={() => onPreview(link)}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function WorkSection() {
  const [active, setActive] = useState('all')
  const [previewLink, setPreviewLink] = useState(null)
  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="work" className="section work-section">
      <div className="section__head">
        <h2 className="section__title">work <span className="star">✶</span></h2>
        <p className="section__sub">A constantly-updating pile of things I've built, researched, and shipped.</p>
      </div>

      <div className="work-filters">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`work-filter ${active === c.id ? 'work-filter--active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="wcard-grid">
        {filtered.map(p => <ProjectCard key={p.id} p={p} onPreview={setPreviewLink} />)}
      </div>

      {previewLink && <DeliverableModal link={previewLink} onClose={() => setPreviewLink(null)} />}

      {active === 'all' && (
        <div className="volunteer">
          <h3 className="volunteer__heading">groups &amp; involvement <span className="star">☆</span></h3>
          <div className="volunteer__grid">
            {VOLUNTEER.map((v, i) => (
              <div key={i} className="volunteer__card">
                <span className="volunteer__emoji">{v.emoji}</span>
                <div>
                  <p className="volunteer__name">{v.name}</p>
                  <p className="volunteer__role">{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}