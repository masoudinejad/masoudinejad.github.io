// ============================================================
// i18n — translations, t(), useLang(), LangToggle
// ============================================================

// Initialise from localStorage
window.LANG = localStorage.getItem('lang') || 'en';

const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About', experience: 'Experience', publications: 'Publications',
      downloads: 'Downloads', contact: 'Contact',
    },
    hero: {
      eyebrow: 'Senior ML engineer · Bosch Center for AI',
      bio1a: 'is a senior machine learning engineer at the',
      bio1b: 'in Renningen, Germany. With a PhD from TU Dortmund and roots in',
      bio1c: 'Iran, he brings over a decade of experience at the intersection of rigorous science and the systems that put it to work: machine learning, cyber-physical systems, energy harvesting, and ultra-low-power embedded devices.',
      bio2a: 'His work focuses on',
      bio2b: 'efficient, resource-aware machine learning',
      bio2c: ': AI that is not only accurate, but practical under real-world compute and energy constraints. With over',
      bio2d: '200 citations',
      bio2e: 'and collaborations spanning TU Dortmund, ETH Zurich, Fraunhofer IML and Bosch, his research bridges the academic and industrial ML communities.',
      metaLocation: 'Renningen, Germany',
      metaPhd: 'PhD, TU Dortmund',
      metaPubs: 'publications',
    },
    now: { heading: 'Currently', role: 'Role', at: 'At' },
    about: { eyebrow: 'About', title: 'A short introduction' },
    experience: {
      eyebrow: 'Roles', title: "Where I've worked",
      awardsEyebrow: 'Honours', awardsTitle: 'Awards & recognition',
      teachingEyebrow: 'Teaching', teachingTitle: 'Courses & laboratories',
      eduEyebrow: 'Education', eduTitle: 'Where I studied',
      skillsEyebrow: 'Skills', skillsTitle: 'Tools & technologies',
      fieldsLabel: 'Fields of interest',
    },
    expPage: {
      eyebrow: 'Experience',
      title: 'A decade of research & engineering',
      sub: 'From energy harvesting and cyber-physical systems at TU Dortmund to resource-aware machine learning at the Bosch Center for AI. Roles, degrees and fields that shaped the work.',
    },
    pubs: {
      eyebrow: 'Publications', title: 'Papers, datasets & reports',
      sub: 'A complete record — journals, conference papers, open datasets, theses and technical reports.',
      scholar: 'Google Scholar',
    },
    pubsPage: {
      eyebrow: 'Publications',
      title: 'Papers, datasets & reports',
      sub: 'A complete record of journals, conference papers, open datasets, theses and technical reports.',
    },
    downloads: {
      eyebrow: 'Downloads', title: 'Files & documents',
      sub: 'CV, public key for encrypted communication, and certificates. All files are provided as-is.',
      cats: {
        'CV & Résumé': 'CV & Résumé', 'Cryptography': 'Cryptography',
        'Academic': 'Academic', 'Soft skills': 'Soft skills',
        'Specializations': 'Specializations', 'Courses': 'Courses',
      },
    },
    contact: {
      eyebrow: 'Get in touch', title: "Let's talk",
      lede: 'Always happy to discuss machine learning, resource-aware systems, or a good research problem.',
    },
    footer: { backTop: 'Back to top', backHome: 'Back home' },
    home: {
      teaserSub: 'A decade across Bosch, TU Dortmund, ML2R and ETH Zurich, plus where I studied and the fields I work in.',
      teaserCta: 'View experience',
      teaserRoles: 'research & engineering roles',
    },
    verifyLabel: 'Verify',
    downloadLabel: 'Download',
  },

  de: {
    nav: {
      about: 'Über mich', experience: 'Erfahrung', publications: 'Publikationen',
      downloads: 'Downloads', contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Senior-ML-Ingenieur · Bosch Center for AI',
      bio1a: 'ist Senior-Ingenieur für maschinelles Lernen am',
      bio1b: 'in Renningen. Mit einem Doktortitel der TU Dortmund und Wurzeln in',
      bio1c: 'Iran, vereint er über ein Jahrzehnt Erfahrung an der Schnittstelle zwischen strenger Wissenschaft und deren praktischer Anwendung: maschinelles Lernen, cyber-physische Systeme, Energy Harvesting und energiearme eingebettete Systeme.',
      bio2a: 'Sein Forschungsschwerpunkt liegt auf',
      bio2b: 'effizientem, ressourcenbewusstem maschinellem Lernen',
      bio2c: ': KI, die nicht nur präzise ist, sondern auch unter realen Rechen- und Energiebeschränkungen praktisch einsetzbar bleibt. Mit über',
      bio2d: '200 Zitierungen',
      bio2e: 'und Kooperationen mit TU Dortmund, ETH Zürich, Fraunhofer IML und Bosch verbindet seine Forschung die akademische und industrielle ML-Community.',
      metaLocation: 'Renningen, Deutschland',
      metaPhd: 'Promotion, TU Dortmund',
      metaPubs: 'Publikationen',
    },
    now: { heading: 'Aktuell', role: 'Position', at: 'Bei' },
    about: { eyebrow: 'Über mich', title: 'Kurzvorstellung' },
    experience: {
      eyebrow: 'Stationen', title: 'Meine Berufsstationen',
      awardsEyebrow: 'Ehrungen', awardsTitle: 'Auszeichnungen & Anerkennung',
      teachingEyebrow: 'Lehre', teachingTitle: 'Lehrveranstaltungen & Labore',
      eduEyebrow: 'Bildungsweg', eduTitle: 'Mein Bildungsweg',
      skillsEyebrow: 'Kompetenzen', skillsTitle: 'Werkzeuge & Technologien',
      fieldsLabel: 'Fachgebiete',
    },
    expPage: {
      eyebrow: 'Erfahrung',
      title: 'Ein Jahrzehnt Forschung & Ingenieurwesen',
      sub: 'Von Energy Harvesting und cyber-physischen Systemen an der TU Dortmund bis hin zu ressourcenbewusstem maschinellem Lernen am Bosch Center for AI. Die Stationen, Abschlüsse und Fachgebiete, die die Arbeit geprägt haben.',
    },
    pubs: {
      eyebrow: 'Publikationen', title: 'Artikel, Datensätze & Berichte',
      sub: 'Eine vollständige Übersicht — Zeitschriften, Konferenzbeiträge, offene Datensätze, Dissertationen und technische Berichte.',
      scholar: 'Google Scholar',
    },
    pubsPage: {
      eyebrow: 'Publikationen',
      title: 'Artikel, Datensätze & Berichte',
      sub: 'Eine vollständige Übersicht — Zeitschriften, Konferenzbeiträge, offene Datensätze, Dissertationen und technische Berichte.',
    },
    downloads: {
      eyebrow: 'Downloads', title: 'Dateien & Dokumente',
      sub: 'Lebenslauf, öffentlicher Schlüssel für verschlüsselte Kommunikation und Zertifikate. Alle Dateien werden wie besehen bereitgestellt.',
      cats: {
        'CV & Résumé': 'Lebenslauf', 'Cryptography': 'Kryptographie',
        'Academic': 'Akademisch', 'Soft skills': 'Soziale Kompetenzen',
        'Specializations': 'Spezialisierungen', 'Courses': 'Kurse',
      },
    },
    contact: {
      eyebrow: 'Kontakt', title: 'Schreiben Sie mir',
      lede: 'Ich freue mich über Gespräche zu maschinellem Lernen, ressourcenbewussten Systemen oder interessanten Forschungsfragen.',
    },
    footer: { backTop: 'Nach oben', backHome: 'Zur Startseite' },
    home: {
      teaserSub: 'Ein Jahrzehnt bei Bosch, TU Dortmund, ML2R und ETH Zürich, plus Bildungsweg und Fachgebiete.',
      teaserCta: 'Erfahrung ansehen',
      teaserRoles: 'Forschungs- & Ingenieurstationen',
    },
    verifyLabel: 'Prüfen',
    downloadLabel: 'Herunterladen',
  },
};

