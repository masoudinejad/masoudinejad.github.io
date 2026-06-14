// ============================================================
// Tweaks — live controls for the home page
// ============================================================
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "imageWidth": 280,
  "imageHeight": 333,
  "imageShape": "rounded",
  "showBadge": true,
  "accent": "#2a6f93"
}/*EDITMODE-END*/;

function TweakControls() {
  const { useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakRadio, TweakToggle, TweakColor } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Image size + shape
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--portrait-w', t.imageWidth + 'px');
    r.setProperty('--portrait-h', t.imageHeight + 'px');
    const el = document.getElementById('headshot');
    if (t.imageShape === 'circle') {
      r.setProperty('--portrait-radius', '50%');
      if (el) { el.setAttribute('shape', 'circle'); el.removeAttribute('radius'); }
    } else if (t.imageShape === 'square') {
      r.setProperty('--portrait-radius', '0px');
      if (el) { el.setAttribute('shape', 'rect'); }
    } else {
      r.setProperty('--portrait-radius', '20px');
      if (el) { el.setAttribute('shape', 'rounded'); el.setAttribute('radius', '20'); }
    }
  }, [t.imageWidth, t.imageHeight, t.imageShape]);

  // Accent colour — recolour the ocean accent family cohesively
  React.useEffect(() => {
    const r = document.documentElement.style;
    const c = t.accent;
    r.setProperty('--accent', c);
    r.setProperty('--accent-hover', `color-mix(in srgb, ${c}, #000 14%)`);
    r.setProperty('--accent-active', `color-mix(in srgb, ${c}, #000 26%)`);
    r.setProperty('--accent-text', c);
    r.setProperty('--text-link', c);
    r.setProperty('--accent-border', `color-mix(in srgb, ${c}, transparent 58%)`);
    r.setProperty('--accent-soft', `color-mix(in srgb, ${c}, transparent 88%)`);
    r.setProperty('--accent-soft-hover', `color-mix(in srgb, ${c}, transparent 82%)`);
    r.setProperty('--accent-ring', `color-mix(in srgb, ${c}, transparent 62%)`);
  }, [t.accent]);

  // Badge visibility
  React.useEffect(() => {
    document.body.classList.toggle('tw-hide-badge', !t.showBadge);
  }, [t.showBadge]);

  return (
    <TweaksPanel>
      <TweakSection label="Hero image" />
      <TweakSlider label="Width" value={t.imageWidth} min={200} max={460} step={4} unit="px"
        onChange={(v) => setTweak('imageWidth', v)} />
      <TweakSlider label="Height" value={t.imageHeight} min={240} max={560} step={4} unit="px"
        onChange={(v) => setTweak('imageHeight', v)} />
      <TweakRadio label="Shape" value={t.imageShape} options={['rounded', 'square', 'circle']}
        onChange={(v) => setTweak('imageShape', v)} />
      <TweakToggle label="Collaborate badge" value={t.showBadge}
        onChange={(v) => setTweak('showBadge', v)} />
      <TweakSection label="Brand" />
      <TweakColor label="Accent" value={t.accent}
        options={['#2a6f93', '#537d41', '#c68a2c', '#4290b3']}
        onChange={(v) => setTweak('accent', v)} />
    </TweaksPanel>
  );
}

window.TweakControls = TweakControls;
