
import ContentPage from "@/components/ContentPage";

const supportEmail = "tempo@nexora.com.ng";
const whatsappLink =
  "https://wa.me/2347055507960?text=Hello%2C%20I%20need%20help%20with%20Tempo.";

export default function Support() {
  return (
    <ContentPage
      eyebrow="Support"
      title="We're here to help."
      description="Need help downloading Tempo, activating your access code or using the app? Our support team is available to assist."
    >
      <div className="prose-panel" id="faqs">
        <h2>Frequently asked questions</h2>

        <details>
          <summary>Where can I download Tempo?</summary>
          <p>
            Tempo is currently available for Android. Download the official
            Android version directly from the Download page on this website.
            Tempo is not currently available on Google Play Store or Apple App
            Store.
          </p>
          <p>
            The iOS version is coming soon. Please check our website for
            availability updates.
          </p>
          <p>
            <a href="/download">Go to the Tempo Download page</a>
          </p>
        </details>

        <details>
          <summary>Is Tempo available on iPhone?</summary>
          <p>
            The iOS version of Tempo is coming soon. At present, the Android
            version is available for download directly from this website.
          </p>
        </details>

<details>
  <summary>Can I use Tempo for conversations that I may need as evidence or permanent records?</summary>
  <p>
    No. Tempo is designed for private, temporary conversations, not
    recordkeeping or evidence preservation. Messages and shared content
    are intended to be private and may be automatically destroyed or
    become unavailable. If you need a conversation trail for legal
    purposes, documentation, business records, dispute resolution or
    any situation where you may need to retrieve messages as evidence,
    you should use a platform designed to retain conversation records
    instead.
  </p>
  <p>
    By using Tempo, you acknowledge that it should not be relied upon
    to preserve conversations, documents or other materials for future
    reference.
  </p>
</details>



        <details>
          <summary>How do I activate Tempo?</summary>
          <p>
            Tempo requires an activation code before you can start using the
            app. You can obtain a lifetime access code for ₦100,000.
          </p>
          <p>
            Contact us at{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a> or send us a
            WhatsApp message on 08132268079 to purchase your access code.
          </p>
          <p>
            <a href="/pricing">View pricing and activation details</a>
          </p>
        </details>

        <details>
          <summary>Is the activation payment recurring?</summary>
          <p>
            No. Tempo access is a one-time purchase of ₦100,000 per access
            code. There are no monthly or yearly subscription fees.
          </p>
        </details>

        <details>
          <summary>How do temporary messages and view-once files work?</summary>
          <p>
            Tempo is designed for private conversations, with self-destructing
            messaging and view-once file sharing. Use the controls and prompts
            available in the app to manage your conversations.
          </p>
        </details>

        <details>
          <summary>How can I contact Tempo support?</summary>
          <p>
            You can email our support team or contact us directly on WhatsApp.
            We will be happy to assist with downloads, activation and
            app-related questions.
          </p>
        </details>
      </div>

      <div className="simple-panel contact-panel" id="contact">
        <h2>Need more help?</h2>
        <p>
          Whether you need help installing Tempo, purchasing an activation
          code or resolving an issue, get in touch with us.
        </p>

        <div className="support-contact-links">
          <a href={`mailto:${supportEmail}`}>
            Email: {supportEmail}
          </a>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp: 08132268079
          </a>
        </div>
      </div>
    </ContentPage>
  );
}
