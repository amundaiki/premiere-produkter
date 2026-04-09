import Link from "next/link";
import { Phone, Envelope, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const TEAM = [
  {
    name: "Frode Larsen",
    role: "Daglig leder",
    phone: "930 17 477",
    email: "frode@premiere-produkter.no",
    initials: "FL",
    color: "bg-terra",
  },
  {
    name: "Arild Broberg",
    role: "Innkjøpssjef",
    phone: "95 25 54 02",
    email: "arild@premiere-produkter.no",
    initials: "AB",
    color: "bg-green-mid",
  },
  {
    name: "Eirik Hope",
    role: "Salgssjef",
    phone: "929 41 013",
    email: "eirik@premiere-produkter.no",
    initials: "EH",
    color: "bg-green-light",
  },
  {
    name: "Terje Fjærestrand",
    role: "Selger, Østlandet",
    phone: "916 24 885",
    email: "terje@premiere-produkter.no",
    initials: "TF",
    color: "bg-terra-light",
  },
  {
    name: "Eddi Heggholmen",
    role: "Selger, Vestlandet",
    phone: "95 25 54 19",
    email: "eddi@premiere-produkter.no",
    initials: "EH",
    color: "bg-green-deep",
  },
  {
    name: "Tommy Hansen",
    role: "IT / Grafisk",
    phone: "952 55 406",
    email: "tommy@premiere-produkter.no",
    initials: "TH",
    color: "bg-green-mid",
  },
];

export default function KontaktPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="pt-28 pb-20 bg-cream">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-2xl reveal">
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
              Kontakt oss
            </h1>
            <p className="mt-4 text-lg text-text-mid leading-relaxed">
              Vi hjelper deg gjerne med å finne riktige produkter for din
              bedrift. Ring, send e-post eller fyll ut skjemaet under.
            </p>
          </div>
        </div>

        {/* Form + Info */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Contact form */}
            <div className="rounded-2xl bg-sand p-8 sm:p-10 reveal">
              <h2 className="font-display text-2xl font-bold text-text-dark mb-8">
                Send oss en melding
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Bedriftsnavn
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                      placeholder="Ditt firma AS"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Kontaktperson
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                      placeholder="Ola Nordmann"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                      placeholder="ola@firma.no"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                      placeholder="400 00 000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark mb-1.5"
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition resize-none"
                    placeholder="Fortell oss hva du trenger hjelp med..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-terra px-8 py-3 text-sm font-semibold text-[oklch(0.98_0.005_45)] transition-colors hover:bg-terra-light"
                >
                  Send melding
                </button>
              </form>
            </div>

            {/* Company info */}
            <div className="space-y-8 reveal">
              <div className="rounded-2xl bg-green-deep p-8">
                <h3 className="font-display text-lg font-semibold text-[oklch(0.92_0.01_160)] mb-6">
                  Kontaktinformasjon
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      weight="regular"
                      className="mt-0.5 shrink-0 text-[oklch(0.65_0.01_160)]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[oklch(0.88_0.01_160)]">
                        Adresse
                      </p>
                      <p className="text-sm text-[oklch(0.68_0.01_160)]">
                        Austbøsletta 6, 4085 Hundvåg
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      weight="regular"
                      className="mt-0.5 shrink-0 text-[oklch(0.65_0.01_160)]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[oklch(0.88_0.01_160)]">
                        Telefon
                      </p>
                      <a
                        href="tel:51858300"
                        className="text-sm text-[oklch(0.68_0.01_160)] hover:text-[oklch(0.85_0.01_160)] transition-colors"
                      >
                        51 85 83 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Envelope
                      size={20}
                      weight="regular"
                      className="mt-0.5 shrink-0 text-[oklch(0.65_0.01_160)]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[oklch(0.88_0.01_160)]">
                        E-post
                      </p>
                      <a
                        href="mailto:post@premiere-produkter.no"
                        className="text-sm text-[oklch(0.68_0.01_160)] hover:text-[oklch(0.85_0.01_160)] transition-colors"
                      >
                        post@premiere-produkter.no
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      size={20}
                      weight="regular"
                      className="mt-0.5 shrink-0 text-[oklch(0.65_0.01_160)]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[oklch(0.88_0.01_160)]">
                        Åpningstider
                      </p>
                      <p className="text-sm text-[oklch(0.68_0.01_160)]">
                        Man-fre 08:00-16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <h2 className="font-display text-3xl font-bold text-text-dark">
              Vårt team
            </h2>
            <p className="mt-3 text-text-mid">
              Ta direkte kontakt med den som kan hjelpe deg best.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-sand p-6 reveal"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${member.color}`}
                  >
                    <span className="text-sm font-semibold text-[oklch(0.95_0.01_160)]">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-text-dark">
                      {member.name}
                    </h3>
                    <p className="text-sm text-text-mid">{member.role}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-text-mid hover:text-text-dark transition-colors"
                  >
                    <Phone size={16} weight="regular" className="shrink-0 text-text-light" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-text-mid hover:text-text-dark transition-colors"
                  >
                    <Envelope size={16} weight="regular" className="shrink-0 text-text-light" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
