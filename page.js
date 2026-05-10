export default function Home() {
  return (
    <main style={styles.body}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Allin1 AI</h1>

        <p style={styles.subtitle}>
          One AI platform for chat, coding, resume generation,
          business ideas, content creation, and productivity.
        </p>

        <div style={styles.row}>
          <a href="#features" style={styles.btn}>
            Explore Features
          </a>

          <a href="#pricing" style={styles.btnDark}>
            View Pricing
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={styles.section}>
        <h2 style={styles.heading}>Everything in One AI</h2>

        <div style={styles.grid}>
          <Card icon="🤖" title="AI Chat" desc="Instant intelligent answers." />
          <Card icon="💻" title="Coding Assistant" desc="Generate & debug code faster." />
          <Card icon="📄" title="Resume Builder" desc="ATS-friendly resumes in seconds." />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <h2 style={styles.heading}>Pricing</h2>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Free</h3>
            <p>Basic access for everyone</p>
            <h1>₹0</h1>
          </div>

          <div style={styles.cardPro}>
            <h3>Pro</h3>
            <p>Full AI features unlocked</p>
            <h1>₹99 / month</h1>

            <div style={styles.upiBox}>
              UPI ID: 8149211153@ibl
            </div>

            <a
              href="upi://pay?pa=8149211153@ibl&pn=Allin1AI&am=99&cu=INR"
              style={styles.payBtn}
            >
              Pay Now
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Allin1 AI — Built by Ashish Shingare
      </footer>

    </main>
  );
}

/* COMPONENT */
function Card({ icon, title, desc }) {
  return (
    <div style={styles.card}>
      <div style={{ fontSize: 30 }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ color: "#aaa" }}>{desc}</p>
    </div>
  );
}

/* STYLES */
const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial",
    background: "#000",
    color: "#fff",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(#111, #000)",
  },

  title: {
    fontSize: 50,
    marginBottom: 10,
  },

  subtitle: {
    color: "#aaa",
    maxWidth: 600,
    margin: "0 auto 30px",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  btn: {
    background: "#fff",
    color: "#000",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: "bold",
  },

  btnDark: {
    border: "1px solid #444",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: 30,
    marginBottom: 30,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    maxWidth: 900,
    margin: "0 auto",
  },

  card: {
    background: "#111",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #333",
  },

  cardPro: {
    background: "#fff",
    color: "#000",
    padding: 20,
    borderRadius: 12,
  },

  upiBox: {
    marginTop: 10,
    fontSize: 12,
    color: "#333",
  },

  payBtn: {
    display: "block",
    marginTop: 15,
    background: "#000",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    textDecoration: "none",
  },

  footer: {
    textAlign: "center",
    padding: 20,
    borderTop: "1px solid #222",
    color: "#777",
  },
};
