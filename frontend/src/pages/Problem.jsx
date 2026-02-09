import { Link } from "react-router-dom";

function Card({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-2 leading-relaxed">{text}</div>
    </div>
  );
}

export default function Problem() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">Problem</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Price instability makes planning difficult
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Households and small businesses struggle to decide when to buy,
          how much to stock, and how prices will change in the near future.
        </p>
      </div>

      {/* MAIN PROBLEMS */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card
          title="Unpredictable price spikes"
          text="Food and household goods can suddenly increase in price without warning."
        />
        <Card
          title="No simple forecasting tools"
          text="Most people do not have access to clear and simple price predictions."
        />
        <Card
          title="Poor buying decisions"
          text="People often buy at peak prices and overspend unnecessarily."
        />
        <Card
          title="Small business risks"
          text="Shop owners struggle to manage inventory due to price uncertainty."
        />
        <Card
          title="Regional price differences"
          text="Prices vary by region and are difficult to track in real time."
        />
        <Card
          title="Lack of data visibility"
          text="Historical price data exists but is not used effectively."
        />
      </div>

      {/* REAL LIFE EXAMPLE */}
      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h2 className="text-2xl font-bold">Real-life impact</h2>

        <p className="text-white/70 mt-4 leading-relaxed">
          A family buys flour at a high price because they cannot predict that
          prices will drop next week. Small shop owners restock at the wrong
          time and lose profit due to sudden market changes.
        </p>

        <p className="text-white/70 mt-4 leading-relaxed">
          Without simple forecasting tools, both households and businesses
          rely on guesswork instead of data-driven decisions.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">We aim to solve this</h2>

        <p className="text-white/70 mt-3">
          Our AI-based system analyzes historical data and predicts future price movement.
        </p>

        <Link
          to="/demo"
          className="inline-block mt-6 px-8 py-4 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90"

        >
          🚀 Try Demo
        </Link>
      </div>
    </div>
  );
}
