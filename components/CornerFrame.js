export default function CornerFrame({ children, className = '' }) {
  return (
    <div className={`corner-frame ${className}`}>
      <span className="cf-tr" aria-hidden="true" />
      <span className="cf-bl" aria-hidden="true" />
      {children}
    </div>
  );
}
