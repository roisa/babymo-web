"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { shelfStore, SHELF_STEP } from "@/lib/cerita/shelf-store";

/** "Show more" under the shelf: the grid shows 12 books at a time. */
export function ShelfMore({ locale }: { locale: Locale }) {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    const up = () => setLeft(shelfStore.get().hiddenByLimit);
    up();
    return shelfStore.sub(up);
  }, []);
  if (!left) return null;
  const id = locale === "id";
  return (
    <div className="mt-10 flex justify-center">
      <button type="button" className="shelf-more tap" onClick={() => shelfStore.set({ limit: shelfStore.get().limit + SHELF_STEP })}>
        {id ? `Tampilkan lebih banyak (${left} lagi)` : `Show more (${left} more)`}
      </button>
    </div>
  );
}
