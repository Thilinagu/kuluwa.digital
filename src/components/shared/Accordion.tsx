"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative h-5 w-5 flex-none">
      <span className="absolute left-0 top-[9px] h-[2px] w-5 bg-coral" />
      <span
        className={`absolute left-[9px] top-0 h-5 w-[2px] bg-coral transition-transform duration-150 ${open ? "rotate-90 opacity-0" : ""}`}
      />
    </span>
  );
}

export function Accordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-border dark:border-border-dark">
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-text-primary dark:text-text-dark-primary"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              <PlusMinus open={isOpen} />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <div className="max-w-[640px] pb-5 text-text-secondary dark:text-text-dark-secondary">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
