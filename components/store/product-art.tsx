import type { Garment } from "./data"

// Simple flat-lay garment illustrations used until real product photos are added.
const paths: Record<Garment, string> = {
  tshirt:
    "M70 40 L55 45 L25 70 L40 100 L60 88 L60 200 L140 200 L140 88 L160 100 L175 70 L145 45 L130 40 Q100 62 70 40 Z",
  polo:
    "M72 40 L55 45 L25 72 L40 102 L60 90 L60 200 L140 200 L140 90 L160 102 L175 72 L145 45 L128 40 L112 50 L100 72 L88 50 Z",
  shirt:
    "M74 36 L52 44 L22 120 L40 128 L60 84 L60 206 L140 206 L140 84 L160 128 L178 120 L148 44 L126 36 L112 48 L100 60 L88 48 Z",
  jacket:
    "M72 36 L48 46 L20 128 L40 136 L58 90 L58 196 L142 196 L142 90 L160 136 L180 128 L152 46 L128 36 L112 44 L100 52 L88 44 Z",
  panjabi:
    "M76 30 L54 38 L26 118 L44 124 L62 80 L58 222 L142 222 L138 80 L156 124 L174 118 L146 38 L124 30 Q100 44 76 30 Z",
  jeans: "M62 30 L138 30 L146 222 L110 222 L100 96 L90 222 L54 222 Z",
  trouser: "M64 32 L136 32 L142 222 L108 222 L100 100 L92 222 L58 222 Z",
}

const details: Record<Garment, string> = {
  tshirt: "M70 40 Q100 62 130 40",
  polo: "M100 72 L100 104 M72 40 L88 50 M128 40 L112 50",
  shirt: "M100 60 L100 206 M74 36 L100 60 L126 36 M112 100 L128 100 L128 116 L112 116 Z",
  jacket: "M100 52 L100 196 M58 176 L142 176 M68 96 L88 96 L88 116 L68 116 Z M112 96 L132 96 L132 116 L112 116 Z",
  panjabi: "M100 44 L100 120 M58 216 L142 216",
  jeans: "M62 44 L138 44 M100 44 L100 96 M70 44 Q76 64 94 60 M130 44 Q124 64 106 60",
  trouser: "M64 46 L136 46 M100 46 L100 100 M70 58 L82 76 M130 58 L118 76",
}

function isLight(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return (r * 299 + g * 587 + b * 114) / 1000 > 170
}

export function ProductArt({
  garment,
  color,
  className,
}: {
  garment: Garment
  color: string
  className?: string
}) {
  const stroke = isLight(color) ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.35)"
  return (
    <svg viewBox="0 0 200 250" className={className} role="img" aria-hidden="true">
      <ellipse cx="100" cy="236" rx="62" ry="6" fill="rgba(0,0,0,0.08)" />
      <path d={paths[garment]} fill={color} stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={details[garment]} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
