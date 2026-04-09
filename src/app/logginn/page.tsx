import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const LOGO =
  "https://premiere-produkter.no/wp-content/uploads/2025/03/Logo-premiere-produkter.jpeg";

export default function LoggInnPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-cream pt-16 px-4">
        <div className="w-full max-w-md reveal">
          <div className="rounded-2xl bg-sand p-8 sm:p-10 shadow-sm">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src={LOGO}
                alt="Premiere Produkter"
                width={56}
                height={56}
                className="h-14 w-auto rounded-sm"
              />
            </div>

            <h1 className="font-display text-2xl font-bold text-text-dark text-center mb-8">
              Logg inn
            </h1>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-text-dark mb-1.5"
                >
                  E-post
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-text-dark mb-1.5"
                >
                  Passord
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-sand-dark bg-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-terra/40 transition"
                  placeholder="Ditt passord"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-terra px-6 py-3 text-sm font-semibold text-[oklch(0.98_0.005_45)] transition-colors hover:bg-terra-light"
              >
                Logg inn
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <Link
                href="#"
                className="block text-sm text-text-mid hover:text-text-dark transition-colors"
              >
                Glemt passord?
              </Link>
              <p className="text-sm text-text-light">
                Ny kunde?{" "}
                <Link
                  href="#"
                  className="font-medium text-terra hover:text-terra-light transition-colors"
                >
                  Registrer deg
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
