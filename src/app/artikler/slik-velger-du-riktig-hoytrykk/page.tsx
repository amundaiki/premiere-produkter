import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Clock, CalendarBlank } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title:
    "Slik velger du riktig høytrykkspyler for bedriften – Premiere Produkter",
  description:
    "En profesjonell høytrykkspyler er en investering som skal vare i mange år. Her er de viktigste tingene du bør tenke på.",
};

const HERO =
  "https://premiere-produkter.no/wp-content/uploads/2026/02/d83805438ce2b0ce965a4361225228cfdd6d1361-1024x677.jpg";
const DETAIL_IMG =
  "https://premiere-produkter.no/wp-content/uploads/2026/02/838adb31caab55d644627fbc15f179163b9ec9e4-1024x683.jpg";
const MACHINE_IMG =
  "https://premiere-produkter.no/wp-content/uploads/2023/12/Rengjoringsmaksin-ipc-foma.webp";
const PRODUCT_IMG =
  "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png";

export default function ArticlePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <article>
        {/* ── Article Hero ── */}
        <section className="relative mt-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO}
              alt="Høytrykkspyler i profesjonell bruk"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_160/0.88)] via-[oklch(0.15_0.03_160/0.6)] to-[oklch(0.15_0.03_160/0.35)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
            <nav
              className="mb-5 flex items-center gap-1.5 text-[0.8rem] text-[oklch(0.82_0.01_160)]"
              aria-label="Brødsmuler"
            >
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Hjem
              </Link>
              <span className="text-[oklch(0.55_0.01_160)]">/</span>
              <Link
                href="/artikler"
                className="transition-colors hover:text-white"
              >
                Artikler
              </Link>
              <span className="text-[oklch(0.55_0.01_160)]">/</span>
              <span className="text-[oklch(0.95_0.008_160)]">
                Slik velger du riktig høytrykkspyler
              </span>
            </nav>
          </div>
        </section>

        {/* ── Article wrapper ── */}
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="reveal">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-terra px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                Tips og triks
              </span>
              <span className="flex items-center gap-1.5 text-[0.8rem] text-text-light">
                <CalendarBlank size={14} weight="regular" />
                <time dateTime="2026-03-15">15. mars 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-[0.8rem] text-text-light">
                <Clock size={14} weight="regular" />
                5 min lesetid
              </span>
            </div>

            <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-text-dark sm:text-4xl">
              Slik velger du riktig høytrykkspyler for bedriften
            </h1>

            <p className="mt-5 text-[1.1rem] leading-relaxed text-text-mid">
              En profesjonell høytrykkspyler er en investering som skal vare
              i mange år. Her er de viktigste tingene du bør tenke på før du
              velger.
            </p>
          </header>

          {/* ── Content ── */}
          <div className="mt-12 space-y-10 reveal">
            {/* Kaldtvann eller varmtvann */}
            <section>
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Kaldtvann eller varmtvann?
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark">
                Det første valget du står overfor er om du trenger kaldtvann
                eller varmtvann. Kaldtvannspylere er billigere og enklere,
                men varmtvannsspylere løser opp fett og olje langt mer
                effektivt. For de fleste profesjonelle bruksområder
                anbefaler vi varmtvann.
              </p>
              <p className="mt-3 leading-relaxed text-text-dark">
                Verksteder, storkjøkken, transportbedrifter og industri har
                nesten alltid behov for varmtvann. Fett og oljerester løser
                seg rett og slett ikke opp med bare trykk og kaldt vann.
              </p>
            </section>

            {/* Detail figure */}
            <figure>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={DETAIL_IMG}
                  alt="Høytrykkspyler i bruk på industriområde"
                  width={800}
                  height={533}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-[0.8rem] text-text-light">
                Varmtvannsspylere håndterer fett og olje langt bedre enn
                kaldtvann.
              </figcaption>
            </figure>

            {/* Trykk og vannmengde */}
            <section>
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Trykk og vannmengde
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark">
                Mange fokuserer bare på bar-tallet, men vannmengden er minst
                like viktig. Høyt trykk med lite vann gir en skarp stråle
                som kan skade overflater. Kombinasjonen av riktig trykk og
                god vannmengde gir best resultat.
              </p>
              <p className="mt-3 leading-relaxed text-text-dark">
                For allsidig profesjonell bruk anbefaler vi minimum 150 bar
                og 600 l/t. IPC Foma PW-H60 leverer 180 bar og 780 l/t,
                som dekker de fleste behov.
              </p>
            </section>

            {/* Blockquote */}
            <div className="rounded-lg bg-sand px-6 py-6 sm:px-8 sm:py-7">
              <p className="text-[1.05rem] italic leading-relaxed text-text-dark">
                &laquo;Vi byttet fra en kaldtvannspyler til PW-H60, og
                tidsbruken på vask av biler og maskiner gikk ned med over
                40%. Varmtvannet gjør en enorm forskjell på fett og
                veistøv.&raquo;
              </p>
              <cite className="mt-4 block text-[0.85rem] not-italic text-text-light">
                Daglig leder, transportbedrift i Bergen
              </cite>
            </div>

            {/* Spenning */}
            <section>
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Spenning: 230V eller 400V?
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark">
                Mindre maskiner kjører gjerne på vanlig 230V stikkontakt.
                Større profesjonelle maskiner trenger 400V (trefas). Sjekk
                hva du har tilgjengelig i lokalet ditt før du bestiller.
              </p>
              <p className="mt-3 leading-relaxed text-text-dark">
                PW-H60 finnes i begge varianter, slik at du kan velge det
                som passer din installasjon.
              </p>
            </section>

            {/* Machine figure */}
            <figure>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={MACHINE_IMG}
                  alt="IPC Foma rengjøringsmaskiner"
                  width={800}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-[0.8rem] text-text-light">
                IPC Foma har et bredt utvalg maskiner for profesjonelt
                renhold.
              </figcaption>
            </figure>

            {/* Vedlikehold */}
            <section>
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Vedlikehold og service
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark">
                En høytrykkspyler trenger jevnlig vedlikehold for å holde
                seg i form. Sjekk at leverandøren tilbyr service og
                reservedeler. Premiere Produkter tilbyr service på alle
                maskiner vi selger, med reservedeler på lager for rask
                levering.
              </p>
            </section>

            {/* Vår anbefaling */}
            <section>
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Vår anbefaling
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark">
                For de fleste bedrifter er IPC Foma PW-H60 et godt valg.
                Den kombinerer høy ytelse med enkel bruk, og
                kampanjeprisen på kr 28 990,- (ned fra kr 53 700,-) gjør
                den til et svært godt kjøp.
              </p>
            </section>
          </div>

          {/* ── Product CTA ── */}
          <div className="mt-14 rounded-xl bg-sand p-6 sm:p-8 reveal">
            <div className="grid items-center gap-6 sm:grid-cols-[160px_1fr]">
              <div className="flex justify-center">
                <Image
                  src={PRODUCT_IMG}
                  alt="IPC Foma PW-H60"
                  width={160}
                  height={160}
                  className="h-auto w-32 object-contain sm:w-full"
                />
              </div>
              <div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-terra">
                  Kampanje
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold text-text-dark">
                  IPC Foma PW-H60 1813 Foma Edition
                </h3>
                <p className="mt-2 leading-relaxed text-text-mid">
                  Varmtvanns høytrykkspyler til kr 28 990,- inkl. mva.
                  Fritt levert i hele Norge.
                </p>
                <Link
                  href="/produkter/ipc-foma-pw-h60"
                  className="mt-4 inline-block rounded-lg bg-terra px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-terra-light"
                >
                  Se produktet
                </Link>
              </div>
            </div>
          </div>

          {/* ── Related articles ── */}
          <div className="mt-16 reveal">
            <h2 className="font-display text-2xl font-bold text-text-dark">
              Flere artikler
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* Related card 1 */}
              <Link
                href="/artikler/fem-tips-gulvvask"
                className="group overflow-hidden rounded-lg bg-sand transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={MACHINE_IMG}
                    alt="Gulvvaskemaskin fra IPC Foma"
                    fill
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 pb-5 pt-4">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-terra">
                    Guide
                  </span>
                  <h4 className="mt-1.5 font-display text-[1.05rem] leading-snug text-text-dark">
                    Fem tips for effektiv gulvvask i store lokaler
                  </h4>
                  <time
                    dateTime="2026-03-08"
                    className="mt-2 block text-[0.8rem] text-text-light"
                  >
                    8. mars 2026
                  </time>
                </div>
              </Link>

              {/* Related card 2 */}
              <Link
                href="/artikler/slik-velger-du-riktig-hoytrykk"
                className="group overflow-hidden rounded-lg bg-sand transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={HERO}
                    alt="IPC Foma høytrykkspylere"
                    fill
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 pb-5 pt-4">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-terra">
                    Nyhet
                  </span>
                  <h4 className="mt-1.5 font-display text-[1.05rem] leading-snug text-text-dark">
                    Nye IPC Foma-maskiner til kampanjepris
                  </h4>
                  <time
                    dateTime="2026-03-01"
                    className="mt-2 block text-[0.8rem] text-text-light"
                  >
                    1. mars 2026
                  </time>
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
