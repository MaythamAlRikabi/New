const PALETTES = [
  "bg-rose/40 text-rose-deep",
  "bg-gold/30 text-charcoal",
  "bg-charcoal/10 text-charcoal",
];

function paletteFor(seed: string) {
  const sum = seed
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return PALETTES[sum % PALETTES.length];
}

export default function Avatar({
  initials,
  size = 40,
  className = "",
}: {
  initials: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className={`flex shrink-0 items-center justify-center rounded-full font-serif font-medium ${paletteFor(initials)} ${className}`}
    >
      {initials}
    </div>
  );
}
