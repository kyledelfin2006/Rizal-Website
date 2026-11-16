import { useEffect, useRef, useState } from "react";
import { nav } from "../data/content";

export default function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  // reading progress, written straight to a CSS variable so React does not re-render on scroll
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.current?.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // close on Escape (return focus to the button) and on a tap outside the header
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest(".top")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <header className={open ? "top is-open" : "top"}>
      <a className="top__brand" href="#top" onClick={() => setOpen(false)}>
        <span className="top__sun" aria-hidden="true" />
        Rizal sa Japan
      </a>
      <button
        ref={btn}
        type="button"
        className="top__menu"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className="top__nav" aria-label="Sections">
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={active === n.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <span ref={bar} className="top__progress" aria-hidden="true" />
    </header>
  );
}
