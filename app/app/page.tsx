import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <header style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/govia-symbol.svg" alt="Govia" width="32" height="32" />
        <strong style={{ fontSize: 22 }}>Govia</strong>
      </header>

      <h1 style={{ fontSize: 40, margin: "20px 0 8px" }}>Plan slim. Boek zelf.</h1>
      <p style={{ fontSize: 18, marginTop: 0 }}>
        Vergelijk hotels en vluchten en bouw je reisplan met Govia.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
        <Link href="/nl">Nederlands →</Link>
        <Link href="/en">English →</Link>
      </div>

      <p style={{ opacity: 0.7, marginTop: 20 }}>
        MVP live — straks voegen we Hotels, Flights en AI Planner toe.
      </p>
    </main>
  );
}
