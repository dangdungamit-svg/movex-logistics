// Short brand intro shown when the homepage opens.
// Pure CSS: it fades away on its own and never blocks clicks,
// so the page stays usable even if JavaScript is slow or off.
export default function IntroSplash() {
  return (
    <div className="movex-intro" aria-hidden="true">
      <span className="movex-intro-word">MOVEX</span>
      <span className="movex-intro-line" />
    </div>
  );
}
