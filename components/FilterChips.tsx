"use client";

import { useState } from "react";

export type Chip = { value: string; label: string; count?: number };

type Props = {
  chips: Chip[];
  initial?: string;
  onChange?: (value: string) => void;
  children?: (active: string) => React.ReactNode;
};

/**
 * Horizontally scrolling iOS-style pill filters with an internal state.
 * If `children` is provided as a render-prop, the active value is passed in
 * so the consumer can render a filtered list inline.
 */
export function FilterChips({ chips, initial, onChange, children }: Props) {
  const first = chips[0]?.value ?? "";
  const [active, setActive] = useState(initial ?? first);

  function select(v: string) {
    setActive(v);
    onChange?.(v);
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter"
        className="pillscroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
      >
        {chips.map((c) => {
          const isActive = c.value === active;
          return (
            <button
              key={c.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => select(c.value)}
              className={
                "tap whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition " +
                (isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-hairline bg-paper text-ink-soft hover:border-sage/40")
              }
            >
              {c.label}
              {typeof c.count === "number" && (
                <span
                  className={
                    "ml-1.5 text-[11px] font-medium " +
                    (isActive ? "text-paper/70" : "text-whisper")
                  }
                >
                  {c.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {children?.(active)}
    </>
  );
}
