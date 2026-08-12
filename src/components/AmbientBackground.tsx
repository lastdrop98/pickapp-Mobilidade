/**
 * Continuous site-wide ambient background.
 * A single near-white canvas with 3 large, slowly drifting brand-coloured
 * blobs behind every section — no hard colour cuts between sections.
 * Purely decorative, transform/opacity only, honours prefers-reduced-motion.
 */
export const AmbientBackground = () => (
  <div aria-hidden="true" className="ambient-bg">
    <span className="ambient-blob ambient-blob--blue" />
    <span className="ambient-blob ambient-blob--green" />
    <span className="ambient-blob ambient-blob--mix" />
  </div>
);
