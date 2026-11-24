
import ContentPage from "@/components/ContentPage";
import { Smartphone, ArrowDownToLine } from "@/components/Icons";

export default function Download() {
  return (
    <ContentPage
      eyebrow="Download Tempo"
      title="Your next conversation starts here."
      description="Experience private messaging designed around privacy, discretion and temporary conversations. Choose your device to get started."
    >
      <div className="download-options">
        <article className="download-option">
          <div className="feature-icon">
            <Smartphone />
          </div>

          <h2>Android</h2>

          <p>
            Tempo is currently available for Android. Download the official
            app directly from this website and get started with private
            conversations.
          </p>

          <a
            className="button button-primary"
            href="/api/download"
          >
            Download for Android
            <ArrowDownToLine />
          </a>

          <p className="fine-print">
            Android version available. Tempo is not currently listed on Google
            Play Store.
          </p>
        </article>

        <article className="download-option">
          <div className="feature-icon">
            <Smartphone />
          </div>

          <h2>iPhone</h2>

          <p>
            We're working on bringing Tempo to iOS. The iPhone version is
            coming soon.
          </p>

          <span className="button button-secondary" aria-disabled="true">
            iOS Coming Soon
          </span>

          <p className="fine-print">
            Check back for updates on iOS availability.
          </p>
        </article>
      </div>

      <div className="simple-panel contact-panel">
        <h2>Need an activation code?</h2>
        <p>
          Tempo requires an activation code. Get your lifetime access code
          for ₦100,000, with no monthly or yearly subscription fees.
        </p>

        <div className="support-contact-links">
          <a href="mailto:tempo@nexora.com.ng?subject=Tempo%20Activation%20Code">
            Email: tempo@nexora.com.ng
          </a>

          <a
            href="https://wa.me/2347055507960?text=Hello%2C%20I%20would%20like%20to%20purchase%20a%20Tempo%20activation%20code."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: 07055507960
          </a>
        </div>
      </div>
    </ContentPage>
  );
}
