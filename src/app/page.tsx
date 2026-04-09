import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const IMG = {
  logo: "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg",
  cat: {
    renholdsmidler: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_renholdsmidler-1920x806-1.webp",
    maskiner: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rengjoringsmaskin-1920-x806.webp",
    torkepapir: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_torkepapir-1920-x806.webp",
    rekvisita: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rekvisita-1920-x806.webp",
    bekledning: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_servicebekledning2-1920-x806.webp",
    takeaway: "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_takeaway-1920x806px.webp",
  },
  products: {
    hoytrykk: "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
    vinyl: "https://premiere-produkter.no/wp-content/uploads/product_images/28134.webp",
    gulvvasker: "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
    robot: "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
  },
  certs: {
    eu: "https://premiere-produkter.no/wp-content/uploads/2024/04/eu_blomst.webp",
    premium: "https://premiere-produkter.no/wp-content/uploads/2024/04/premium-quality.webp",
    pefc: "https://premiere-produkter.no/wp-content/uploads/2024/04/pefc.webp",
    derma: "https://premiere-produkter.no/wp-content/uploads/2024/04/derma-tested.webp",
    en1186: "https://premiere-produkter.no/wp-content/uploads/2024/04/en1186.webp",
    vask: "https://premiere-produkter.no/wp-content/uploads/2024/06/garantert-300-vask.webp",
  },
};

