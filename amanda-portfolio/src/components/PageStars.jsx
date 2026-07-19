// A few real paper-star photos pinned to a page (absolute — they scroll with
// the content, they do NOT follow the viewport). Keep it to 1–2 per page.
// Available star names (sliced from public/stars/): blue, cream, pink, rose,
// gold, plaid, speckle, gray, teal, orange, char.
//
// stars: [{ name, size, top, left|right, dur, spin, delay }]
export default function PageStars({ stars = [] }) {
  return (
    <>
      {stars.map((s, i) => (
        <span
          key={i}
          className="page-star"
          style={{ top: s.top, left: s.left, right: s.right, '--dur': s.dur || '6s', '--delay': s.delay || '0s' }}
        >
          <span className="page-star__spin" style={{ '--spin': s.spin || '13s' }}>
            <img src={`/stars/${s.name}.png`} alt="" width={s.size || 46} style={{ display: 'block', height: 'auto' }} />
          </span>
        </span>
      ))}
    </>
  )
}
