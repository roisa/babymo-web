"use client";
export function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.print()} className="rounded-full bg-[#FFD447] px-5 py-2.5 text-sm font-extrabold text-[#3a2a00] shadow">
      {label}
    </button>
  );
}
