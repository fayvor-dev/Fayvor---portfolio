export default function BrowserFrame({ url, children, className = '' }) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-ink-700 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-ink-900 px-3 py-1 text-xs text-mist-dim">{host}</span>
      </div>
      {children}
    </div>
  );
}
