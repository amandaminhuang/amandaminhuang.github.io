import PaperStar from './PaperStar'

// A few colored paper stars pinned to a page (absolute — they scroll with the
// content, they do NOT follow the viewport). Keep it to 1–2 per page.
const PALETTES = {
  marigold: { light: '#F8C765', dark: '#E39E1E', stroke: '#B5791A' },
  coral:    { light: '#F4A7AD', dark: '#E06A78', stroke: '#C24E5E' },
  blue:     { light: '#A6C8EA', dark: '#5B8FC9', stroke: '#3E6FA8' },
  green:    { light: '#BEDC93', dark: '#82AF57', stroke: '#5F8A3C' },
  lilac:    { light: '#CFBEEC', dark: '#9E7FC9', stroke: '#7E5EA8' },
}

// stars: [{ color, size, top, left|right, dur, spin, delay }]
export default function PageStars({ stars = [] }) {
  return (
    <>
      {stars.map((s, i) => {
        const c = PALETTES[s.color] || PALETTES.marigold
        const pos = { top: s.top, left: s.left, right: s.right }
        return (
          <span
            key={i}
            className="page-star"
            style={{ ...pos, '--dur': s.dur || '6s', '--delay': s.delay || '0s' }}
          >
            <span className="page-star__spin" style={{ '--spin': s.spin || '13s' }}>
              <PaperStar size={s.size || 30} light={c.light} dark={c.dark} stroke={c.stroke} />
            </span>
          </span>
        )
      })}
    </>
  )
}
