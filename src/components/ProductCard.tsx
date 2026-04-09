import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  href: string;
  inStock?: boolean;
}

export function ProductCard({
  name,
  category,
  image,
  price,
  originalPrice,
  discount,
  href,
  inStock,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded bg-[var(--color-sand)] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden rounded-t bg-[var(--color-sand-dark)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
        />
      </div>

      <div className="px-4 pb-5 pt-4">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-terra)]">
          {category}
        </span>

        <h3 className="mt-1.5 font-['Bricolage_Grotesque'] text-[1.1rem] leading-snug text-[var(--color-text-dark)]">
          {name}
        </h3>

        <div className="mt-3 flex items-baseline gap-2.5">
          <span className="text-[1.05rem] font-bold text-[var(--color-green-deep)]">
            {price}
          </span>

          {originalPrice && (
            <span className="text-[0.8rem] text-[var(--color-text-light)] line-through">
              {originalPrice}
            </span>
          )}

          {discount && (
            <span className="text-[0.75rem] font-semibold text-[var(--color-terra)]">
              {discount}
            </span>
          )}
        </div>

        {inStock !== undefined && (
          <div className="mt-3 flex items-center gap-1.5">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                inStock
                  ? "bg-[var(--color-green-mid)]"
                  : "bg-[var(--color-text-light)]"
              }`}
              aria-hidden="true"
            />
            <span className="text-[0.7rem] text-[var(--color-text-mid)]">
              {inStock ? "På lager" : "Bestillingsvare"}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
