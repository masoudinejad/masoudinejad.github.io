// ============================================================
// Experience page — nav + intro + roles + education + fields
// ============================================================
function ExperiencePage() {
  useLang();
  return (
    <div className="pf">
      <SiteNav current="experience" />
      <header className="pf-section pf-container" style={{ paddingBottom: 0 }}>
        <span className="pf-eyebrow"><Icon name="microscope" /> {t('expPage.eyebrow')}</span>
        <h1 className="pf-page-title">{t('expPage.title')}</h1>
        <p className="pf-page-sub">{t('expPage.sub')}</p>
      </header>
      <Experience />
      <Awards />
      <Teaching />
      <Education />
      <Skills />
      <SiteFooter />
    </div>
  );
}

window.ExperiencePage = ExperiencePage;
