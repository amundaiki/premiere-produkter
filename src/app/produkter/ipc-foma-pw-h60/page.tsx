import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";
import {
  Phone,
  CheckCircle,
  Truck,
  ShieldCheck,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title:
    "IPC Foma PW-H60 varmtvanns hoytrykkspyler - kr 28 990,- | Premiere Produkter",
  description:
    "IPC Foma PW-H60 1813 Foma Edition. Profesjonell varmtvanns hoytrykkspyler med 180 bar, 780 l/t. 46% rabatt, fritt levert i hele Norge.",
};

const IMAGES = {
  main: "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
  detail1:
    "https://premiere-produkter.no/wp-content/uploads/2026/02/d83805438ce2b0ce965a4361225228cfdd6d1361-1024x677.jpg",
  detail2:
    "https://premiere-produkter.no/wp-content/uploads/2026/02/838adb31caab55d644627fbc15f179163b9ec9e4-1024x683.jpg",
  detail3:
    "https://premiere-produkter.no/wp-content/uploads/2026/02/32458f96a6c8651e5932ccda6a1c3d2d04f804bb-1024x647.jpg",
  vinyl:
    "https://premiere-produkter.no/wp-content/uploads/product_images/28134.webp",
  gulvvasker:
    "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
  robot:
    "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
};

const SPECS = [
  { label: "Spenning", value: "3x230V eller 3x400V" },
  { label: "Trykk", value: "180 bar" },
  { label: "Vannmengde", value: "780 l/t" },
  { label: "Temperatur", value: "maks 140\u00B0C" },
  { label: "Vekt", value: "ca. 95 kg" },
  { label: "Levering", value: "2-3 virkedager, fritt i hele Norge" },
  { label: "Garanti", value: "2 ar" },
];

