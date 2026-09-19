"use client";

import { useState, useMemo } from "react";
import type { Opportunity } from "@/types";
import { OpportunityCard } from "./OpportunityCard";

export function OpportunityGrid({ opportunities }: { opportunities: Opportunity[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(opportunities.map((o) => o.category)))],
    [opportunities],
  );
  const [active, setActive] = useState("All");
  const visible = active === "All" ? opportunities : opportunities.filter((o) => o.category === active);

  return (
    <>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? "rounded-full border border-coral bg-coral px-4 py-[9px] text-sm font-medium text-ink"
                : "rounded-full border border-border px-4 py-[9px] text-sm font-medium text-text-secondary dark:border-border-dark dark:text-text-dark-secondary"
            }
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((o) => (
          <OpportunityCard key={o.slug} opportunity={o} />
        ))}
      </div>
    </>
  );
}
