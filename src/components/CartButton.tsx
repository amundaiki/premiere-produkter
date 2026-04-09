"use client";

import { ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 rounded-lg text-[oklch(0.92_0.01_160)] hover:text-white transition-colors"
      aria-label={`Handlekurv${cartCount > 0 ? `, ${cartCount} varer` : ""}`}
    >
      <ShoppingBag size={22} weight="regular" />
      {cartCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-terra px-1 text-[10px] font-semibold text-white leading-none">
          {cartCount}
        </span>
      )}
    </button>
  );
}
