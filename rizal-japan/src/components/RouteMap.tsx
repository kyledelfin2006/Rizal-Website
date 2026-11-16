import { useEffect, useRef, useState } from "react";
import { chapters, mapPoints, PlaceKey } from "../data/content";
import { japanPaths } from "../data/japanPaths";
import Badge from "./Badge";

const BASE = import.meta.env.BASE_URL;

const photos: Record<string, { src: string; alt: string }> = {
  arrive: { src: "yokohama.jpg", alt: "1880s photograph of the foreign settlement at Yokohama" },
  "tokyo-hotel": { src: "ginza.jpg", alt: "Ginza, Tokyo, in the 1880s" },
  "day-trips": { src: "nikko.jpg", alt: "Yomei Mon, the Great Gate at Nikko, in an 1880s photograph" },
};

function Line({ a, b, on, dashed }: { a: PlaceKey; b: PlaceKey; on: boolean; dashed?: boolean }) {
  const p = mapPoints[a];
  const q = mapPoints[b];
  return (
    <line
      x1={p.x}
      y1={p.y}
      x2={q.x}
      y2={q.y}
      className={on ? "route-line is-on" : "route-line"}
      strokeDasharray={dashed ? "2.5 2.5" : undefined}
    />
  );
}

export default function RouteMap() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const on = new Set<PlaceKey>(chapters[active].places);
  const trips = chapters[active].id === "day-trips";

  return (
    <section id="route" className="sec sec--sea" aria-labelledby="route-h">
      <div className="wrap">
        <h2 id="route-h">Where he went</h2>
        <p className="lede">Scroll through the five stops. The map follows along.</p>

        <div className="route">
          <div className="route__map" aria-hidden="true">
            <svg viewBox="525 585 140 138" role="img" aria-label="Map of the Kanto region showing Yokohama, Tokyo, Nikko and Hakone">
              <rect x="525" y="585" width="140" height="138" className="sea" />
              <g className="land">
                {japanPaths.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
              <Line a="yokohama" b="tokyo" on />
              <Line a="tokyo" b="nikko" on={trips} dashed />
              <Line a="tokyo" b="hakone" on={trips} dashed />
              {(Object.keys(mapPoints) as PlaceKey[]).map((k) => {
                const p = mapPoints[k];
                const hot = on.has(k);
                return (
                  <g key={k} className={hot ? "pin is-on" : "pin"}>
                    {hot && <circle cx={p.x} cy={p.y} r="6" className="pin__pulse" />}
                    <circle cx={p.x} cy={p.y} r={hot ? 3.4 : 2.2} className="pin__dot" />
                    <text x={p.x + p.dx} y={p.y + p.dy} className="pin__name" textAnchor={p.dx < 0 ? "end" : "start"}>
                      {p.name}
                    </text>
                    <text x={p.x + p.dx} y={p.y + p.dy + 7} className="pin__kanji" textAnchor={p.dx < 0 ? "end" : "start"}>
                      {p.kanji}
                    </text>
                  </g>
                );
              })}
            </svg>
            <p className="route__credit">Map outline: Lincun and Erida539, CC BY-SA 3.0</p>
          </div>

          <ol className="route__steps">
            {chapters.map((c, i) => {
              const photo = photos[c.id];
              return (
                <li
                  key={c.id}
                  ref={(el) => (refs.current[i] = el)}
                  data-i={i}
                  className={i === active ? "step is-active" : "step"}
                >
                  <p className="step__when">{c.when}</p>
                  <h3>{c.title}</h3>
                  <Badge level={c.confidence} />
                  {photo && <img src={`${BASE}assets/${photo.src}`} alt={photo.alt} className="step__img" loading="lazy" />}
                  {c.body.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                  {c.note && <p className="step__note">{c.note}</p>}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
