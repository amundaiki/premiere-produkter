import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const ARTICLES = [
  {
    slug: "slik-velger-du-riktig-hoytrykk",
    title: "Slik velger du riktig høytrykkspyler for bedriften",
    tag: "Tips og triks",
    date: "15. mars 2026",
    excerpt:
      "Valg av høytrykkspyler handler om mer enn bare trykk og pris. Vi ser på de viktigste faktorene du bør vurdere for å finne en maskin som passer virksomheten din.",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2026/02/d83805438ce2b0ce965a4361225228cfdd6d1361-1024x677.jpg",
  },
  {
    slug: "slik-velger-du-riktig-hoytrykk",
    title: "Fem tips for effektiv gulvvask i store lokaler",
    tag: "Guide",
    date: "8. mars 2026",
    excerpt:
      "Store flater krever riktig utstyr og metode. Her er fem tips som gir bedre resultat med mindre innsats.",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2023/12/Rengjoringsmaksin-ipc-foma.webp",
  },
  {
    slug: "slik-velger-du-riktig-hoytrykk",
    title: "Engangshansker: nitril vs. vinyl",
    tag: "Produktguide",
    date: "1. mars 2026",
    excerpt:
      "Nitril og vinyl har ulike egenskaper. Vi hjelper deg å velge riktig type for ditt bruksområde.",
    image:
      "https://premiere-produkter.no/wp-content/uploads/product_images/28134.webp",
  },
  {
    slug: "slik-velger-du-riktig-hoytrykk",
    title: "Hvordan forbedre moppens oppsugningsevne",
    tag: "Tips og triks",
    date: "20. feb 2026",
    excerpt:
      "En mopp som ikke suger godt nok, koster tid og gir dårligere resultat. Slik får du mest ut av utstyret.",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rekvisita-1920-x806.webp",
  },
  {
    slug: "slik-velger-du-riktig-hoytrykk",
    title: "Nye IPC Foma-maskiner til kampanjepris",
    tag: "Nyhet",
    date: "15. feb 2026",
    excerpt:
      "Vi har fått inn et begrenset parti IPC Foma-maskiner til sterkt reduserte priser. Først til mølle-prinsippet gjelder.",
    image:
      "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rengjoringsmaskin-1920-x806.webp",
  },
];

export default function ArtiklerPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="pt-28 pb-20 bg-cream">
        {/* Page header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-2xl reveal">
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
              Artikler og tips
            </h1>
            <p className="mt-4 text-lg text-text-mid leading-relaxed">
              Faglige artikler, produktguider og praktiske tips for
              profesjonelt renhold. Oppdatert av teamet hos Premiere
              Produkter.
            </p>
          </div>
        </div>

        {/* Featured article */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <Link
            href={`/artikler/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl bg-sand transition-shadow hover:shadow-lg reveal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-terra">
                  {featured.tag}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-text-dark sm:text-3xl leading-tight group-hover:text-green-mid transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-text-mid leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 text-sm text-text-light">
                  {featured.date}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Article grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {rest.map((article, i) => (
              <Link
                key={i}
                href={`/artikler/${article.slug}`}
                className="group overflow-hidden rounded-2xl bg-sand transition-shadow hover:shadow-lg reveal"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-terra">
                    {article.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-text-dark leading-snug group-hover:text-green-mid transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-mid leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 block text-xs text-text-light">
                    {article.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
