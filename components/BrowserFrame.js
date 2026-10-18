export default function BrowserFrame({ url, children, className = '' }) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div
      className={`overflow-hidden border border-charcoal/15 bg-ivory-50 shadow-[0_28px_60px_-30px_rgba(22,22,22,0.4)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-charcoal/10 bg-ivory-200 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal/20" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-sm bg-ivory-50 px-3 py-1 text-xs text-muted">
          {host}
        </span>
      </div>
      {children}
    </div>
  );
}
