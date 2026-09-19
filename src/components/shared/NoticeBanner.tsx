export function NoticeBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-sm border border-border border-l-[3px] border-l-coral bg-surface-1 px-5 py-4 text-[14.5px] text-text-secondary dark:border-border-dark dark:border-l-coral dark:bg-surface-dark-1 dark:text-text-dark-secondary">
      {children}
    </div>
  );
}
