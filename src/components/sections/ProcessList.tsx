export function ProcessList({ steps }: { steps: string[] }) {
  return (
    <div className="border-t border-border dark:border-border-dark">
      {steps.map((step, i) => (
        <div key={step} className="grid grid-cols-[60px_1fr] gap-5 border-b border-border py-6 dark:border-border-dark">
          <span className="font-mono text-sm text-coral">{String(i + 1).padStart(2, "0")}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}
