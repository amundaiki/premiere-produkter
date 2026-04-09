import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, List } from "@phosphor-icons/react/dist/ssr";
import { CartButton } from "./CartButton";

const LOGO =
  "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg";

const NAV_LINKS = [
  { label: "Produkter", href: "/kategori/rengjoringsmaskiner" },
  { label: "Kampanjer", href: "/produkter/ipc-foma-pw-h60" },
  { label: "Artikler", href: "/artikler" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-deep">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={LOGO}
            alt="Premiere Produkter"
            width={40}
            height={40}
            className="h-10 w-auto rounded-sm"
          />
        </Link>

        {/* Center nav links - hidden on mobile */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[oklch(0.85_0.01_160)] transition-colors hover:text-white hover:bg-[oklch(0.22_0.04_160)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <button
            className="p-2 rounded-lg text-[oklch(0.85_0.01_160)] hover:text-white transition-colors"
            aria-label="Sok"
          >
            <MagnifyingGlass size={22} weight="regular" />
          </button>

          {/* Cart - client component */}
          <CartButton />

          {/* Login button - hidden on small mobile */}
          <Link
            href="/logginn"
            className="ml-2 hidden rounded-lg bg-terra px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-terra-light sm:inline-block"
          >
            Logg inn
          </Link>

          {/* Mobile menu button */}
          <button
            className="ml-1 p-2 rounded-lg text-[oklch(0.85_0.01_160)] hover:text-white transition-colors md:hidden"
            aria-label="Meny"
          >
            <List size={24} weight="regular" />
          </button>
        </div>
      </div>
    </nav>
  );
}
