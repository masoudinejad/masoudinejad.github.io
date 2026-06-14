// ============================================================
// App shell — sticky nav, contact, footer (shared) + home page
// ============================================================
const NS_APP = window.MojtabaMasoudinejadDesignSystem_141387;

const scrollTo = (id) => (e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

function Brand({ home }) {
  return home
    ? <a className="mm-navbar__brand" href="#top" onClick={scrollTo('top')}>Mojtaba Masoudinejad</a>
    : <a className="mm-navbar__brand" href="index.html">Mojtaba Masoudinejad</a>;
}

// Shared sticky nav. current ∈ 'home' | 'experience' | 'pubs' | 'downloads'
function SiteNav({ current }) {
  useLang(); // subscribe to language changes
  const { Navbar, NavLink, NavLinks, NavSpacer, NavActions, ThemeToggle, Button } = NS_APP;
  const home = current === 'home';
  return (
    <Navbar brand={<Brand home={home} />}>
      <NavLinks>
        <NavLink active={home} {...(home ? { href: '#about', onClick: scrollTo('about') } : { href: 'index.html#about' })}>{t('nav.about')}</NavLink>
        <NavLink href="experience.html" active={current === 'experience'}>{t('nav.experience')}</NavLink>
        <NavLink href="publications.html" active={current === 'pubs'}>{t('nav.publications')}</NavLink>
        <NavLink href="downloads.html" active={current === 'downloads'}>{t('nav.downloads')}</NavLink>
      </NavLinks>
      <NavSpacer />
      <NavActions>
        <LangToggle />
        <ThemeToggle />
        <Button size="sm" variant="primary"
          onClick={home ? scrollTo('contact') : () => { window.location.href = 'index.html#contact'; }}>
          {t('nav.contact')}
        </Button>
      </NavActions>
    </Navbar>
  );
}

function Teaser({ href, icon, eyebrow, title, sub, cta }) {
  return (
    <a className="pf-teaser" href={href}>
      <div>
        <span className="pf-eyebrow"><Icon name={icon} /> {eyebrow}</span>
        <div className="pf-teaser-title">{title}</div>
        <p className="pf-teaser-sub">{sub}</p>
      </div>
      <span className="pf-teaser-cta">
        <span className="pf-contact-link" style={{ display: 'flex' }}>
          <span className="pf-contact-link-icon"><Icon name={icon} /></span>
          <span className="pf-contact-link-label">{cta}</span>
          <span className="pf-contact-link-go"><Icon name="arrow-right" /></span>
        </span>
      </span>
    </a>
  );
}

function HomeTeasers() {
  useLang();
  return (
    <section className="pf-section pf-container pf-teaser-stack" style={{ paddingBlock: 'var(--space-10)' }}>
      <Teaser
        href="experience.html"
        icon="briefcase"
        eyebrow={t('nav.experience')}
        title={window.POSITIONS.length + ' ' + t('home.teaserRoles')}
        sub={t('home.teaserSub')}
        cta={t('home.teaserCta')}
      />
    </section>
  );
}

function ContactSection() {
  useLang();
  const S = window.SOCIAL;
  const { Button } = NS_APP;
  const links = [
    { label: 'Email', icon: 'mail', href: 'mailto:' + S.email },
    { label: 'GitHub', icon: 'github', href: S.github },
    { label: 'LinkedIn', icon: 'linkedin', href: S.linkedin },
    { label: 'Google Scholar', icon: 'graduation-cap', href: S.scholar },
    { label: 'ORCID', icon: 'orcid', href: S.orcid },
  ];
  return (
    <section className="pf-contact" id="contact">
      <div className="pf-container">
        <div className="pf-contact-card">
          <div className="pf-contact-copy">
            <span className="pf-eyebrow"><Icon name="mail" /> {t('contact.eyebrow')}</span>
            <h2 className="pf-section-title">{t('contact.title')}</h2>
            <p className="pf-contact-lede">{t('contact.lede')}</p>
          </div>
          <div className="pf-contact-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="pf-contact-link">
                <span className="pf-contact-link-icon"><Icon name={l.icon} /></span>
                <span className="pf-contact-link-label">{l.label}</span>
                <span className="pf-contact-link-go"><Icon name="arrow-right" /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ home }) {
  useLang();
  return (
    <footer className="pf-footer">
      <div className="pf-container pf-footer-grid">
        <div className="pf-footer-note">© {new Date().getFullYear()} Mojtaba Masoudinejad</div>
        {home
          ? <a className="pf-footer-top" href="#top" onClick={scrollTo('top')}>{t('footer.backTop')} <Icon name="arrow-up-right" /></a>
          : <a className="pf-footer-top" href="index.html">{t('footer.backHome')} <Icon name="arrow-up-right" /></a>}
      </div>
    </footer>
  );
}

function App() {
  useLang();
  return (
    <div className="pf">
      <SiteNav current="home" />
      <Hero />
      <HomeTeasers />
      <ContactSection />
      <SiteFooter home />
    </div>
  );
}

Object.assign(window, { SiteApp: App, SiteNav, ContactSection, SiteFooter });
