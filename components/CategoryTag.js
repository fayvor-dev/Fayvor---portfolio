import { categoryStyles } from '@/lib/data';

export default function CategoryTag({ category, className = '' }) {
  const style = categoryStyles[category] || categoryStyles.Design;

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase ${style.text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {category}
    </span>
  );
}
