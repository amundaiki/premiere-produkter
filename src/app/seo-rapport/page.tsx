import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

function ScoreBar({ score, max = 100 }: { score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color = pct >= 70 ? "var(--green-light)" : pct >= 50 ? "var(--terra-light)" : "var(--terra)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%" }}>
      <div style={{ flex: 1, height: 8, background: "var(--sand-dark)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
      </div>
      <span style={{ fontWeight: 600, fontSize: "0.875rem", color, minWidth: 48, textAlign: "right" }}>{score}/100</span>
    </div>
  );
}

function StatusIcon({ status }: { status: "ok" | "warn" | "critical" }) {
  const map = { ok: { icon: "✓", bg: "#d4edda", color: "#155724" }, warn: { icon: "!", bg: "#fff3cd", color: "#856404" }, critical: { icon: "✗", bg: "#f8d7da", color: "#721c24" } };
  const s = map[status];
  return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: s.bg, color: s.color, fontWeight: 700, fontSize: "0.8rem" }}>{s.icon}</span>;
}

const categories = [
  { name: "Crawlability", score: 40, status: "critical" as const, desc: "robots.txt mangler sitemap-referanse, blokker interne sider og AI-crawlere" },
  { name: "Indexability", score: 45, status: "critical" as const, desc: "9 sider uten SEO-verdi er indeksert (innlogging, vedlikehold, kontohistorikk)" },
  { name: "Security", score: 30, status: "critical" as const, desc: "Alle viktige sikkerhetshoder mangler: HSTS, CSP, X-Frame-Options" },
  { name: "URL-struktur", score: 60, status: "warn" as const, desc: "Konsistent /p/-prefix, men mange URLer er for lange med produktkoder" },
  { name: "Mobil", score: 75, status: "ok" as const, desc: "Responsivt WordPress-tema med lazy loading. Bør verifisere touch targets." },
  { name: "Core Web Vitals", score: 55, status: "warn" as const, desc: "147 KB HTML, 60s cache, mange tredjepartsskript bremser" },
  { name: "Strukturert data", score: 80, status: "ok" as const, desc: "God Organization og BreadcrumbList. Mangler Product-schema." },
  { name: "JS Rendering", score: 55, status: "warn" as const, desc: "SSR er bra, men mange render-blocking skript. GTranslate kan gi duplikat." },
];

const critical = [
  {
    title: "Oppdater robots.txt",
    desc: "Nåværende robots.txt mangler en Sitemap-referanse, blokkerer ingen interne sider, og har unødvendig Crawl-delay som signaliserer serversvakhet.",
    fix: "Legg til Sitemap: https://premiere-produkter.no/sitemap.xml. Fjern Crawl-delay for Googlebot. Legg til Disallow for /velg-kunde/, /logginn/, /maintenance-page/ og lignende interne sider.",
  },
  {
    title: "Legg til sikkerhetshoder i nginx",
    desc: "Ingen av de viktige HTTP-sikkerhetsbeskyttelsene er konfigurert. Dette påvirker både sikkerhet og SEO-signaler.",
    fix: "Legg til Strict-Transport-Security (HSTS), X-Content-Type-Options: nosniff, X-Frame-Options: SAMEORIGIN, og Referrer-Policy i nginx-konfigurasjonen.",
  },
  {
    title: "Sett noindex på interne sider",
    desc: "Sider som /maintenance-page/, /velg-kunde/, /ordre-historikk/, /logginn/, /reset-passord/ er indeksert i Google uten å ha noen SEO-verdi.",
    fix: "Legg til <meta name=\"robots\" content=\"noindex\"> på alle innloggings-, konto- og vedlikeholdssider. Fjern dem fra sitemap.",
  },
];

const high = [
  { title: "Konsolider leveringsbetingelse-sider", desc: "To sider overlapper: /kjop-og-leveringsbetingelser/ og /frakt-og-leveringsbetingelser-hos-premiere-produkter/. Slå sammen til en, redirect den andre med 301." },
  { title: "Legg til Product-schema (JSON-LD)", desc: "Produktsider mangler strukturert data for pris, tilgjengelighet og vurderinger. Dette er viktig for rich results i Google Shopping." },
  { title: "Øk cache-control max-age", desc: "Nåværende max-age er kun 60 sekunder. Statisk innhold bør ha minst 3600s for bedre ytelse og lavere serverbelastning." },
];

