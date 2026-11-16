import { legs } from "../data/content";

export default function Voyage() {
  return (
    <section id="voyage" className="sec" aria-labelledby="voyage-h">
      <div className="wrap">
        <h2 id="voyage-h">Japan was a stop on a longer voyage</h2>
        <p className="lede">
          Rizal left Manila in February 1888 with Europe as his goal. Japan came in the middle, and it became the part
          of the trip he remembered most warmly.
        </p>
        <ol className="legs">
          {legs.map((l) => (
            <li key={l.place} className={l.japan ? "leg leg--japan" : "leg"}>
              <span className="leg__dot" aria-hidden="true" />
              <h3>{l.place}</h3>
              <p>{l.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
