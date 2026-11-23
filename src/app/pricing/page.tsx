
import ContentPage from "@/components/ContentPage";
import {
  ShieldCheck,
  LockKeyhole,
  Check,
  MessageCircle,

} from "@/components/Icons";

const benefits = [
  "Lifetime access to Tempo",
  "No monthly subscription",
  "No yearly subscription",
  "Private messaging experience",
  "Self-destructing messages",
  "Screenshot and screen-recording protection",
  "View-once file sharing",
];

export default function Pricing() {
  return (
    <ContentPage
      eyebrow="Simple, Lifetime Pricing"
      title="Pay once. Own your access."
      description="No recurring subscriptions. No monthly bills. No yearly renewals. One payment gives you lifetime access to Tempo."
    >
      <div className="simple-panel" style={{ maxWidth: "760px", margin: "0 auto", padding: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <div
            className="feature-icon"
            style={{ margin: "0 auto 20px" }}
          >
            <ShieldCheck />
          </div>

          <span className="panel-kicker">
            TEMPO LIFETIME ACCESS
          </span>

          <h2 style={{ fontSize: "clamp(42px, 7vw, 64px)", margin: "15px 0 5px" }}>
            ₦100,000
          </h2>

          <p style={{ fontWeight: 700, color: "var(--brown)" }}>
            One-time payment. Lifetime access.
          </p>

          <p>
            Purchase your Tempo access code once and enjoy
            access without monthly or yearly subscription fees.
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--line)",
            margin: "30px 0",
            paddingTop: "25px",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            What's included
          </h3>

          <div style={{ display: "grid", gap: "16px" }}>
            {benefits.map((benefit) => (
              <div
                key={benefit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                }}
              >
                <Check
                  size={18}
                  style={{ color: "#96704e", flexShrink: 0 }}
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#fbf5ef",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "25px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
           <ShieldCheck size={22} />
            <strong>No recurring payments</strong>
          </div>

          <p style={{ fontSize: "13px", margin: 0 }}>
            ₦100,000 is a one-time lifetime access fee.
            You will not be charged monthly or yearly
            subscription fees for your access.
          </p>
        </div>

        <h3 style={{ marginBottom: "15px" }}>
          How to get your access code
        </h3>

        <p>
          Contact Tempo directly to request your activation
          code. Once payment and code issuance are completed,
          enter your code in the app to activate your access.
        </p>

        <div style={{ display: "grid", gap: "12px", marginTop: "22px" }}>
          <a
            className="button button-primary"
            href="mailto:tempo@nexora.com.ng?subject=Tempo%20Lifetime%20Access%20Code"
          >
            <span aria-hidden="true">✉</span>
            Email tempo@nexora.com.ng
          </a>

          <a
            className="button button-secondary"
            href="https://wa.me/2348132268079?text=Hello%2C%20I%20would%20like%20to%20purchase%20a%20Tempo%20lifetime%20access%20code."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Request via WhatsApp
          </a>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "22px",
            color: "var(--muted)",
          }}
        >
          WhatsApp: 08132268079
        </p>
      </div>

      <div className="section-heading centered-heading" style={{ marginTop: "55px" }}>
        <div className="eyebrow eyebrow-soft">
          One payment. No renewals.
        </div>

        <h2>
          Your privacy shouldn't come with a monthly bill.
        </h2>

        <p>
          Get your Tempo activation code once and enjoy
          lifetime access without recurring subscription fees.
        </p>
      </div>

      <p className="fine-print">
        Lifetime access refers to continued access to the
        Tempo service, subject to the platform's terms of
        service, acceptable-use policies and continued
        operation of the service. The activation code is
        required to access the application.
      </p>
    </ContentPage>
  );
}
