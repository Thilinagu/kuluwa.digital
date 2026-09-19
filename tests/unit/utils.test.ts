import { describe, it, expect } from "vitest";
import { generateReference, cn } from "@/lib/utils";

describe("generateReference", () => {
  it("produces a KLW-prefixed reference", () => {
    const ref = generateReference();
    expect(ref).toMatch(/^KLW-[A-Z0-9]{4}-\d{5}$/);
  });

  it("produces unique references across calls", () => {
    const refs = new Set(Array.from({ length: 20 }, () => generateReference()));
    expect(refs.size).toBeGreaterThan(1);
  });
});

describe("cn", () => {
  it("merges class names and resolves Tailwind conflicts", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("text-sm", undefined, "font-bold")).toBe("text-sm font-bold");
  });
});
