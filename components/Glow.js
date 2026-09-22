/**
 * Soft blurred gradient blobs used behind hero/CTA sections for texture.
 * Purely decorative — aria-hidden, absolutely positioned within a
 * `relative` + `overflow-hidden` parent.
 */
export default function Glow({ variant = 'gold' }) {
  const colors = {
    gold: ['#C9A227', '#B5652F'],
    teal: ['#1E6E68', '#14294A'],
    copper: ['#B5652F', '#C9A227'],
  };
  const [c1, c2] = colors[variant] || colors.gold;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-[0.15] blur-[110px] animate-float"
        style={{ background: c1 }}
      />
      <div
        className="absolute -bottom-40 -right-24 h-[24rem] w-[24rem] rounded-full opacity-[0.12] blur-[110px] animate-float"
        style={{ background: c2, animationDelay: '3s' }}
      />
    </div>
  );
}
