// ============================================================
// Publications page — nav + full publication list + footer
// ============================================================
function PubsPage() {
  return (
    <div className="pf">
      <SiteNav current="pubs" />
      <Publications />
      <SiteFooter />
    </div>
  );
}

window.PubsPage = PubsPage;
