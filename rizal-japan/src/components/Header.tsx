import { nav } from "../data/content";

export default function Header({ active }: { active: string }) {
  return (
    <header className="top">
      <a className="top__brand" href="#top">
        <span className="top__sun" aria-hidden="true" />
        Rizal sa Japan
      </a>
      <nav className="top__nav" aria-label="Sections">
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