const medium = [
  { title: "Optimaliser bilde-alt-tekster", desc: "Mange produktbilder har filnavn som alt-tekst (f.eks. '98394.jpg') i stedet for beskrivende tekst." },
  { title: "Lag AI-crawler-strategi", desc: "GPTBot, ClaudeBot, PerplexityBot og Bytespider er ikke adressert i robots.txt. Vurder om dere vil blokkere AI-trening men tillate AI-søk." },
  { title: "Auditer JS-belastning", desc: "GTM, GA4, Google Ads, Chatbase, GTranslate og CF7 lastes alle synkront. Defer/async kan forbedre Core Web Vitals." },
  { title: "Legg til LocalBusiness-schema", desc: "Som fysisk bedrift bør dere ha LocalBusiness-schema med adresse, telefon og åpningstider for bedre lokal synlighet." },
];

export default function SEORapport() {
  const totalScore = 52;

  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* HERO */}
      <section style={{ background: "var(--green-deep)", paddingTop: "calc(72px + 4rem)", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <p className="animate-in" style={{ color: "var(--terra-light)", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            Teknisk SEO-audit
          </p>
          <h1 className="animate-in delay-1" style={{ fontFamily: "var(--font-display)", color: "var(--sand)", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
            premiere-produkter.no
          </h1>
          <p className="animate-in delay-2" style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem", maxWidth: 540 }}>
            Gjennomgang av crawlability, indexability, sikkerhet, URL-struktur, mobil, Core Web Vitals, strukturert data og JavaScript-rendering.
          </p>
          <p className="animate-in delay-3" style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.8rem", marginTop: "1rem" }}>
            9. april 2026
          </p>
        </div>
      </section>

      {/* TOTAL SCORE */}
      <section style={{ background: "var(--cream)", padding: "3rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "2.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", textAlign: "center" }}>
            <p style={{ color: "var(--text-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Totalvurdering</p>
            <div style={{ fontSize: "4.5rem", fontFamily: "var(--font-display)", color: "var(--terra)", lineHeight: 1 }}>{totalScore}</div>
            <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>av 100</p>
            <div style={{ maxWidth: 400, margin: "1.5rem auto 0" }}>
              <ScoreBar score={totalScore} />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY BREAKDOWN */}
      <section style={{ background: "var(--cream)", padding: "0 0 3rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--green-deep)" }}>Kategorisammendrag</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {categories.map((cat) => (
              <div className="reveal" key={cat.name} style={{ background: "white", borderRadius: 8, padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <StatusIcon status={cat.status} />
                  <span style={{ fontWeight: 600, fontSize: "1rem" }}>{cat.name}</span>
                </div>
                <ScoreBar score={cat.score} />
                <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", marginTop: "0.5rem", lineHeight: 1.5 }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITICAL */}
      <section style={{ background: "var(--sand)", padding: "3rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--green-deep)" }}>Kritiske tiltak</h2>
          <p className="reveal" style={{ color: "var(--text-mid)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bør fikses umiddelbart for å unngå tapt synlighet og sikkerhetsrisiko.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {critical.map((item, i) => (
              <div className="reveal" key={item.title} style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderLeft: "4px solid var(--terra)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ background: "var(--terra)", color: "white", width: 28, height: 28, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{i + 1}</span>
                  <h3 style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.title}</h3>
                </div>
                <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{item.desc}</p>
                <div style={{ background: "var(--sand)", borderRadius: 6, padding: "0.75rem 1rem" }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--green-deep)", marginBottom: "0.25rem" }}>Slik fikser du det:</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: 1.5 }}>{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH PRIORITY */}
      <section style={{ background: "var(--cream)", padding: "3rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--green-deep)" }}>Høy prioritet</h2>
          <p className="reveal" style={{ color: "var(--text-mid)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bør fikses innen 1 uke for bedre indeksering og rich results.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {high.map((item, i) => (
              <div className="reveal" key={item.title} style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderLeft: "4px solid var(--terra-light)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ background: "var(--terra-light)", color: "white", width: 28, height: 28, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{i + 4}</span>
                  <h3 style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.title}</h3>
                </div>
                <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIUM PRIORITY */}
      <section style={{ background: "var(--sand)", padding: "3rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--green-deep)" }}>Middels prioritet</h2>
          <p className="reveal" style={{ color: "var(--text-mid)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bør fikses innen 1 måned for ytterligere forbedringer.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {medium.map((item, i) => (
              <div className="reveal" key={item.title} style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderLeft: "4px solid var(--green-light)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ background: "var(--green-light)", color: "white", width: 28, height: 28, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{i + 7}</span>
                  <h3 style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.title}</h3>
                </div>
                <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS: ROBOTS.TXT */}
      <section style={{ background: "var(--cream)", padding: "3rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--green-deep)" }}>Detaljer</h2>

          {/* robots.txt */}
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.75rem" }}>robots.txt i dag</h3>
            <pre style={{ background: "var(--green-deep)", color: "var(--sand)", padding: "1rem", borderRadius: 6, fontSize: "0.8rem", lineHeight: 1.6, overflow: "auto" }}>
{`User-agent: *
Crawl-delay: 10

User-agent: Bingbot
Crawl-delay: 20

User-agent: Googlebot
Crawl-delay: 10`}
            </pre>
            <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
              Ingen Sitemap-referanse. Googlebot ignorerer Crawl-delay, men det signaliserer til andre at serveren er treg. Interne sider som innlogging og vedlikehold er ikke blokkert.
            </p>
          </div>

          {/* Sitemap */}
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Sitemap-struktur</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.5rem" }}>
              {[
                { name: "Produkter (5 sitemaps)", count: "~600+" },
                { name: "Sider", count: "30" },
                { name: "Blogginnlegg", count: "Ukjent" },
                { name: "Kategorier", count: "2 sitemaps" },
              ].map((s) => (
                <div key={s.name} style={{ background: "var(--sand)", borderRadius: 6, padding: "0.75rem" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>{s.name}</div>
                  <div style={{ color: "var(--text-light)", fontSize: "0.8rem" }}>{s.count} URLer</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security headers */}
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.75rem" }}>HTTP-sikkerhetshoder</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { header: "Strict-Transport-Security (HSTS)", present: false },
                { header: "Content-Security-Policy", present: false },
                { header: "X-Frame-Options", present: false },
                { header: "X-Content-Type-Options", present: false },
                { header: "Referrer-Policy", present: false },
                { header: "Permissions-Policy", present: false },
                { header: "HTTPS", present: true },
                { header: "Secure + HttpOnly cookies", present: true },
              ].map((h) => (
                <div key={h.header} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
                  <span style={{ color: h.present ? "#155724" : "#721c24", fontWeight: 700 }}>{h.present ? "✓" : "✗"}</span>
                  <span style={{ color: h.present ? "var(--text-mid)" : "var(--text-dark)" }}>{h.header}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Noindex candidates */}
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Sider som bør ha noindex</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["/maintenance-page/", "/velg-kunde/", "/ordre-historikk-ordre-status/", "/tidligere-kjopte-produkter/", "/reset-passord/", "/glemt-passord/", "/logginn/", "/registrering/", "/agent-modul/"].map((url) => (
                <span key={url} style={{ background: "#f8d7da", color: "#721c24", fontSize: "0.75rem", padding: "0.3rem 0.6rem", borderRadius: 4, fontFamily: "monospace" }}>{url}</span>
              ))}
            </div>
          </div>

          {/* Structured data */}
          <div className="reveal" style={{ background: "white", borderRadius: 8, padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Strukturert data</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--green-deep)", marginBottom: "0.4rem" }}>Implementert</p>
                {["Organization", "WebPage", "BreadcrumbList", "WebSite + SearchAction", "Article (blogg)"].map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-mid)" }}>
                    <span style={{ color: "#155724", fontWeight: 700 }}>✓</span> {s}
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--terra)", marginBottom: "0.4rem" }}>Mangler</p>
                {["Product (produktsider)", "LocalBusiness", "FAQ"].map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-mid)" }}>
                    <span style={{ color: "#721c24", fontWeight: 700 }}>✗</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="reveal">
          <h2>Vil dere <em>forbedre</em><br />nettsiden?</h2>
          <p>
            Vi hjelper med å implementere disse tiltakene slik at premiere-produkter.no
            rangerer bedre og er tryggere for besøkende.
          </p>
          <div className="cta-actions">
            <a href="mailto:post@aiki.no" className="btn-dark">Kontakt AIKI</a>
            <a href="/" className="btn-outline">Tilbake til forsiden</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
