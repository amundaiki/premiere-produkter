import Image from "next/image";
import Link from "next/link";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";

const LOGO =
  "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg";

const PRODUKT_LINKS = [
  { label: "Renholdsmidler", href: "/kategori/rengjoringsmaskiner" },
  { label: "Rengjøringsmaskiner", href: "/kategori/rengjoringsmaskiner" },
  { label: "Tørkepapir", href: "/kategori/rengjoringsmaskiner" },
  { label: "Renholdsutstyr", href: "/kategori/rengjoringsmaskiner" },
  { label: "Servicebekledning", href: "/kategori/rengjoringsmaskiner" },
  { label: "Engangsprodukter", href: "/kategori/rengjoringsmaskiner" },
] as const;

const KUNDESERVICE_LINKS = [
  { label: "Kontakt oss", href: "/kontakt" },
  { label: "Frakt og levering", href: "#" },
  { label: "Datablad / HMS", href: "#" },
  { label: "Service", href: "#" },
  { label: "Leasing", href: "#" },
] as const;

const OM_OSS_LINKS = [
  { label: "Om Premiere Produkter", href: "/om-oss" },
  { label: "Artikler", href: "/artikler" },
  { label: "Miljøfyrtårn", href: "#" },
  { label: "Personvern", href: "#" },
] as const;

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.75_0.02_160)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => {
          const isInternal = link.href.startsWith("/");
          return (
            <li key={link.label}>
              {isInternal ? (
                <Link
                  href={link.href}
                  className="text-sm text-[oklch(0.72_0.01_160)] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-sm text-[oklch(0.72_0.01_160)] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-green-deep">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={LOGO}
                alt="Premiere Produkter"
                width={120}
                height={120}
                className="h-12 w-auto rounded-sm"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[oklch(0.72_0.01_160)]">
              Leverandør av profesjonelle renholdsmidler og
              rengjøringsutstyr til norske bedrifter siden 1978.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[oklch(0.62_0.01_160)]">
              <p className="flex items-center gap-2">
                <MapPin size={16} weight="regular" className="shrink-0" />
                Austbøsletta 6, 4085 Hundvåg
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} weight="regular" className="shrink-0" />
                51 85 83 00
              </p>
              <p className="flex items-center gap-2">
                <Envelope size={16} weight="regular" className="shrink-0" />
                post@premiere-produkter.no
              </p>
            </div>
          </div>

          {/* Produkter */}
          <FooterLinkList title="Produkter" links={PRODUKT_LINKS} />

          {/* Kundeservice + Om oss stacked */}
          <div className="space-y-8">
            <FooterLinkList title="Kundeservice" links={KUNDESERVICE_LINKS} />
            <FooterLinkList title="Om oss" links={OM_OSS_LINKS} />
          </div>

          {/* Contact CTA block */}
          <div className="rounded-xl bg-terra p-6">
            <h4 className="font-display text-lg font-semibold text-white">
              Trenger du hjelp?
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[oklch(0.88_0.03_45)]">
              Vi hjelper deg gjerne med å finne riktig produkt
              for din bedrift.
            </p>
            <a
              href="tel:51858300"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[oklch(0.45_0.12_45)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.40_0.12_45)]"
            >
              <Phone size={18} weight="regular" />
              Ring oss
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.22_0.03_160)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-xs text-[oklch(0.50_0.01_160)]">
            &copy; 2026 Premiere Produkter AS. Alle rettigheter forbeholdt.
          </span>
          <div className="flex items-center gap-4 text-xs text-[oklch(0.50_0.01_160)]">
            <span>Org.nr: 929 988 825</span>
            <span>Miljøfyrtårn-sertifisert</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
