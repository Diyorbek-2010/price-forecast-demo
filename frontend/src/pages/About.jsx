export default function About() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1>About</h1>
      <p>
        PriceForecast is a demo platform that estimates the future price trend of
        food and household goods using historical data. In the real product,
        this module will be replaced by a true ML/AI model and live data sources.
      </p>

      <h2>Problem</h2>
      <p>
        Price changes make planning difficult for households and small shops.
        Users need a simple way to see where the price is heading.
      </p>

      <h2>Solution</h2>
      <p>
        A single interface that shows trend, forecast chart, and an AI-style
        summary (confidence + recommendation).
      </p>
    </div>
  );
}
