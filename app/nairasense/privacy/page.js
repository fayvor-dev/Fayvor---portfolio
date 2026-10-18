export const metadata = { title: 'NairaSense Privacy' };

export default function NairaSensePrivacy() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 leading-relaxed text-charcoal/80">
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">NairaSense privacy (prototype v0.1.0)</h1>
        <p className="mt-6">This early version is a design prototype. It shows sample data only.</p>
        <ul className="mt-6 list-disc space-y-2 pl-6">
          <li>It does not collect, save or send any information you type.</li>
          <li>It has no accounts, analytics or advertising.</li>
          <li>It does not connect to your bank and never asks for passwords, PINs, OTPs or card details.</li>
          <li>It does not use the internet to function.</li>
        </ul>
        <p className="mt-6">
          When saving, export and the AI assistant are added, this page will be updated to describe exactly what is
          stored on your device and what, if anything, is shared.
        </p>
        <p className="mt-6">
          NairaSense is a budgeting and learning tool, not a bank or licensed financial adviser.
        </p>
      </div>
    </section>
  );
}
