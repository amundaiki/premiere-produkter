import Image from "next/image";
import Link from "next/link";

const LOGO = "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <Image src={LOGO} alt="Premiere Produkter" width={120} height={120} style={{ height: 48, width: "auto", borderRadius: 2 }} />
          </div>
          <p className="footer-about">
            Leverandør av profesjonelle renholdsmidler og rengjøringsutstyr
            til norske bedrifter siden 1978.
          </p>
        </div>
        <div>
          <h4>Produkter</h4>
          <ul className="footer-links">
            <li><Link href="/kategori/rengjoringsmaskiner">Rengjøringsmaskiner</Link></li>
            <li><Link href="/kategori/rengjoringsmaskiner">Renholdsmidler</Link></li>
            <li><Link href="/kategori/rengjoringsmaskiner">Tørkepapir</Link></li>
            <li><Link href="/kategori/rengjoringsmaskiner">Renholdsutstyr</Link></li>
            <li><Link href="/kategori/rengjoringsmaskiner">Servicebekledning</Link></li>
            <li><Link href="/kategori/rengjoringsmaskiner">Engangsprodukter</Link></li>
          </ul>
        </div>
        <div>
          <h4>Kundeservice</h4>
          <ul className="footer-links">
            <li><Link href="/#kontakt">Kontakt oss</Link></li>
            <li><a href="#">Frakt og levering</a></li>
            <li><a href="#">Datablad / HMS</a></li>
            <li><a href="#">Service og vedlikehold</a></li>
            <li><a href="#">Leasing</a></li>
          </ul>
        </div>
        <div>
          <h4>Om oss</h4>
          <ul className="footer-links">
            <li><a href="#">Om Premiere Produkter</a></li>
            <li><a href="#">Forhandlere</a></li>
            <li><a href="#">Miljøfyrtårn</a></li>
            <li><Link href="/artikler/slik-velger-du-riktig-hoytrykk">Tips og triks</Link></li>
            <li><a href="#">Personvern</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Premiere Produkter AS. Alle rettigheter forbeholdt.</span>
        <div className="footer-certs">
          <span>Org.nr: 912 345 678</span>
          <span>Miljøfyrtårn-sertifisert</span>
        </div>
      </div>
    </footer>
  );
}