const Arrow = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag animate-in">Profesjonelt renhold siden 1978</p>
          <h1 className="animate-in delay-1">
            Renhold,<br /><em>profesjonalisert.</em>
          </h1>
          <p className="hero-desc animate-in delay-2">
            Over 3 500 produkter for profesjonelt renhold. Fra renholdsmidler og maskiner til
            tørkepapir og servicebekledning. Levert fritt i hele Norge.
          </p>
          <div className="hero-actions animate-in delay-3">
            <a href="#kategorier" className="btn-primary">
              Se produkter <Arrow />
            </a>
            <a href="#kontakt" className="btn-secondary">Bli kunde</a>
          </div>
        </div>
        <div className="hero-visual animate-in delay-2">
          <div className="hero-grid">
            <div className="hero-img" style={{ backgroundImage: `url(${IMG.cat.maskiner})` }}>
              <span className="hero-img-label">Rengjøringsmaskiner</span>
            </div>
            <div className="hero-img" style={{ backgroundImage: `url(${IMG.products.hoytrykk})` }}>
              <span className="hero-img-label">Kampanje</span>
            </div>
            <div className="hero-img" style={{ backgroundImage: `url(${IMG.cat.renholdsmidler})` }}>
              <span className="hero-img-label">Renholdsmidler</span>
            </div>
            <div className="hero-img" style={{ backgroundImage: `url(${IMG.cat.torkepapir})` }}>
              <span className="hero-img-label">Levert fritt i hele Norge</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="stats-inner reveal">
          {[
            { number: "46 år", label: "I bransjen siden 1978" },
            { number: "1 000+", label: "Bedriftskunder i Norge" },
            { number: "3 500+", label: "Produkter på lager" },
            { number: "Fritt", label: "Levert over hele landet" },
          ].map((s) => (
            <div className="stat" key={s.number}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="kategorier">
        <div className="section-header reveal">
          <h2 className="section-title">Alt for profesjonelt renhold</h2>
          <p className="section-desc">
            Seks hovedkategorier dekker hele behovet. Fra kraftige renholdsmidler til
            maskiner, papir, utstyr og bekledning.
          </p>
        </div>
        <div className="cat-grid">
          {[
            { name: "Renholdsmidler", desc: "Gulvbehandling, håndsåpe, kjøkkenrengjøring, desinfeksjon og bærekraftige alternativer", img: IMG.cat.renholdsmidler, count: "130+", wide: true },
            { name: "Rengjørings\u00ADmaskiner", desc: "Høytrykkspylere, gulvvaskemaskiner, robotstøvsugere", img: IMG.cat.maskiner, count: "180+" },
            { name: "Tørkepapir og dispensere", desc: "Dispensere, papirhåndklær, toalettpapir, tørkeruller", img: IMG.cat.torkepapir, count: "35+" },
            { name: "Renholds\u00ADutstyr", desc: "Mopper, kluter, bøtter, avfallsbeholdere, matter", img: IMG.cat.rekvisita, count: "90+" },
            { name: "Service\u00ADbekledning", desc: "Arbeidsklær, fottøy og verneutstyr for renhold", img: IMG.cat.bekledning, count: "25+" },
            { name: "Engangsprodukter", desc: "Hansker, munnbind, hårnett og takeaway-emballasje", img: IMG.cat.takeaway, count: "20+" },
          ].map((cat) => (
            <Link href="/kategori/rengjoringsmaskiner" className={`cat-card reveal${cat.wide ? " cat-card-wide" : ""}`} key={cat.name}>
              <div className="cat-card-bg" style={{ backgroundImage: `url(${cat.img})` }} />
              <div className="cat-card-inner">
                <h3 dangerouslySetInnerHTML={{ __html: cat.name }} />
                <p>{cat.desc}</p>
              </div>
              <span className="cat-card-count">{cat.count} produkter</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CAMPAIGN */}
      <section className="campaign" id="kampanje">
        <div className="campaign-inner">
          <div
            className="campaign-visual reveal"
            style={{
              background: `var(--green-mid) url(${IMG.products.hoytrykk}) center/contain no-repeat`,
            }}
          >
            <div className="campaign-price-tag">
              <div className="price">kr 28 990,-</div>
              <div className="label">inkl. mva, 46% rabatt</div>
            </div>
          </div>
          <div className="campaign-content reveal">
            <h2>IPC Foma varmtvanns<br />høytrykkspyler</h2>
            <p>
              PW-H60 1813 Foma Edition. Profesjonell varmtvanns høytrykkspyler
              til en pris som gjør det enkelt å oppgradere.
            </p>
            <ul className="campaign-features">
              {["3x230V eller 3x400V", "Fritt levert i hele Norge", "Levering på 2-3 virkedager", "2 års garanti", "Begrenset antall"].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link href="/produkter/ipc-foma-pw-h60" className="btn-primary">Se kampanjen <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div className="section-header reveal">
          <h2 className="section-title">Aktuelle kampanjer</h2>
          <p className="section-desc">
            Utvalgte produkter med kampanjepriser. Fritt levert over hele landet.
          </p>
        </div>
        <div className="products-grid">
          {[
            { cat: "Hansker", name: "Vinylhansker, pudderfrie, 100 stk", img: IMG.products.vinyl, current: "kr 29,50", original: "kr 60,-", discount: "-51%" },
            { cat: "Høytrykk", name: "IPC Foma PW-H60 høytrykkspyler", img: IMG.products.hoytrykk, current: "kr 28 990,-", discount: "-46%" },
            { cat: "Maskiner", name: "IPC Foma gulvvaskemaskin CT231", img: IMG.products.gulvvasker, current: "Fra kr 18 990,-", discount: "-36%" },
            { cat: "Maskiner", name: "Autonom rengjøringsrobot", img: IMG.products.robot, current: "Kontakt oss for pris" },
          ].map((p) => (
            <Link href="/produkter/ipc-foma-pw-h60" className="product-card reveal" key={p.name}>
              <div className="product-card-img">
                <Image src={p.img} alt={p.name} width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1.5rem" }} />
              </div>
              <div className="product-card-body">
                <div className="product-card-category">{p.cat}</div>
                <h4>{p.name}</h4>
                <div className="product-card-price">
                  <span className="current">{p.current}</span>
                  {p.original && <span className="original">{p.original}</span>}
                  {p.discount && <span className="discount">{p.discount}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="trust" id="om">
        <div className="trust-inner">
          <div className="reveal">
            <h2>Betrodd av over 1 000 norske bedrifter</h2>
            <p className="trust-desc">
              Siden 1978 har vi levert renholdsmidler og utstyr til bedrifter i hele Norge.
              Vi er Miljøfyrtårn-sertifisert og leverer kun godkjente produkter med full
              HMS-dokumentasjon.
            </p>
            <a href="#" className="btn-dark">Om Premiere Produkter <Arrow /></a>
          </div>
          <div className="trust-logos reveal">
            {Object.entries(IMG.certs).map(([key, src]) => (
              <div className="trust-logo" key={key}>
                <Image src={src} alt={key} width={96} height={48} style={{ height: 48, width: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="kontakt">
        <div className="reveal">
          <h2>Klar til å <em>forenkle</em><br />renholdet?</h2>
          <p>
            Ta kontakt for et uforpliktende tilbud tilpasset din bedrift.
            Vi hjelper deg med å finne de riktige produktene.
          </p>
          <div className="cta-actions">
            <a href="tel:+4751653990" className="btn-dark">Ring oss: 51 65 39 90</a>
            <a href="mailto:post@premiere-produkter.no" className="btn-outline">Send e-post</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
