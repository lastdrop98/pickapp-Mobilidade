/**
 * Continuous site-wide ambient background.
 * Large, slowly drifting brand-coloured blue/green blobs behind every section.
 * Purely decorative, transform/opacity only, honours prefers-reduced-motion.
 */
export const AmbientBackground = () => (
  <div aria-hidden="true" className="ambient-bg">
    <span className="ambient-blob ambient-blob--blue" />
    <span className="ambient-blob ambient-blob--green" />
    <span className="ambient-blob ambient-blob--mix" />
    <span className="ambient-blob ambient-blob--teal" />
  </div>
);
