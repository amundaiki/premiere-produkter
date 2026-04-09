import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductCard } from "@/components/ProductCard";
import { FunnelSimple, CaretDown } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title:
    "Rengjøringsmaskiner – Profesjonelle maskiner for alle behov | Premiere Produkter",
  description:
    "Høytrykkspylere, gulvvaskemaskiner, roboter og mer fra IPC Foma. Fri frakt og garanti på alle maskiner.",
};

const HERO_IMG =
  "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rengjoringsmaskin-1920-x806.webp";

const PRODUCTS = [
  {
    name: "IPC Foma PW-H60 høytrykkspyler",
    category: "Høytrykkspylere",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
    price: "kr 28 990,-",
    originalPrice: "kr 53 700,-",
    discount: "-46%",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: true,
  },
  {
    name: "IPC Foma CT231 gulvvaskemaskin",
    category: "Gulvvaskemaskiner",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
    price: "Fra kr 18 990,-",
    discount: "-36%",
    href: "/produkter/ipc-foma-ct231",
    inStock: true,
  },
  {
    name: "IPC CT110 BT70 gulvvaskemaskin",
    category: "Gulvvaskemaskiner",
    image:
      "https://premiere-produkter.no/wp-content/uploads/product_images/52490.webp",
    price: "Kontakt oss",
    href: "/produkter/ipc-ct110-bt70",
    inStock: true,
  },
  {
    name: "Autonom rengjøringsrobot",
    category: "Robotstøvsugere",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
    price: "Kontakt oss",
    href: "/produkter/autonom-rengjoringsrobot",
    inStock: false,
  },
  {
    name: "IPC CT80 BT55 gulvvaskemaskin",
    category: "Gulvvaskemaskiner",
    image:
      "https://premiere-produkter.no/wp-content/uploads/product_images/52380.webp",
    price: "Kontakt oss",
    href: "/produkter/ipc-ct80-bt55",
    inStock: true,
  },
  {
    name: "IPC CT5 B28 kompakt gulvvasker",
    category: "Gulvvaskemaskiner",
    image:
      "https://premiere-produkter.no/wp-content/uploads/product_images/52600.webp",
    price: "Kontakt oss",
    href: "/produkter/ipc-ct5-b28",
    inStock: true,
  },
];

const SUBCATEGORIES = [
  "Alle maskiner",
  "Høytrykkspylere",
  "Gulvvaskemaskiner",
  "Robotstøvsugere",
  "Tepperensere",
  "Poleringsmaskiner",
];

export default function CategoryPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ── Category Hero ── */}
      <section className="relative mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Rengjøringsmaskiner fra Premiere Produkter"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_160/0.92)] via-[oklch(0.15_0.03_160/0.7)] to-[oklch(0.15_0.03_160/0.4)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pb-18 sm:pt-28 lg:px-8">
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
            <span className="text-[oklch(0.95_0.008_160)]">
              Rengjøringsmaskiner
            </span>
          </nav>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Rengjøringsmaskiner
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-[oklch(0.82_0.015_160)]">
            Profesjonelle maskiner fra IPC Foma. Høytrykkspylere,
            gulvvaskemaskiner, roboter og mer. Alle med fri frakt og
            garanti.
          </p>
        </div>
      </section>

      {/* ── Main content: sidebar + grid ── */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* ── Mobile filter chips (horizontal scroll) ── */}
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 lg:hidden">
            <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-green-deep px-3 py-2 text-[0.8rem] font-medium text-white">
              <FunnelSimple size={16} weight="bold" />
              Filter
            </span>
            {SUBCATEGORIES.map((s, i) => (
              <button
                key={s}
                className={`shrink-0 rounded-lg px-3.5 py-2 text-[0.8rem] font-medium transition-colors ${
                  i === 0
                    ? "bg-green-deep text-white"
                    : "bg-sand text-text-mid hover:bg-sand-dark"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ── Desktop sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8 reveal">
              {/* Subcategories */}
              <div>
                <h3 className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-text-mid">
                  Underkategorier
                </h3>
                <ul className="mt-3 space-y-0.5">
                  {SUBCATEGORIES.map((s, i) => (
                    <li key={s}>
                      <a
                        href="#"
                        className={`block rounded-lg px-3 py-2 text-[0.9rem] transition-colors ${
                          i === 0
                            ? "bg-green-deep font-medium text-white"
                            : "text-text-dark hover:bg-sand"
                        }`}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price range */}
              <div>
                <h3 className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-text-mid">
                  Pris
                </h3>
                <div className="mt-3">
                  <div className="h-1.5 w-full rounded-full bg-sand-dark">
                    <div className="h-full w-3/5 rounded-full bg-terra" />
                  </div>
                  <div className="mt-2 flex justify-between text-[0.75rem] text-text-light">
                    <span>kr 0</span>
                    <span>kr 100 000+</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-text-mid">
                  Tilgjengelighet
                </h3>
                <div className="mt-3 space-y-2.5">
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-text-dark">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-sand-dark accent-green-deep"
                    />
                    På lager
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-text-dark">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-sand-dark accent-green-deep"
                    />
                    Bestillingsvare
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* ── Products section ── */}
          <section>
            {/* Toolbar */}
            <div className="mb-6 flex items-center justify-between reveal">
              <span className="text-[0.9rem] font-medium text-text-mid">
                {PRODUCTS.length} produkter
              </span>
              <div className="relative">
                <select
                  defaultValue="relevant"
                  className="appearance-none rounded-lg border border-sand-dark bg-sand py-2 pl-3 pr-9 text-[0.85rem] text-text-dark focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                >
                  <option value="relevant">Mest relevant</option>
                  <option value="price-asc">Pris: lav til høy</option>
                  <option value="price-desc">Pris: høy til lav</option>
                  <option value="name">Navn A-Å</option>
                </select>
                <CaretDown
                  size={14}
                  weight="bold"
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-light"
                />
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
