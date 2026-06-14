// Icon set — Lucide path data (ISC licensed), copied in for reliability.
// Usage: <Icon name="mail" /> · inherits color (currentColor) and 1.25rem size.
const MM_ICON_PATHS = {
  'arrow-up-right': ['M7 7h10v10', 'M7 17 17 7'],
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'mail': ['rect:2,4,20,16,2', 'm2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7'],
  'github': ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  'linkedin': { vb: '0 0 448 512', fill: true, d: ['M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'] },
  'orcid': { vb: '0 0 512 512', fill: true, d: ['M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.86 83.12-76.91 0-41.68-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.1a19.57 19.57 0 1 1 19.57-19.57 19.57 19.57 0 0 1-19.57 19.57zM300 369h-81V161.27h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.38 368.38 369 300 369z'] },
  'map-pin': ['M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z', 'circle:12,10,3'],
  'file-text': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M16 13H8', 'M16 17H8', 'M10 9H8'],
  'sparkles': ['M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z', 'M20 3v4', 'M22 5h-4'],
  'flask': ['M14 2v6a2 2 0 0 0 .24.96l5.52 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.76-2.96l5.52-10.08A2 2 0 0 0 10 8V2', 'M6.45 15h11.1', 'M8.5 2h7'],
  'book-open': ['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'],
  'graduation-cap': ['M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'],
  'calendar': ['M8 2v4', 'M16 2v4', 'rect:3,4,18,18,2', 'M3 10h18'],
  'quote': ['M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z', 'M6 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z'],
  'external-link': ['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'],
  'download': ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  'copy': ['rect:9,9,13,13,2', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
  'pen-line': ['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'],
  'microscope': ['M6 18h8', 'M3 22h18', 'M14 22a7 7 0 1 0 0-14h-1', 'M9 14h2', 'M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z', 'M12 6V3a1 1 0 0 0-1-1H9'],
  'briefcase': ['M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', 'rect:2,6,20,14,2'],
  'key': ['circle:7.5,15.5,5.5', 'M21 2l-9.6 9.6', 'M15.5 7.5l3 3L22 7l-3-3'],
  'award': ['circle:12,8,6', 'M15.477 12.89L17 22l-5-3-5 3 1.523-9.11'],
  'users': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'circle:9,7,4', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  'chevron-right': ['m9 18 6-6-6-6'],
  'check': ['M20 6 9 17l-5-5'],
};

function Icon({ name, size, className = '', ...rest }) {
  const entry = MM_ICON_PATHS[name];
  const s = size ? { width: size, height: size } : undefined;
  if (!entry) return <svg className={className} style={s} viewBox="0 0 24 24" aria-hidden="true" {...rest}></svg>;

  if (!Array.isArray(entry)) {
    return (
      <svg className={className} style={s} viewBox={entry.vb} fill="currentColor" stroke="none"
        aria-hidden="true" {...rest}>
        {entry.d.map((d, i) => <path key={i} d={d} />)}
      </svg>
    );
  }

  return (
    <svg className={className} style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {entry.filter(Boolean).map((d, i) => {
        if (d.startsWith('circle:')) {
          const [cx, cy, r] = d.slice(7).split(',');
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        if (d.startsWith('rect:')) {
          const [x, y, w, h, rx] = d.slice(5).split(',');
          return <rect key={i} x={x} y={y} width={w} height={h} rx={rx} />;
        }
        return <path key={i} d={d} />;
      })}
    </svg>
  );
}

window.Icon = Icon;
