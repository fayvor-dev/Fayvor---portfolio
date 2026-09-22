/**
 * Soft blurred gradient blobs used behind hero/CTA sections for texture.
 * Purely decorative — aria-hidden, absolutely positioned within a
 * `relative` + `overflow-hidden` parent.
 */
export default function Glow({ variant = 'lime' }) {
  const colors = {
    lime: ['#D7E639', '#C1642E'],
    sage: ['#4F8478', '#1B0A0F'],
    clay: ['#C1642E', '#D7E639'],
  };
  const [c1, c2] = colors[variant] || colors.lime;

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
