const BASE = import.meta.env.BASE_URL;

function Ship() {
  return (
    <svg viewBox="0 0 160 90" className="ship" role="img" aria-label="The steamer Belgic sailing across the wave">
      <path d="M10 56h140l-16 20H28z" fill="#1B2A5B" />
      <rect x="52" y="34" width="56" height="22" fill="#EBEFF2" />
      <rect x="66" y="12" width="14" height="22" fill="#F2B53C" />
      <rect x="66" y="12" width="14" height="5" fill="#1B2A5B" />
      <rect x="90" y="20" width="10" height="14" fill="#F2B53C" />
      <rect x="90" y="20" width="10" height="4" fill="#1B2A5B" />
      <path d="M5 80c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0" stroke="#fff" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-h">
      <div className="hero__grid">
        <div className="hero__text">
          <p className="hero__dates">28 February to 13 April 1888</p>
          <h1 id="hero-h">
            Rizal sa Japan
            <span className="hero__jp" lang="ja">
              日本の四十五日
            </span>
          </h1>
          <p className="hero__lede">
            A travel guide to the 45 days a 26-year-old Filipino doctor and writer spent in Meiji Japan. See where he
            went, who he met, and what you can still visit today.
          </p>
          <div className="hero__cta">
            <a className="btn" href="#route">
              Follow the route
            </a>
            <a className="btn btn--ghost" href="#days">
              See the 45 days
            </a>
          </div>
          <p className="hero__by">
            Developed by <strong>Aldrin Kyle Delfin</strong>
            <span aria-hidden="true"> · </span>
            <span className="hero__by-class">BS InfoTech - S.E - 2A</span>
          </p>
        </div>

        <figure className="hero__disc">
          <div className="disc">
            <img src={`${BASE}assets/rizal.jpg`} alt="Portrait of José Rizal as a young man" />
          </div>
          <div className="stamp" aria-hidden="true">
            <span lang="ja">横浜</span>
            <small>1888.2.28</small>
          </div>
        </figure>
      </div>

      <div className="hero__sea" aria-hidden="true">
        <img src={`${BASE}assets/great-wave.jpg`} alt="" />
        <Ship />
      </div>
    </section>
  );
}
