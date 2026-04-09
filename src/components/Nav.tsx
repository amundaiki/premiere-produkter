import Image from "next/image";
import Link from "next/link";
import { NavScroll } from "./NavScroll";

const LOGO = "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg";

export function Nav() {
  return (
    <>
      <NavScroll />
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src={LOGO} alt="Premiere Produkter" width={40} height={40} style={{ height: 40, width: "auto", borderRadius: 2 }} />
          </Link>
          <ul className="nav-links">
            <li><Link href="/kategori/rengjoringsmaskiner">Produkter</Link></li>
            <li><Link href="/produkter/ipc-foma-pw-h60">Kampanjer</Link></li>
            <li><Link href="/artikler/slik-velger-du-riktig-hoytrykk">Artikler</Link></li>
            <li><Link href="/seo-rapport">SEO-rapport</Link></li>
            <li><Link href="/#kontakt">Kontakt</Link></li>
            <li><Link href="/logginn" className="nav-cta">Logg inn</Link></li>
          </ul>
          <button className="nav-mobile" aria-label="Meny">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
