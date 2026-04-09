import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Rengjøringsmaskiner – Profesjonelle maskiner for alle behov | Premiere Produkter",
};

const HERO_IMG = "https://premiere-produkter.no/wp-content/uploads/2025/12/nett_prodmeny_bilde_rengjoringsmaskin-1920-x806.webp";

const PRODUCTS = [
  {
    name: "IPC Foma PW-H60 høytrykkspyler",
    cat: "Høytrykkspylere",
    img: "https://premiere-produkter.no/wp-content/uploads/2026/02/IPC-Foma-PW-H60-1813-edited.png",
    price: "kr 28 990,-",
    original: "kr 53 700,-",
    discount: "-46%",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: true,
  },
  {
    name: "IPC Foma CT231 gulvvaskemaskin",
    cat: "Gulvvaskemaskiner",
    img: "https://premiere-produkter.no/wp-content/uploads/2025/09/98394-768x768.jpg",
    price: "Fra kr 18 990,-",
    discount: "-36%",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: true,
  },
  {
    name: "IPC CT110 BT70 gulvvaskemaskin",
    cat: "Gulvvaskemaskiner",
    img: "https://premiere-produkter.no/wp-content/uploads/product_images/52490.webp",
    price: "Kontakt oss for pris",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: true,
  },
  {
    name: "Autonom rengjøringsrobot",
    cat: "Robotstøvsugere",
    img: "https://premiere-produkter.no/wp-content/uploads/2024/10/MonsterAutonom.webp",
    price: "Kontakt oss for pris",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: false,
  },
  {
    name: "IPC CT80 BT55 gulvvaskemaskin",
    cat: "Gulvvaskemaskiner",
    img: "https://premiere-produkter.no/wp-content/uploads/product_images/52380.webp",
    price: "Kontakt oss for pris",
    href: "/produkter/ipc-foma-pw-h60",
    inStock: true,
  },
  {
    name: "IPC CT5 B28 kompakt gulvvasker",
    cat: "Gulvvaskemaskiner",
    img: "https://premiere-produkter.no/wp-content/uploads/product_images/52600.webp",
    price: "Kontakt oss for pris",
    href: "/produkter/ipc-foma-pw-h60",
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

      {/* Category Hero */}
      <section className="category-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="category-hero-overlay">
          <nav className="breadcrumb breadcrumb-light">
            <Link href="/">Hjem</Link>
            <span>/</span>
            <span>Rengjøringsmaskiner</span>
          </nav>
          <h1>Rengjøringsmaskiner</h1>
          <p>Profesjonelle maskiner fra IPC Foma. Høytrykkspylere, gulvvaskemaskiner, roboter og mer. Alle med fri frakt og garanti.</p>
        </div>
      </section>

      <main className="category-content">
        {/* Filters */}
        <aside className="category-filters reveal">
          <h3>Underkategorier</h3>
          <ul className="filter-list">
            {SUBCATEGORIES.map((s, i) => (
              <li key={s}>
                <a href="#" className={i === 0 ? "filter-active" : ""}>{s}</a>
              </li>
            ))}
          </ul>

          <h3>Pris</h3>
          <div className="filter-range">
            <div className="filter-range-bar">
              <div className="filter-range-fill" />
            </div>
            <div className="filter-range-labels">
              <span>kr 0</span>
              <span>kr 100 000+</span>
            </div>
          </div>

          <h3>Tilgjengelighet</h3>
          <label className="filter-check">
            <input type="checkbox" defaultChecked /> På lager
          </label>
          <label className="filter-check">
            <input type="checkbox" /> Bestillingsvare
          </label>
        </aside>

        {/* Products Grid */}
        <section className="category-products">
          <div className="category-toolbar reveal">
            <span className="category-count">{PRODUCTS.length} produkter</span>
            <select className="category-sort" defaultValue="relevant">
              <option value="relevant">Mest relevant</option>
              <option value="price-asc">Pris: lav til høy</option>
              <option value="price-desc">Pris: høy til lav</option>
              <option value="name">Navn A-Å</option>
            </select>
          </div>
          <div className="products-grid category-grid reveal">
            {PRODUCTS.map((p) => (
              <Link href={p.href} className="product-card" key={p.name}>
                <div className="product-card-img">
                  <Image src={p.img} alt={p.name} width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1.5rem" }} />
                </div>
                <div className="product-card-body">
                  <div className="product-card-category">{p.cat}</div>
                  <h4>{p.name}</h4>
                  <div className="product-card-price">
                    <span className="current">{p.price}</span>
                    {p.original && <span className="original">{p.original}</span>}
                    {p.discount && <span className="discount">{p.discount}</span>}
                  </div>
                  <div className={`product-card-stock ${p.inStock ? "in-stock" : "order-item"}`}>
                    {p.inStock ? "På lager" : "Bestillingsvare"}
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
