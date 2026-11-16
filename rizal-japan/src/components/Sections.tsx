import { useState } from "react";
import { doings, people, parallels, roadOn, visits, quiz } from "../data/content";
import Badge from "./Badge";

const BASE = import.meta.env.BASE_URL;

export function Doings() {
  return (
    <section id="did" className="sec sec--indigo" aria-labelledby="did-h">
      <div className="wrap">
        <h2 id="did-h">What he did in Japan</h2>
        <p className="lede">Four things stand out in the biography. Each starts with the character that sums it up.</p>
        <ul className="doings">
          {doings.map((d) => (
            <li key={d.title} className="doing">
              <span className="doing__kanji" lang="ja" aria-hidden="true">
                {d.kanji}
              </span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <Badge level={d.confidence} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function People() {
  return (
    <section id="people" className="sec sec--sakura" aria-labelledby="people-h">
      <div className="wrap">
        <h2 id="people-h">Who he met along the way</h2>
        <ul className="cast">
          {people.map((p) => (
            <li key={p.name} className="member">
              {p.img ? (
                <figure className="member__fig">
                  <img src={`${import.meta.env.BASE_URL}${p.img}`} alt={`Portrait of ${p.name}`} loading="lazy" />
                  <figcaption>{p.imgNote}</figcaption>
                </figure>
              ) : (
                <div className="member__fig member__fig--none" aria-hidden="true">
                  <span>{p.name.replace(/\(.*\)/, "").trim().split(" ").slice(-1)[0][0]}</span>
                  <small>No known portrait</small>
                </div>
              )}
              <div className="member__body">
                {p.jp && (
                  <span className="member__jp" lang="ja" aria-hidden="true">
                    {p.jp}
                  </span>
                )}
                <h3>{p.name}</h3>
                <p className="member__role">{p.role}</p>
                <p>{p.text}</p>
                <Badge level={p.confidence} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RoadOn() {
  return (
    <section id="onward" className="sec" aria-labelledby="onward-h">
      <div className="wrap">
        <h2 id="onward-h">The road on: America, seen through home</h2>
        <p className="lede">From Yokohama the Belgic carried Rizal across the Pacific. Craig notes how often he measured new places against the Philippines.</p>
        <ul className="roadon">
          {roadOn.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="parallels">
          {parallels.map((p) => (
            <div key={p.seen} className="parallel">
              <p className="parallel__seen">{p.seen}</p>
              <p className="parallel__arrow">Made him think of home</p>
              <p>{p.home}</p>
            </div>
          ))}
        </div>
        <p className="note">All from Craig's biography, taken from Rizal's diary.</p>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="sec sec--fuji" aria-labelledby="visit-h">
      <img className="sec__bg" src={`${BASE}assets/hakone-fuji.jpg`} alt="" loading="lazy" />
      <div className="wrap sec__front">
        <h2 id="visit-h">Walk the route today</h2>
        <p className="lede">Four places to start if you travel to Japan with Rizal in mind.</p>
        <ul className="visits">
          {visits.map((v) => (
            <li key={v.place} className="visit">
              <span className="visit__kanji" lang="ja" aria-hidden="true">
                {v.kanji}
              </span>
              <h3>{v.place}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="credit">Background: View of Mount Fuji from the Hakone Mountains, Kobayashi Kiyochika, 1878.</p>
      </div>
    </section>
  );
}

export function Quiz() {
  const [picks, setPicks] = useState<Record<number, number>>({});
  const score = quiz.filter((q, i) => picks[i] === q.answer).length;
  const done = Object.keys(picks).length === quiz.length;
  return (
    <section id="quiz" className="sec" aria-labelledby="quiz-h">
      <div className="wrap wrap--narrow">
        <h2 id="quiz-h">Check what you learned</h2>
        {quiz.map((q, qi) => {
          const picked = picks[qi];
          return (
            <fieldset key={q.q} className="q" disabled={picked !== undefined}>
              <legend>{q.q}</legend>
              <div className="q__opts">
                {q.options.map((o, oi) => {
                  const state = picked === undefined ? "" : oi === q.answer ? "is-right" : oi === picked ? "is-wrong" : "";
                  return (
                    <button key={o} className={`opt ${state}`} onClick={() => setPicks({ ...picks, [qi]: oi })}>
                      {o}
                    </button>
                  );
                })}
              </div>
              {picked !== undefined && (
                <p className="q__why" role="status">
                  {picked === q.answer ? "Correct. " : "Not quite. "}
                  {q.why}
                </p>
              )}
            </fieldset>
          );
        })}
        {done && (
          <p className="q__score" role="status">
            You got {score} out of {quiz.length}.{" "}
            <button className="link" onClick={() => setPicks({})}>
              Try again
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
