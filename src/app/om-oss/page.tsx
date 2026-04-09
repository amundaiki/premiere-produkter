import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const HISTORY = [
  {
    year: "1978",
    title: "Grunnleggelsen",
    desc: "Dagfinn Larsen starter Premiere Produkter i Stavanger. Selskapet leverer renholdsmidler til lokale bedrifter på Sør-Vestlandet.",
  },
  {
    year: "1988",
    title: "Flytter til Hundvåg",
    desc: "Virksomheten vokser og flytter til større lokaler på Hundvåg i Stavanger for å dekke økt etterspørsel.",
  },
  {
    year: "2004",
    title: "Nytt hovedkontor",
    desc: "Premiere Produkter etablerer seg på Austbøsletta 6, med moderne kontor- og lagerfasiliteter.",
  },
  {
    year: "2008",
    title: "Lagerutvidelse",
    desc: "Lageret utvides til 1 600 kvadratmeter med kapasitet for over 3 000 paller. Kontorarealene vokser til 500 kvadratmeter.",
  },
  {
    year: "I dag",
    title: "Landsdekkende leverandør",
    desc: "Over 1 000 bedriftskunder i hele Norge, 11 ansatte og kontorer i Stavanger med representanter i Bergen og Oslo.",
  },
];

const STATS = [
  { number: "46 år", label: "I bransjen" },
  { number: "1 000+", label: "Bedriftskunder" },
  { number: "3 500+", label: "Produkter" },
  { number: "11+", label: "Ansatte" },
];

const VALUES = [
  {
    title: "Pålitelige medarbeidere",
    desc: "Vi holder det vi lover. Våre ansatte har lang erfaring og gir deg trygghet i hvert ledd, fra bestilling til levering.",
  },
  {
    title: "Tillitsfullt samarbeid",
    desc: "Vi bygger langvarige relasjoner med kundene våre. Mange har vært med oss i over 20 år, og det er vi stolte av.",
  },
  {
    title: "Beste løsninger",
    desc: "Vi finner produktene som passer din bedrift. Med over 3 500 produkter på lager kan vi dekke de fleste behov for profesjonelt renhold.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="pt-28 pb-20 bg-cream">
        {/* Hero / Intro */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-wider text-terra">
                Om oss
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-dark sm:text-5xl leading-tight">
                Profesjonelt renhold siden 1978
              </h1>
              <p className="mt-6 text-lg text-text-mid leading-relaxed max-w-xl">
                Premiere Produkter ble grunnlagt av Dagfinn Larsen i
                Stavanger i 1978. Det som startet som en lokal leverandør
                av renholdsmidler, har vokst til en landsdekkende bedrift
                med over 1 000 kunder og et komplett sortiment for
                profesjonelt renhold.
              </p>
              <p className="mt-4 text-text-mid leading-relaxed max-w-xl">
                Fra hovedkontoret på Austbøsletta 6 i Hundvåg driver vi
                500 kvadratmeter kontor og 1 600 kvadratmeter lager med
                kapasitet for over 3 000 paller. Vi er
                Miljøfyrtårn-sertifisert og leverer fritt i hele Norge.
              </p>
            </div>
            <div className="reveal rounded-2xl bg-green-deep p-8 lg:mt-12">
              <p className="font-display text-lg font-semibold text-[oklch(0.92_0.01_160)]">
                Vår visjon
              </p>
              <p className="mt-3 text-[oklch(0.78_0.01_160)] leading-relaxed">
                Vi skal være den foretrukne leverandøren av
                renholdsløsninger for norske bedrifter. Gjennom
                pålitelig service, et bredt sortiment og faglig
                kompetanse skaper vi verdi for kundene våre hver dag.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="mb-12 reveal">
            <h2 className="font-display text-3xl font-bold text-text-dark">
              Vår historie
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HISTORY.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-sand p-8 reveal"
              >
                <span className="font-display text-2xl font-bold text-terra">
                  {item.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-mid leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-green-deep py-20 mb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center reveal">
                  <div className="font-display text-4xl font-bold text-[oklch(0.92_0.01_160)]">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-[oklch(0.65_0.01_160)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="mb-12 reveal">
            <h2 className="font-display text-3xl font-bold text-text-dark">
              Det vi står for
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="reveal">
                <h3 className="font-display text-xl font-semibold text-text-dark">
                  {value.title}
                </h3>
                <p className="mt-3 text-text-mid leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-sand p-10 sm:p-14 reveal">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-text-dark">
                Vil du vite mer?
              </h2>
              <p className="mt-4 text-text-mid leading-relaxed">
                Vi hjelper deg gjerne med å finne riktig produkt og
                løsning for din bedrift. Ta kontakt for en uforpliktende
                prat.
              </p>
              <Link
                href="/kontakt"
                className="mt-6 inline-block rounded-lg bg-terra px-6 py-3 text-sm font-semibold text-[oklch(0.98_0.005_45)] transition-colors hover:bg-terra-light"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
