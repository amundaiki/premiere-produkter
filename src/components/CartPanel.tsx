"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Minus,
  Plus,
  Trash,
  ShoppingCart,
} from "@phosphor-icons/react";
import { useCart } from "./CartProvider";

export function CartPanel() {
  const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen } =
    useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay fixed inset-0 z-40 bg-text-dark/40 ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`cart-panel-enter fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-2xl ${isCartOpen ? "open" : ""}`}
        aria-label="Handlekurv"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand-dark px-6 py-4">
          <h2 className="font-display text-lg font-semibold text-green-deep">
            Handlekurv
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg p-1.5 text-text-mid transition-colors hover:bg-sand hover:text-text-dark"
            aria-label="Lukk handlekurv"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            <ShoppingCart
              size={56}
              weight="thin"
              className="text-text-light"
            />
            <p className="text-text-mid">Handlekurven er tom</p>
            <Link
              href="/kategori/rengjoringsmaskiner"
              onClick={() => setIsCartOpen(false)}
              className="text-sm font-medium text-green-mid underline underline-offset-2 transition-colors hover:text-green-deep"
            >
              Se produkter
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border-b border-sand-dark py-4 last:border-b-0"
                >
                  {/* Product image */}
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-sand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium leading-snug text-text-dark">
                      {item.name}
                    </p>
                    <p className="text-sm text-text-mid">{item.price}</p>

                    {/* Quantity controls */}
                    <div className="mt-auto flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded p-1 text-text-mid transition-colors hover:bg-sand hover:text-text-dark"
                        aria-label="Reduser antall"
                      >
                        <Minus size={16} weight="bold" />
                      </button>
                      <span className="min-w-[1.5rem] text-center text-sm font-medium text-text-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded p-1 text-text-mid transition-colors hover:bg-sand hover:text-text-dark"
                        aria-label="Oker antall"
                      >
                        <Plus size={16} weight="bold" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start rounded p-1 text-text-light transition-colors hover:bg-sand hover:text-terra"
                    aria-label={`Fjern ${item.name}`}
                  >
                    <Trash size={18} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-sand-dark px-6 py-4">
              <Link
                href="/kassen"
                onClick={() => setIsCartOpen(false)}
                className="block w-full rounded-lg bg-green-deep py-3 text-center text-sm font-semibold text-sand transition-colors hover:bg-green-mid"
              >
                Ga til kassen
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-3 block w-full text-center text-sm text-text-mid transition-colors hover:text-text-dark"
              >
                Fortsett a handle
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
