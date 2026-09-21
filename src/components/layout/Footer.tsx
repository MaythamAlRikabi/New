const COLUMNS = [
  {
    title: "Shop",
    links: ["Skincare", "Nursery", "Feeding", "Toys"],
  },
  {
    title: "Grow",
    links: ["Growth Tracker", "Expert Tips", "Milestone Guide"],
  },
  {
    title: "Company",
    links: ["Our Story", "Pediatric Board", "Community"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/8 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-charcoal">
              Maison <span className="text-gold">Mère</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-charcoal-soft">
              The sanctuary for modern motherhood &amp; child growth.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-charcoal-soft transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal/8 pt-8 text-xs text-charcoal-soft sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Maison Mère. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
