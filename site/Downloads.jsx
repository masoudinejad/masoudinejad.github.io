// ============================================================
// Downloads — CV, PGP key, certificates, courses
// ============================================================

function DownloadTypeBadge({ type }) {
  const colors = { PDF: 'var(--ocean-500)', ASC: 'var(--moss-500)', default: 'var(--stone-400)' };
  return <span className="dl-type-badge" style={{ color: colors[type] || colors.default }}>{type}</span>;
}

function CopyButton({ text }) {
  const [copied, setCopied] = React.useState(false);
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button className="dl-copy-btn" onClick={copy} title="Copy to clipboard">
      <Icon name={copied ? 'check' : 'copy'} size="14" />
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function DownloadCard({ item }) {
  useLang();
  return (
    <div className="dl-card">
      <div className="dl-card-head">
        <DownloadTypeBadge type={item.type || 'PDF'} />
        {item.year && <span className="dl-card-year">{item.year}</span>}
      </div>
      <div className="dl-card-name">{item.name}</div>
      {item.issuer && <div className="dl-card-meta">{item.issuer}</div>}
      {item.desc && <div className="dl-card-desc">{item.desc}</div>}
      <div className="dl-card-foot">
        <a className="dl-btn" href={item.file} download>
          <Icon name="download" size="15" />{t('downloadLabel')}
        </a>
      </div>
    </div>
  );
}

function DownloadListItem({ item }) {
  useLang();
  return (
    <div className="dl-list-item">
      <div className="dl-list-main">
        <span className="dl-list-name">{item.name}</span>
        <span className="dl-list-issuer">
          {item.issuer}{item.year ? ' · ' + item.year : ''}{item.type ? ' · ' + item.type : ''}
        </span>
      </div>
      <div className="dl-list-actions">
        {item.verifyUrl && (
          <a className="dl-list-verify" href={item.verifyUrl} target="_blank" rel="noreferrer">
            {t('verifyLabel')}
          </a>
        )}
        <a className="dl-btn dl-btn--sm" href={item.file} download>
          <Icon name="download" size="13" />{t('downloadLabel')}
        </a>
      </div>
    </div>
  );
}

function DownloadSection({ section }) {
  useLang();
  const label = t('downloads.cats.' + section.category) || section.category;
  if (section.variant === 'grouped-list') {
    return (
      <div className="dl-section">
        <div className="dl-section-head">
          <span className="pf-eyebrow"><Icon name={section.icon} /> {label}</span>
        </div>
        <div className="dl-list">
          {section.groups.map((group) => (
            <React.Fragment key={group.label}>
              <div className="dl-group-label">{group.label}</div>
              {group.items.map((item, i) => (
                <DownloadListItem key={item.file + i} item={item} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (section.variant === 'list') {
    return (
      <div className="dl-section">
        <div className="dl-section-head">
          <span className="pf-eyebrow"><Icon name={section.icon} /> {label}</span>
        </div>
        <div className="dl-list">
          {section.items.map((item, i) => (
            <DownloadListItem key={item.file + i} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dl-section">
      <div className="dl-section-head">
        <span className="pf-eyebrow"><Icon name={section.icon} /> {label}</span>
      </div>
      <div className="dl-grid">
        {section.items.map((item, i) => (
          <DownloadCard key={item.file + i} item={item} />
        ))}
      </div>
    </div>
  );
}

function Downloads() {
  useLang();
  const featured = window.DOWNLOADS.slice(0, 2);
  const rest = window.DOWNLOADS.slice(2);
  return (
    <main className="pf-section pf-container dl-main">
      <div className="dl-featured">
        {featured.map((s) => <DownloadSection key={s.category} section={s} />)}
      </div>
      {rest.map((s) => <DownloadSection key={s.category} section={s} />)}
    </main>
  );
}

window.Downloads = Downloads;
