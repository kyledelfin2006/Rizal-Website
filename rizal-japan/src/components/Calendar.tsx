import { useState } from "react";
import { dayEvents } from "../data/content";
import Badge from "./Badge";

// 1888 was a leap year, so there is a 29 February. Day 1 is 28 February.
const START = Date.UTC(1888, 1, 28);
const DAY = 86_400_000;
const TOTAL = 45;

function iso(t: number) {
  return new Date(t).toISOString().slice(0, 10);
}

interface Cell {
  t: number;
  inTrip: boolean;
  n: number | null;
}

function buildCells(): Cell[] {
  const first = new Date(START);
  const lead = first.getUTCDay(); // pad back to Sunday
  const cells: Cell[] = [];
  const total = Math.ceil((lead + TOTAL) / 7) * 7;
  for (let i = 0; i < total; i++) {
    const t = START + (i - lead) * DAY;
    const idx = i - lead;
    cells.push({ t, inTrip: idx >= 0 && idx < TOTAL, n: idx >= 0 && idx < TOTAL ? idx + 1 : null });
  }
  return cells;
}

const cells = buildCells();
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function longDate(t: number) {
  return new Date(t).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function Calendar() {
  const [sel, setSel] = useState(dayEvents[0].iso);
  const ev = dayEvents.find((e) => e.iso === sel)!;

  return (
    <section id="days" className="sec" aria-labelledby="days-h">
      <div className="wrap">
        <h2 id="days-h">The 45 days, day by day</h2>
        <p className="lede">
          Each square is one day, from arrival on 28 February to departure on 13 April. Tap a yellow day to read what
          happened. The unmarked days are where the sources go quiet.
        </p>

        <div className="cal">
          <div className="cal__grid" role="group" aria-label="Calendar of Rizal's 45 days in Japan">
            {weekdays.map((w) => (
              <span key={w} className="cal__wd" aria-hidden="true">
                {w}
              </span>
            ))}
            {cells.map((c) => {
              const id = iso(c.t);
              const e = dayEvents.find((d) => d.iso === id);
              const d = new Date(c.t);
              const month = d.getUTCDate() === 1 || c.n === 1 ? d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }) : "";
              const cls = ["cal__day", c.inTrip ? "is-trip" : "is-off", e ? "has-event" : "", sel === id && e ? "is-sel" : ""].join(" ");
              const content = (
                <>
                  <span className="cal__n">{c.inTrip ? d.getUTCDate() : ""}</span>
                  {month && c.inTrip && <span className="cal__m">{month}</span>}
                </>
              );
              return e ? (
                <button key={id} className={cls} onClick={() => setSel(id)} aria-pressed={sel === id} aria-label={`${longDate(c.t)}: ${e.label}`}>
                  {content}
                </button>
              ) : (
                <span key={id} className={cls} aria-label={c.inTrip ? `${longDate(c.t)}, day ${c.n}` : undefined}>
                  {content}
                </span>
              );
            })}
          </div>

          <aside className="cal__card" aria-live="polite">
            <p className="cal__date">{longDate(Date.parse(ev.iso))}</p>
            <h3>{ev.label}</h3>
            <Badge level={ev.confidence} />
            <p className="cal__count">
              Day {Math.round((Date.parse(ev.iso) - START) / DAY) + 1} of {TOTAL}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
