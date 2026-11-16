import { confidenceHelp, confidenceLabel, Confidence, credits, peopleCredits, disclaimer, furtherReading, sources } from "../data/content";
import { useEffect, useRef } from "react";
import Badge from "./Badge";

// Collapsible on phones, open on larger screens.
function Fold({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.open = window.matchMedia("(min-width: 761px)").matches;
  }, []);
  return (
    <details ref={ref} className="fold">
      <summary>
        <h3>{title}</h3>
      </summary>
      {children}
    </details>
  );
}

export default function Sources() {
  const levels: Confidence[] = ["biography", "repeated", "differ"];
  return (
    <section id="sources" className="sec sec--paper" aria-labelledby="sources-h">
      <div className="wrap">
        <h2 id="sources-h">Sources and credits</h2>

        <h3>How to read the badges</h3>
        <dl className="legend">
          {levels.map((l) => (
            <div key={l}>
              <dt>
                <Badge level={l} />
              </dt>
              <dd>{confidenceHelp[l]}</dd>
            </div>
          ))}
        </dl>
        <p className="note">{disclaimer}</p>

        <Fold title="References">
        <ul className="refs">
          {sources.map((s) => (
            <li key={s.label}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
              <span className="refs__used">{s.used}</span>
            </li>
          ))}
        </ul>
        </Fold>

        <Fold title="For further reading">
        <ul className="refs">
          {furtherReading.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        </Fold>

        <Fold title="Image credits">
        <ul className="refs">
          {[...credits, ...peopleCredits].map((c) => (
            <li key={c.what}>
              <strong>{c.what}.</strong> {c.who}. {c.licence}.
            </li>
          ))}
        </ul>
        </Fold>
        <p className="note">
          Badge names: {levels.map((l) => confidenceLabel[l]).join(", ")}.
        </p>
      </div>
    </section>
  );
}
