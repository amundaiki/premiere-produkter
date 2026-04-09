import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "IPC Foma PW-H60 varmtvanns høytrykkspyler – kr 28 990,- | Premiere Produkter",
};

const IMAGES = {
  main: "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
  detail1: "https://premiere-produkter.no/wp-content/uploads/2026/02/d83805438ce2b0ce965a4361225228cfdd6d1361-1024x677.jpg",
  detail2: "https://premiere-produkter.no/wp-content/uploads/2026/02/838adb31caab55d644627fbc15f179163b9ec9e4-1024x683.jpg",
  detail3: "https://premiere-produkter.no/wp-content/uploads/2026/02/32458f96a6c8651e5932ccda6a1c3d2d04f804bb-1024x647.jpg",
  vinyl: "https://premiere-produkter.no/wp-content/uploads/product_images/28134.webp",
  gulvvasker: "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
  robot: "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
};

export default function ProductPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="page-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">Hjem</Link>
          <span>/</span>
          <Link href="/kategori/rengjoringsmaskiner">Rengjøringsmaskiner</Link>
          <span>/</span>
          <span>IPC Foma PW-H60</span>
        </nav>

        {/* Product Detail */}
        <section className="product-detail">
          <div className="product-gallery">
            <div className="product-main-img">
              <Image src={IMAGES.main} alt="IPC Foma PW-H60 høytrykkspyler" width={600} height={600} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </div>
            <div className="product-thumbs">
              {[IMAGES.detail1, IMAGES.detail2, IMAGES.detail3].map((src, i) => (
                <div className="product-thumb" key={i}>
                  <Image src={src} alt={`Detalj ${i + 1}`} width={120} height={80} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-info-category">Høytrykkspylere</div>
            <h1>IPC Foma PW-H60 1813 Foma Edition</h1>
            <p className="product-subtitle">Varmtvanns høytrykkspyler, 3x230V eller 3x400V</p>

            <div className="product-pricing">
              <div className="product-price">kr 28 990,-</div>
              <div className="product-price-meta">
                <span className="product-original">Veil. kr 53 700,-</span>
                <span className="product-discount">Spar 46%</span>
              </div>
              <div className="product-vat">inkl. mva, fritt levert</div>
            </div>

            <ul className="product-specs">
              <li><strong>Spenning</strong> 3x230V eller 3x400V</li>
              <li><strong>Trykk</strong> 180 bar</li>
              <li><strong>Vannmengde</strong> 780 l/t</li>
              <li><strong>Temperatur</strong> maks 140°C</li>
              <li><strong>Vekt</strong> ca. 95 kg</li>
              <li><strong>Levering</strong> 2-3 virkedager, fritt i hele Norge</li>
              <li><strong>Garanti</strong> 2 år</li>
            </ul>

            <div className="product-actions">
              <button className="btn-primary" style={{ border: "none", cursor: "pointer", fontSize: "1rem" }}>
                Legg i handlekurv
              </button>
              <a href="tel:+4751653990" className="btn-outline">Ring oss: 51 65 39 90</a>
            </div>

            <div className="product-stock">
              <span className="stock-dot" /> Begrenset antall på lager
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="product-description reveal">
          <h2>Om produktet</h2>
          <p>
            IPC Foma PW-H60 1813 Foma Edition er en kraftig varmtvanns høytrykkspyler
            designet for profesjonell bruk. Med 180 bar trykk og vanntemperatur opp til
            140°C takler den de tøffeste rengjøringsoppgavene i industri, verksted,
            landbruk og transport.
          </p>
          <p>
            Maskinen leveres komplett med 15 meter høytrykkslange, pistol, lanse
            og dyse. Den kompakte designen gjør den enkel å flytte mellom
            arbeidsstasjoner, og de store hjulene sikrer god mobilitet selv på
            ujevnt underlag.
          </p>
          <div className="product-detail-images">
            <Image src={IMAGES.detail1} alt="PW-H60 i bruk" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: 3 }} />
            <Image src={IMAGES.detail2} alt="PW-H60 detaljer" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: 3 }} />
          </div>
        </section>

        {/* Related */}
        <section className="related-products reveal">
          <h2 className="section-title">Relaterte produkter</h2>
          <div className="products-grid" style={{ maxWidth: 1100 }}>
            {[
              { name: "Vinylhansker, pudderfrie, 100 stk", cat: "Hansker", img: IMAGES.vinyl, price: "kr 29,50", discount: "-51%" },
              { name: "IPC Foma gulvvaskemaskin CT231", cat: "Maskiner", img: IMAGES.gulvvasker, price: "Fra kr 18 990,-", discount: "-36%" },
              { name: "Autonom rengjøringsrobot", cat: "Maskiner", img: IMAGES.robot, price: "Kontakt oss" },
            ].map((p) => (
              <Link href="/produkter/ipc-foma-pw-h60" className="product-card" key={p.name}>
                <div className="product-card-img">
                  <Image src={p.img} alt={p.name} width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1.5rem" }} />
                </div>
                <div className="product-card-body">
                  <div className="product-card-category">{p.cat}</div>
                  <h4>{p.name}</h4>
                  <div className="product-card-price">
                    <span className="current">{p.price}</span>
                    {p.discount && <span className="discount">{p.discount}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
