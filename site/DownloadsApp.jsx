// ============================================================
// Downloads page — nav + downloads + footer
// ============================================================
function DownloadsPage() {
  useLang();
  return (
    <div className="pf">
      <SiteNav current="downloads" />
      <header className="pf-section pf-container" style={{ paddingBottom: 0 }}>
        <span className="pf-eyebrow"><Icon name="download" /> {t('downloads.eyebrow')}</span>
        <h1 className="pf-page-title">{t('downloads.title')}</h1>
        <p className="pf-page-sub">{t('downloads.sub')}</p>
      </header>
      <Downloads />
      <SiteFooter />
    </div>
  );
}

window.DownloadsPage = DownloadsPage;
