// ============================================================
// Publications — filter chips + grouped by year
// ============================================================
const NS_PUB = window.MojtabaMasoudinejadDesignSystem_141387;

const TYPE_ORDER = ['All', 'Journal', 'Conference', 'Chapter', 'Dataset', 'Report', 'Thesis'];
const TYPE_LABEL = {
  All: 'All', Journal: 'Journals', Conference: 'Conferences',
  Chapter: 'Chapters', Dataset: 'Datasets', Report: 'Reports', Thesis: 'Theses',
};

function Publications() {
  useLang();
  const [filter, setFilter] = React.useState('All');
  const all = window.PUBLICATIONS;

  const counts = React.useMemo(() => {
    const c = { All: all.length };
    all.forEach((p) => { c[p.type] = (c[p.type] || 0) + 1; });
    return c;
  }, [all]);

  const shown = filter === 'All' ? all : all.filter((p) => p.type === filter);

  // group by year, descending
  const groups = React.useMemo(() => {
    const map = new Map();
    shown.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year).push(p);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [shown]);

  return (
    <section className="pf-section pf-container" id="publications">
      <div className="pf-section-head">
        <div>
          <span className="pf-eyebrow"><Icon name="book-open" /> {t('pubs.eyebrow')}</span>
          <h2 className="pf-section-title">{t('pubs.title')}</h2>
          <p className="pf-section-sub">{t('pubs.sub')}</p>
        </div>
        <a className="pf-scholar-link" href={window.SOCIAL.scholar} target="_blank" rel="noreferrer">
          {t('pubs.scholar')} <Icon name="arrow-up-right" />
        </a>
      </div>

      <div className="pf-filterbar" role="tablist" aria-label="Filter publications by type">
        {TYPE_ORDER.filter((t) => t === 'All' || counts[t]).map((t) => (
          <button key={t} role="tab" aria-selected={filter === t}
            className={'pf-chip' + (filter === t ? ' is-active' : '')}
            onClick={() => setFilter(t)}>
            {TYPE_LABEL[t]} <span className="pf-chip-count">{counts[t] || 0}</span>
          </button>
        ))}
      </div>

      <div className="pf-pub-groups">
        {groups.map(([year, items]) => (
          <div className="pf-pub-group" key={year}>
            <div className="pf-pub-year">{year}</div>
            <div className="pf-pub-list">
              {items.map((p, i) => {
                const inner = (
                  <React.Fragment>
                    <div className="pf-pub-main">
                      <div className="pf-pub-title">{p.title}</div>
                      <div className="pf-pub-authors">{p.authors}</div>
                      <div className="pf-pub-venue">{p.venue}</div>
                    </div>
                    <div className="pf-pub-side">
                      <span className={'pf-pub-type pf-type-' + p.type.toLowerCase()}>{p.type}</span>
                      {p.link && <span className="pf-pub-go"><Icon name="arrow-up-right" /></span>}
                    </div>
                  </React.Fragment>
                );
                return p.link
                  ? <a className="pf-pub-item is-link" href={p.link} target="_blank" rel="noreferrer" key={i}>{inner}</a>
                  : <div className="pf-pub-item" key={i}>{inner}</div>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Publications = Publications;