export default function ProductPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="bg-cream pt-16">
        {/* ── Breadcrumb ── */}
        <nav
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Brødsmuler"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-mid">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-text-dark"
              >
                Hjem
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-light">
              /
            </li>
            <li>
              <Link
                href="/kategori/rengjoringsmaskiner"
                className="transition-colors hover:text-text-dark"
              >
                Rengjoringsmaskiner
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-light">
              /
            </li>
            <li className="font-medium text-text-dark">IPC Foma PW-H60</li>
          </ol>
        </nav>

        {/* ── Product Detail: split layout ── */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* Gallery */}
            <div className="reveal">
              {/* Main image */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-sand">
                <Image
                  src={IMAGES.main}
                  alt="IPC Foma PW-H60 hoytrykkspyler"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
              {/* Thumbnails */}
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[IMAGES.detail1, IMAGES.detail2, IMAGES.detail3].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[3/2] overflow-hidden rounded-lg bg-sand-dark"
                    >
                      <Image
                        src={src}
                        alt={`Detalj ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Info */}
            <div className="reveal">
              {/* Category */}
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-terra">
                Hoytrykkspylere
              </p>

              {/* Title */}
              <h1 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-700 leading-tight tracking-tight text-text-dark">
                IPC Foma PW-H60 1813 Foma Edition
              </h1>
              <p className="mt-2 text-base text-text-mid">
                Varmtvanns hoytrykkspyler, 3x230V eller 3x400V
              </p>

              {/* Price block */}
              <div className="mt-6 rounded-xl bg-sand p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-800 tracking-tight text-green-deep">
                    kr 28 990,-
                  </span>
                  <span className="rounded-md bg-terra px-2.5 py-1 text-xs font-semibold text-white">
                    -46%
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-3">
                  <span className="text-sm text-text-light line-through">
                    Veil. kr 53 700,-
                  </span>
                  <span className="text-sm font-medium text-terra">
                    Du sparer kr 24 710,-
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-text-mid">
                  inkl. mva, fritt levert i hele Norge
                </p>
              </div>

              {/* Quick benefits */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center gap-1.5 rounded-lg bg-sand p-3 text-center">
                  <Truck
                    size={22}
                    weight="regular"
                    className="text-green-mid"
                  />
                  <span className="text-xs font-medium text-text-dark">
                    Fritt levert
                  </span>
                  <span className="text-[0.65rem] text-text-light">
                    2-3 virkedager
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 rounded-lg bg-sand p-3 text-center">
                  <ShieldCheck
                    size={22}
                    weight="regular"
                    className="text-green-mid"
                  />
                  <span className="text-xs font-medium text-text-dark">
                    2 ars garanti
                  </span>
                  <span className="text-[0.65rem] text-text-light">
                    Full dekning
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 rounded-lg bg-sand p-3 text-center">
                  <Lightning
                    size={22}
                    weight="regular"
                    className="text-green-mid"
                  />
                  <span className="text-xs font-medium text-text-dark">
                    180 bar
                  </span>
                  <span className="text-[0.65rem] text-text-light">
                    Profesjonell kraft
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-text-dark">
                  Spesifikasjoner
                </h2>
                <dl className="mt-3 divide-y divide-sand-dark">
                  {SPECS.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-2.5"
                    >
                      <dt className="text-sm text-text-mid">{spec.label}</dt>
                      <dd className="text-sm font-medium text-text-dark">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <AddToCartButton
                  id="ipc-foma-pw-h60"
                  name="IPC Foma PW-H60 1813 Foma Edition"
                  price="kr 28 990,-"
                  image={IMAGES.main}
                />
                <a
                  href="tel:+4751858300"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-sand-dark px-6 py-3 text-sm font-medium text-text-mid transition-colors hover:border-text-light hover:text-text-dark"
                >
                  <Phone size={18} weight="regular" />
                  Ring oss: 51 85 83 00
                </a>
              </div>

              {/* Stock */}
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-mid" />
                <span className="text-sm text-text-mid">
                  Begrenset antall pa lager
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product description ── */}
        <section className="bg-sand">
          <div className="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-700 tracking-tight text-text-dark">
                Om produktet
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-text-mid">
                <p>
                  IPC Foma PW-H60 1813 Foma Edition er en kraftig varmtvanns
                  hoytrykkspyler designet for profesjonell bruk. Med 180 bar
                  trykk og vanntemperatur opp til 140{"\u00B0"}C takler den de
                  toffeste rengjoringsoppgavene i industri, verksted, landbruk og
                  transport.
                </p>
                <p>
                  Maskinen leveres komplett med 15 meter hoytrykkslange, pistol,
                  lanse og dyse. Den kompakte designen gjor den enkel a flytte
                  mellom arbeidsstasjoner, og de store hjulene sikrer god
                  mobilitet selv pa ujevnt underlag.
                </p>
              </div>
            </div>

            {/* Detail images */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={IMAGES.detail1}
                  alt="PW-H60 i bruk"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={IMAGES.detail2}
                  alt="PW-H60 detaljer"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature list */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "180 bar arbeidstrykk for krevende oppgaver",
                "Vanntemperatur opp til 140\u00B0C",
                "Kompakt design med store hjul",
                "Leveres med slange, pistol, lanse og dyse",
                "Tilgjengelig i bade 3x230V og 3x400V",
                "Service og reservedeler tilgjengelig",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-green-mid"
                  />
                  <span className="text-sm text-text-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related products ── */}
        <section className="bg-cream py-16 lg:py-20">
          <div className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-700 tracking-tight text-text-dark">
              Relaterte produkter
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                name="Vinylhansker, pudderfrie, 100 stk"
                category="Hansker"
                image={IMAGES.vinyl}
                price="kr 29,50"
                originalPrice="kr 60,-"
                discount="-51%"
                href="/produkter/ipc-foma-pw-h60"
                inStock
              />
              <ProductCard
                name="IPC Foma gulvvaskemaskin CT231"
                category="Maskiner"
                image={IMAGES.gulvvasker}
                price="Fra kr 18 990,-"
                discount="-36%"
                href="/produkter/ipc-foma-pw-h60"
                inStock
              />
              <ProductCard
                name="Autonom rengjoringsrobot"
                category="Maskiner"
                image={IMAGES.robot}
                price="Kontakt oss for pris"
                href="/produkter/ipc-foma-pw-h60"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
