export default function Features() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1>Features</h1>
      <ul>
        <li>Trend signal: UP / DOWN / FLAT</li>
        <li>Forecast horizon: 7 / 30 / 90 / 180 / 365 days</li>
        <li>Region-based analysis</li>
        <li>AI-style summary: explanation + confidence + recommendation</li>
        <li>Clean chart (history + forecast)</li>
      </ul>

      <h2>Demo note</h2>
      <p>
        This is a CSV-based demo. The forecasting algorithm is intentionally
        simple and designed to be replaced with a real ML model later.
      </p>
    </div>
  );
}
