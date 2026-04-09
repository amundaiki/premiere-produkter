"use client";

import { ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "./CartProvider";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

export function AddToCartButton({ id, name, price, image }: AddToCartButtonProps) {
  const { addItem, setIsCartOpen } = useCart();

  function handleClick() {
    addItem({ id, name, price, image });
    setIsCartOpen(true);
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-green-deep px-6 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-green-mid"
    >
      <ShoppingBag size={20} weight="regular" />
      Legg i handlekurv
    </button>
  );
}
