import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import {
  ArrowRight,
  Phone,
  Envelope,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

/* ────────────────────────────────────────────
   Image catalogue
   ──────────────────────────────────────────── */

const IMG = {
  cat: {
    renholdsmidler:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_renholdsmidler-1920x806-1.webp",
    maskiner:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rengjoringsmaskin-1920-x806.webp",
    torkepapir:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_torkepapir-1920-x806.webp",
    rekvisita:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rekvisita-1920-x806.webp",
    bekledning:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_servicebekledning2-1920-x806.webp",
    takeaway:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_takeaway-1920x806px.webp",
  },
  products: {
    hoytrykk:
      "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
    vinyl:
      "https://premiere-produkter.no/wp-content/uploads/product_images/28134.webp",
    gulvvasker:
      "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
    robot:
      "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
  },
  certs: {
    eu: "https://premiere-produkter.no/wp-content/uploads/2024/04/eu_blomst.webp",
    premium:
      "https://premiere-produkter.no/wp-content/uploads/2024/04/premium-quality.webp",
    pefc: "https://premiere-produkter.no/wp-content/uploads/2024/04/pefc.webp",
    derma:
      "https://premiere-produkter.no/wp-content/uploads/2024/04/derma-tested.webp",
    en1186:
      "https://premiere-produkter.no/wp-content/uploads/2024/04/en1186.webp",
    vask: "https://premiere-produkter.no/wp-content/uploads/2024/06/garantert-300-vask.webp",
  },
};

const CERT_LABELS: Record<string, string> = {
  eu: "EU Ecolabel",
  premium: "Premium Quality",
  pefc: "PEFC-sertifisert",
  derma: "Dermatologisk testet",
  en1186: "EN 1186",
  vask: "Garantert 300 vask",
};

/* ────────────────────────────────────────────
   Category data
   ──────────────────────────────────────────── */

const CATEGORIES = [
  {
    name: "Renholdsmidler",
    desc: "Gulvbehandling, hansape, desinfeksjon og baerekraftige alternativer",
    img: IMG.cat.renholdsmidler,
    count: "130+",
    wide: true,
  },
  {
    name: "Rengjoringsmaskiner",
    desc: "Hoytrykkspylere, gulvvaskemaskiner, robotstovysugere",
    img: IMG.cat.maskiner,
    count: "180+",
  },
  {
    name: "Torkepapir og dispensere",
    desc: "Dispensere, papirhandklaer, toalettpapir, torkeruller",
    img: IMG.cat.torkepapir,
    count: "35+",
  },
  {
    name: "Renholdsutstyr",
    desc: "Mopper, kluter, botter, avfallsbeholdere, matter",
    img: IMG.cat.rekvisita,
    count: "90+",
  },
  {
    name: "Servicebekledning",
    desc: "Arbeidsklær, fottoy og verneutstyr for renhold",
    img: IMG.cat.bekledning,
    count: "25+",
  },
  {
    name: "Engangsprodukter",
    desc: "Hansker, munnbind, harnett og takeaway-emballasje",
    img: IMG.cat.takeaway,
    count: "20+",
    wide: true,
  },
];

/* ────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ═══════════════════════════════════════
          1. HERO — Asymmetric split
         ═══════════════════════════════════════ */}
      <section className="min-h-[100dvh] bg-green-deep pt-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
          {/* Left: copy */}
          <div className="max-w-xl">
            <p className="reveal text-sm font-medium tracking-wide text-[oklch(0.72_0.04_160)]">
              Profesjonelt renhold siden 1978
            </p>
            <h1 className="reveal mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-800 leading-[1.08] tracking-tight text-white">
              Renhold,
              <br />
              <span className="italic text-[oklch(0.78_0.08_160)]">
                profesjonalisert.
              </span>
            </h1>
            <p className="reveal mt-6 max-w-[55ch] text-base leading-relaxed text-[oklch(0.75_0.02_160)]">
              Over 3 500 produkter for profesjonelt renhold. Fra renholdsmidler
              og maskiner til torkepapir og servicebekledning. Levert fritt i
              hele Norge.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#kategorier"
                className="inline-flex items-center gap-2 rounded-lg bg-terra px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terra-light"
              >
                Se produkter
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.45_0.03_160)] px-6 py-3 text-sm font-semibold text-[oklch(0.82_0.02_160)] transition-colors hover:border-[oklch(0.55_0.03_160)] hover:text-white"
              >
                Bli kunde
              </Link>
            </div>
          </div>

          {/* Right: image grid */}
          <div className="reveal grid grid-cols-2 grid-rows-2 gap-3 lg:gap-4">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-xl">
              <Image
                src={IMG.cat.maskiner}
                alt="Rengjoringsmaskiner"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_160/0.7)] to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide text-white/90">
                Rengjoringsmaskiner
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={IMG.products.hoytrykk}
                alt="Kampanje - hoytrykkspyler"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-contain bg-green-mid p-4"
                priority
              />
              <span className="absolute top-3 right-3 rounded-md bg-terra px-2.5 py-1 text-[0.65rem] font-semibold text-white">
                Kampanje
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={IMG.cat.renholdsmidler}
                alt="Renholdsmidler"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_160/0.7)] to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-white/90">
                Renholdsmidler
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. STATS BAR — Sand background
         ═══════════════════════════════════════ */}
      <section className="bg-sand">
        <div className="reveal mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { number: "46 ar", label: "I bransjen siden 1978" },
            { number: "1 000+", label: "Bedriftskunder i Norge" },
            { number: "3 500+", label: "Produkter pa lager" },
            { number: "Fritt", label: "Levert over hele landet" },
          ].map((stat) => (
            <div
              key={stat.number}
              className="border-l border-[oklch(0.82_0.02_80)] pl-5"
            >
              <p className="font-display text-2xl font-700 tracking-tight text-green-deep sm:text-3xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-text-mid">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. CATEGORIES — Asymmetric grid
         ═══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28" id="kategorier">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header: title left, desc right */}
          <div className="reveal mb-12 grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_1fr]">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-700 leading-tight tracking-tight text-text-dark">
              Alt for profesjonelt renhold
            </h2>
            <p className="max-w-[50ch] text-base leading-relaxed text-text-mid md:text-right">
              Seks hovedkategorier dekker hele behovet. Fra kraftige
              renholdsmidler til maskiner, papir, utstyr og bekledning.
            </p>
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href="/kategori/rengjoringsmaskiner"
                className={`reveal group relative overflow-hidden rounded-xl ${
                  cat.wide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes={
                      cat.wide
                        ? "(max-width: 640px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_160/0.82)] via-[oklch(0.12_0.03_160/0.3)] to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[oklch(0.8_0.06_45)]">
                    {cat.count} produkter
                  </p>
                  <h3 className="mt-1 font-display text-xl font-600 text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 max-w-[40ch] text-sm leading-relaxed text-white/70">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. CAMPAIGN — Green-deep bg, asymmetric 2-col
         ═══════════════════════════════════════ */}
      <section className="bg-green-deep py-20 lg:py-28" id="kampanje">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          {/* Product image */}
          <div className="reveal relative">
            <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-2xl bg-green-mid">
              <Image
                src={IMG.products.hoytrykk}
                alt="IPC Foma PW-H60 hoytrykkspyler"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
              />
            </div>
            {/* Price tag */}
            <div className="absolute -bottom-4 right-4 rounded-xl bg-terra px-5 py-3 shadow-lg lg:-right-4 lg:bottom-8">
              <p className="font-display text-2xl font-700 text-white">
                kr 28 990,-
              </p>
              <p className="text-xs text-[oklch(0.88_0.04_45)]">
                inkl. mva, 46% rabatt
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal max-w-lg">
            <p className="text-sm font-medium tracking-wide text-[oklch(0.72_0.04_160)]">
              Aktiv kampanje
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-700 leading-tight text-white">
              IPC Foma varmtvanns
              <br />
              hoytrykkspyler
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-[oklch(0.75_0.02_160)]">
              PW-H60 1813 Foma Edition. Profesjonell varmtvanns hoytrykkspyler
              til en pris som gjor det enkelt a oppgradere.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "3x230V eller 3x400V",
                "Fritt levert i hele Norge",
                "Levering pa 2-3 virkedager",
                "2 ars garanti",
                "Begrenset antall",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-[oklch(0.82_0.02_160)]"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="shrink-0 text-[oklch(0.6_0.1_160)]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/produkter/ipc-foma-pw-h60"
                className="inline-flex items-center gap-2 rounded-lg bg-terra px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terra-light"
              >
                Se kampanjen
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. PRODUCTS — Using ProductCard component
         ═══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12 grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_1fr]">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-700 leading-tight tracking-tight text-text-dark">
              Aktuelle kampanjer
            </h2>
            <p className="max-w-[50ch] text-base leading-relaxed text-text-mid md:text-right">
              Utvalgte produkter med kampanjepriser. Fritt levert over hele
              landet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="reveal sm:col-span-2 lg:col-span-2">
              <ProductCard
                name="IPC Foma PW-H60 hoytrykkspyler"
                category="Hoytrykkspylere"
                image={IMG.products.hoytrykk}
                price="kr 28 990,-"
                originalPrice="kr 53 700,-"
                discount="-46%"
                href="/produkter/ipc-foma-pw-h60"
                inStock
              />
            </div>
            <div className="reveal">
              <ProductCard
                name="Vinylhansker, pudderfrie, 100 stk"
                category="Hansker"
                image={IMG.products.vinyl}
                price="kr 29,50"
                originalPrice="kr 60,-"
                discount="-51%"
                href="/produkter/ipc-foma-pw-h60"
                inStock
              />
            </div>
            <div className="reveal">
              <ProductCard
                name="IPC Foma gulvvaskemaskin CT231"
                category="Maskiner"
                image={IMG.products.gulvvasker}
                price="Fra kr 18 990,-"
                discount="-36%"
                href="/produkter/ipc-foma-pw-h60"
                inStock
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TRUST — Sand bg, asymmetric 2-col
         ═══════════════════════════════════════ */}
      <section className="bg-sand py-20 lg:py-28" id="om">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-8">
          <div className="reveal max-w-xl">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-700 leading-tight tracking-tight text-text-dark">
              Betrodd av over 1 000 norske bedrifter
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-text-mid">
              Siden 1978 har vi levert renholdsmidler og utstyr til bedrifter i
              hele Norge. Vi er Miljofyrtarn-sertifisert og leverer kun godkjente
              produkter med full HMS-dokumentasjon.
            </p>
            <div className="mt-8">
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 rounded-lg bg-green-deep px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-green-mid"
              >
                Om Premiere Produkter
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="reveal grid grid-cols-3 gap-4">
            {Object.entries(IMG.certs).map(([key, src]) => (
              <div
                key={key}
                className="flex flex-col items-center gap-2 rounded-xl bg-cream p-4"
              >
                <Image
                  src={src}
                  alt={CERT_LABELS[key] || key}
                  width={80}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-center text-[0.65rem] leading-tight text-text-light">
                  {CERT_LABELS[key]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CTA — Centered closing statement
         ═══════════════════════════════════════ */}
      <section className="bg-green-deep py-24 lg:py-32" id="kontakt">
        <div className="reveal mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-800 leading-tight tracking-tight text-white">
            Klar til a forenkle
            <br />
            renholdet?
          </h2>
          <p className="mx-auto mt-5 max-w-[50ch] text-base leading-relaxed text-[oklch(0.75_0.02_160)]">
            Ta kontakt for et uforpliktende tilbud tilpasset din bedrift. Vi
            hjelper deg med a finne de riktige produktene.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+4751858300"
              className="inline-flex items-center gap-2 rounded-lg bg-terra px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terra-light"
            >
              <Phone size={18} weight="regular" />
              Ring oss: 51 85 83 00
            </a>
            <a
              href="mailto:post@premiere-produkter.no"
              className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.45_0.03_160)] px-6 py-3 text-sm font-semibold text-[oklch(0.82_0.02_160)] transition-colors hover:border-[oklch(0.55_0.03_160)] hover:text-white"
            >
              <Envelope size={18} weight="regular" />
              Send e-post
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
