// ============================================================
// Sections — Hero, Experience, Education, Awards, Teaching, Skills
// ============================================================
const NS_SEC = window.MojtabaMasoudinejadDesignSystem_141387;

function Hero() {
  useLang();
  return (
    <header className="pf-hero" id="top">
      <div className="pf-container pf-hero-grid">
        <div id="about">
          <span className="pf-eyebrow"><Icon name="flask" /> {t('hero.eyebrow')}</span>
          <div className="pf-prose pf-hero-prose">
            <p>
              <strong>Mojtaba Masoudinejad</strong> <span className="pf-farsi">(مجتبی مسعودی نژاد)</span>,
              {window.LANG === 'de' ? ' bekannt als ' : ' known as '}
              <strong>Moji</strong>, {t('hero.bio1a')}{' '}
              <a href="https://www.bosch-ai.com" target="_blank" rel="noreferrer">Bosch Center for Artificial Intelligence</a>{' '}
              {t('hero.bio1b')}{' '}
              <a href="https://en.wikipedia.org/wiki/Dezful" target="_blank" rel="noreferrer">Dezful</a>,{' '}
              {t('hero.bio1c')}
            </p>
            <p>
              {t('hero.bio2a')} <strong>{t('hero.bio2b')}</strong>{t('hero.bio2c')} <strong>{t('hero.bio2d')}</strong>{' '}
              {t('hero.bio2e')}
            </p>
          </div>
          <div className="pf-hero-meta">
            <span><Icon name="map-pin" /> {t('hero.metaLocation')}</span>
            <span><Icon name="graduation-cap" /> {t('hero.metaPhd')}</span>
            <span><Icon name="book-open" /> {window.PUBLICATIONS ? window.PUBLICATIONS.length + ' ' + t('hero.metaPubs') : '35 ' + t('hero.metaPubs')}</span>
          </div>
        </div>
        <div className="pf-hero-aside">
          <div className="pf-portrait-wrap">
            <image-slot id="headshot" class="pf-headshot" shape="rounded" radius="20"
              src="uploads/headshot.webp" placeholder="Drop your headshot"></image-slot>
          </div>
          <aside className="pf-now-card">
            <div className="pf-now-head"><span className="pf-now-dot"></span> {t('now.heading')}</div>
            <dl className="pf-now-list">
              <div><dt>{t('now.role')}</dt><dd>Senior ML engineer</dd></div>
              <div><dt>{t('now.at')}</dt><dd>Bosch Center for AI</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </header>
  );
}

function Experience() {
  useLang();
  return (
    <section className="pf-section pf-container" id="experience">
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="briefcase" /> {t('experience.eyebrow')}</span>
          <h2 className="pf-section-title">{t('experience.title')}</h2>
        </div>
      </div>
      <div className="pf-timeline">
        {window.POSITIONS.map((p) => (
          <div className="pf-entry" key={p.role + p.when}>
            <div className="pf-entry-when">{p.when}</div>
            <div>
              <div className="pf-entry-role">
                {p.role}
                {p.now && <span className="pf-now-pill">Now</span>}
              </div>
              <div className="pf-entry-org">{p.org}</div>
              <div className="pf-entry-desc">{p.place}</div>
              {p.bullets && (
                <ul className="pf-entry-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  useLang();
  return (
    <section className="pf-section pf-container" id="awards" style={{ paddingTop: 0 }}>
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="check" /> {t('experience.awardsEyebrow')}</span>
          <h2 className="pf-section-title">{t('experience.awardsTitle')}</h2>
        </div>
      </div>
      <div className="pf-timeline">
        {window.AWARDS.map((a) => (
          <div className="pf-entry" key={a.year + a.title}>
            <div className="pf-entry-when">{a.year}</div>
            <div>
              <div className="pf-entry-role">{a.title}</div>
              <div className="pf-entry-desc">{a.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Teaching() {
  useLang();
  return (
    <section className="pf-section pf-container" id="teaching" style={{ paddingTop: 0 }}>
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="book-open" /> {t('experience.teachingEyebrow')}</span>
          <h2 className="pf-section-title">{t('experience.teachingTitle')}</h2>
        </div>
      </div>
      <div className="pf-timeline">
        {window.TEACHING.map((tc) => (
          <div className="pf-entry" key={tc.when + tc.course}>
            <div className="pf-entry-when">{tc.when}</div>
            <div>
              <div className="pf-entry-role">{tc.course}</div>
              <div className="pf-entry-org">{tc.role}</div>
              <div className="pf-entry-desc">{tc.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  useLang();
  return (
    <section className="pf-section pf-container" id="skills" style={{ paddingTop: 0 }}>
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="flask" /> {t('experience.skillsEyebrow')}</span>
          <h2 className="pf-section-title">{t('experience.skillsTitle')}</h2>
        </div>
      </div>
      <div className="pf-skills-grid">
        {window.SKILLS.map((s) => (
          <div className="pf-skills-group" key={s.category}>
            <div className="pf-skills-cat">{s.category}</div>
            <div className="pf-tags">
              {s.items.map((item) => <span className="pf-field-tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
        <div className="pf-skills-group pf-skills-group--wide">
          <div className="pf-skills-cat">{t('experience.fieldsLabel')}</div>
          <div className="pf-tags">
            {window.FIELDS.map((f) => <span className="pf-field-tag" key={f}>{f}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  useLang();
  return (
    <section className="pf-section pf-container" id="education" style={{ paddingTop: 0 }}>
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="graduation-cap" /> {t('experience.eduEyebrow')}</span>
          <h2 className="pf-section-title">{t('experience.eduTitle')}</h2>
        </div>
      </div>
      <div className="pf-edu-grid">
        {window.EDUCATION.map((e) => (
          <article className="pf-edu-card" key={e.when}>
            <div className="pf-edu-when">{e.when}</div>
            <div className="pf-edu-degree">{e.degree}</div>
            <div className="pf-edu-org">{e.org}</div>
            <p className="pf-edu-detail">{e.detail}</p>
            <div className="pf-edu-advisors"><Icon name="chevron-right" /> {e.advisors}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Experience, Education, Awards, Teaching, Skills });
