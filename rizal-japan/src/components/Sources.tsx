import { confidenceHelp, confidenceLabel, Confidence, credits, disclaimer, furtherReading, sources } from "../data/content";
import Badge from "./Badge";

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

        <h3>References</h3>
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

        <h3>For further reading</h3>
        <ul className="refs">
          {furtherReading.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h3>Image credits</h3>
        <ul className="refs">
          {credits.map((c) => (
            <li key={c.what}>
              <strong>{c.what}.</strong> {c.who}. {c.licence}.
            </li>
          ))}
        </ul>
        <p className="note">
          Badge names: {levels.map((l) => confidenceLabel[l]).join(", ")}.
        </p>
      </div>
    </section>
  );
}
