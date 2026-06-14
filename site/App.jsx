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
  useLang();
  const { Navbar, NavLink, NavLinks, NavSpacer, NavActions, ThemeToggle, Button } = NS_APP;
  const home = current === 'home';
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  return (
    <React.Fragment>
      <Navbar brand={<Brand home={home} />}>
        <NavLinks>
          <NavLink active={home} {...(home ? { href: '#about', onClick: scrollTo('about') } : { href: 'index.html#about' })}>{t('nav.about')}</NavLink>
          <NavLink href="experience.html" active={current === 'experience'}>{t('nav.experience')}</NavLink>
          <NavLink href="publications.html" active={current === 'pubs'}>{t('nav.publications')}</NavLink>
          <NavLink href="downloads.html" active={current === 'downloads'}>{t('nav.downloads')}</NavLink>
        </NavLinks>
        <NavSpacer />
        <NavActions>
          <span className="pf-nav-lang"><LangToggle /></span>
          <ThemeToggle />
          <span className="pf-nav-contact">
            <Button size="sm" variant="primary"
              onClick={home ? scrollTo('contact') : () => { window.location.href = 'index.html#contact'; }}>
              {t('nav.contact')}
            </Button>
          </span>
          <button
            className={'pf-hamburger' + (open ? ' is-open' : '')}
            aria-label="Toggle menu" aria-expanded={open}
            onPointerDown={(e) => { e.stopPropagation(); setOpen(o => !o); }}>
            <span /><span /><span />
          </button>
        </NavActions>
      </Navbar>
      {open && (
        <nav className="pf-mobile-nav" onPointerDown={(e) => e.stopPropagation()}>
          <a className={'pf-mobile-link' + (home ? ' is-active' : '')}
            href={home ? '#about' : 'index.html#about'}
            onClick={(e) => { if (home) scrollTo('about')(e); setOpen(false); }}>
            {t('nav.about')}
          </a>
          <a className={'pf-mobile-link' + (current === 'experience' ? ' is-active' : '')} href="experience.html">{t('nav.experience')}</a>
          <a className={'pf-mobile-link' + (current === 'pubs' ? ' is-active' : '')} href="publications.html">{t('nav.publications')}</a>
          <a className={'pf-mobile-link' + (current === 'downloads' ? ' is-active' : '')} href="downloads.html">{t('nav.downloads')}</a>
          <div className="pf-mobile-sep" />
          <a className="pf-mobile-link"
            href={home ? '#contact' : 'index.html#contact'}
            onClick={(e) => { if (home) { scrollTo('contact')(e); } setOpen(false); }}>
            {t('nav.contact')}
          </a>
          <div className="pf-mobile-foot">
            <LangToggle />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </React.Fragment>
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