// Simple key accessor: t('nav.about')
function t(key) {
  const keys = key.split('.');
  let obj = TRANSLATIONS[window.LANG || 'en'];
  for (const k of keys) { if (obj == null) return key; obj = obj[k]; }
  return obj != null ? obj : key;
}

// Hook: subscribes component to language changes
function useLang() {
  const [lang, setLang] = React.useState(window.LANG || 'en');
  React.useEffect(() => {
    const handler = () => setLang(window.LANG);
    window.addEventListener('langchange', handler);
    return () => window.removeEventListener('langchange', handler);
  }, []);
  return lang;
}

// Language toggle button for the nav
function LangToggle() {
  const lang = useLang();
  const { Button } = window.MojtabaMasoudinejadDesignSystem_141387;
  function toggle() {
    const next = lang === 'en' ? 'de' : 'en';
    window.LANG = next;
    localStorage.setItem('lang', next);
    window.dispatchEvent(new Event('langchange'));
  }
  return (
    <Button variant="secondary" size="sm" onClick={toggle} aria-label="Switch language"
      style={{ fontFamily: 'var(--font-mono)', letterSpacing: 'var(--tracking-wide)' }}>
      {lang === 'en' ? 'DE' : 'EN'}
    </Button>
  );
}

Object.assign(window, { t, useLang, LangToggle });
