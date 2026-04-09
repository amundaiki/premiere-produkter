import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Slik velger du riktig høytrykkspyler for bedriften – Premiere Produkter",
};

const HERO = "https://premiere-produkter.no/wp-content/uploads/2026/02/d83805438ce2b0ce965a4361225228cfdd6d1361-1024x677.jpg";
const PRODUCT_IMG = "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png";
const DETAIL_IMG = "https://premiere-produkter.no/wp-content/uploads/2026/02/838adb31caab55d644627fbc15f179163b9ec9e4-1024x683.jpg";
const MACHINE_IMG = "https://premiere-produkter.no/wp-content/uploads/2023/12/Rengjoringsmaksin-ipc-foma.webp";

export default function ArticlePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <article className="article">
        {/* Hero */}
        <div className="article-hero" style={{ backgroundImage: `url(${HERO})` }}>
          <div className="article-hero-overlay">
            <nav className="breadcrumb breadcrumb-light">
              <Link href="/">Hjem</Link>
              <span>/</span>
              <Link href="/artikler/slik-velger-du-riktig-hoytrykk">Artikler</Link>
              <span>/</span>
              <span>Slik velger du riktig høytrykkspyler</span>
            </nav>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-wrapper">
          <header className="article-header reveal">
            <div className="article-meta">
              <span className="article-tag">Tips og triks</span>
              <time dateTime="2026-03-15">15. mars 2026</time>
              <span>5 min lesetid</span>
            </div>
            <h1>Slik velger du riktig høytrykkspyler for bedriften</h1>
            <p className="article-lead">
              En profesjonell høytrykkspyler er en investering som skal vare i mange år.
              Her er de viktigste tingene du bør tenke på før du velger.
            </p>
          </header>

          <div className="article-content reveal">
            <h2>Kaldtvann eller varmtvann?</h2>
            <p>
              Det første valget du står overfor er om du trenger kaldtvann eller varmtvann.
              Kaldtvannspylere er billigere og enklere, men varmtvannsspylere løser opp fett
              og olje langt mer effektivt. For de fleste profesjonelle bruksområder anbefaler
              vi varmtvann.
            </p>
            <p>
              Verksteder, storkjøkken, transportbedrifter og industri har nesten alltid behov
              for varmtvann. Fett og oljerester løser seg rett og slett ikke opp med bare trykk
              og kaldt vann.
            </p>

            <figure className="article-figure">
              <Image src={DETAIL_IMG} alt="Høytrykkspyler i bruk" width={800} height={533} style={{ width: "100%", height: "auto", borderRadius: 3 }} />
              <figcaption>Varmtvannsspylere håndterer fett og olje langt bedre enn kaldtvann.</figcaption>
            </figure>

            <h2>Trykk og vannmengde</h2>
            <p>
              Mange fokuserer bare på bar-tallet, men vannmengden er minst like viktig.
              Høyt trykk med lite vann gir en skarp stråle som kan skade overflater.
              Kombinasjonen av riktig trykk og god vannmengde gir best resultat.
            </p>
            <p>
              For allsidig profesjonell bruk anbefaler vi minimum 150 bar og 600 l/t.
              IPC Foma PW-H60 leverer 180 bar og 780 l/t, som dekker de fleste behov.
            </p>

            <blockquote>
              &laquo;Vi byttet fra en kaldtvannspyler til PW-H60, og tidsbruken på vask
              av biler og maskiner gikk ned med over 40%. Varmtvannet gjør en enorm
              forskjell på fett og veistøv.&raquo;
              <cite>Daglig leder, transportbedrift i Bergen</cite>
            </blockquote>

            <h2>Spenning: 230V eller 400V?</h2>
            <p>
              Mindre maskiner kjører gjerne på vanlig 230V stikkontakt. Større
              profesjonelle maskiner trenger 400V (trefas). Sjekk hva du har
              tilgjengelig i lokalet ditt før du bestiller.
            </p>
            <p>
              PW-H60 finnes i begge varianter, slik at du kan velge det som passer
              din installasjon.
            </p>

            <figure className="article-figure">
              <Image src={MACHINE_IMG} alt="IPC Foma rengjøringsmaskiner" width={800} height={450} style={{ width: "100%", height: "auto", borderRadius: 3 }} />
              <figcaption>IPC Foma har et bredt utvalg maskiner for profesjonelt renhold.</figcaption>
            </figure>

            <h2>Vedlikehold og service</h2>
            <p>
              En høytrykkspyler trenger jevnlig vedlikehold for å holde seg i form.
              Sjekk at leverandøren tilbyr service og reservedeler. Premiere Produkter
              tilbyr service på alle maskiner vi selger, med reservedeler på lager for
              rask levering.
            </p>

            <h2>Vår anbefaling</h2>
            <p>
              For de fleste bedrifter er IPC Foma PW-H60 et godt valg. Den kombinerer
              høy ytelse med enkel bruk, og kampanjeprisen på kr 28 990,- (ned fra
              kr 53 700,-) gjør den til et svært godt kjøp.
            </p>
          </div>

          {/* Product CTA */}
          <div className="article-cta reveal">
            <div className="article-cta-img">
              <Image src={PRODUCT_IMG} alt="IPC Foma PW-H60" width={200} height={200} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </div>
            <div className="article-cta-content">
              <div className="product-card-category">Kampanje</div>
              <h3>IPC Foma PW-H60 1813 Foma Edition</h3>
              <p>Varmtvanns høytrykkspyler til kr 28 990,- inkl. mva. Fritt levert i hele Norge.</p>
              <Link href="/produkter/ipc-foma-pw-h60" className="btn-primary">
                Se produktet
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="article-related reveal">
            <h2>Flere artikler</h2>
            <div className="article-related-grid">
              <Link href="/artikler/slik-velger-du-riktig-hoytrykk" className="article-related-card">
                <div className="article-related-img" style={{ backgroundImage: `url(${MACHINE_IMG})` }} />
                <div className="article-related-body">
                  <span className="article-tag">Guide</span>
                  <h4>Fem tips for effektiv gulvvask i store lokaler</h4>
                  <time>8. mars 2026</time>
                </div>
              </Link>
              <Link href="/artikler/slik-velger-du-riktig-hoytrykk" className="article-related-card">
                <div className="article-related-img" style={{ backgroundImage: `url(${HERO})` }} />
                <div className="article-related-body">
                  <span className="article-tag">Nyhet</span>
                  <h4>Nye IPC Foma-maskiner til kampanjepris</h4>
                  <time>1. mars 2026</time>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
