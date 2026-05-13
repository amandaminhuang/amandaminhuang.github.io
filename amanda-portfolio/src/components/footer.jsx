export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__center">
        <p className="footer__tagline">Made with iced chai and love © Amanda 2026</p>
        <div className="footer__links">
          <a href="mailto:amanda.huang@yale.edu" className="footer__link">
            ✉️ amanda.huang@yale.edu
          </a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="footer__linkedin">
            in
          </a>
        </div>
        <button className="footer__top" onClick={scrollToTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}