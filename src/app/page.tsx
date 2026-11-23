
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import {
  ArrowRight,
  ArrowDownToLine,
  ShieldCheck,
  LockKeyhole,
  Timer,
  EyeOff,
  MessageCircle,
  Smartphone,
  Check,
} from "@/components/Icons";

const features = [
  {
    icon: <LockKeyhole />,
    title: "100% Private Messaging",
    text: "Your conversations are personal. Tempo is built around privacy, discretion and control.",
  },
  {
    icon: <EyeOff />,
    title: "No Profile. No Trace.",
    text: "No public profile. No lasting conversation trail. Just private communication.",
  },
  {
    icon: <Timer />,
    title: "Self-Destructing Chats",
    text: "Messages disappear automatically. Your conversations don't have to stay forever.",
  },
  {
    icon: <ShieldCheck />,
    title: "No Screenshots",
    text: "Screenshot protection helps prevent others from capturing your private conversations.",
  },
  {
    icon: <Smartphone />,
    title: "No Screen Recording",
    text: "Screen-recording protection helps keep your conversations from being recorded.",
  },
  {
    icon: <MessageCircle />,
    title: "View-Once Files",
    text: "Share files that can be viewed once. After viewing, the file is no longer available to the recipient.",
  },
];

const steps = [
  {
    number: "01",
    title: "Download Tempo",
    text: "Get the Tempo app on your Android or iOS device.",
  },
  {
    number: "02",
    title: "Get Your Activation Code",
    text: "Obtain your activation code to unlock access to Tempo.",
  },
  {
    number: "03",
    title: "Activate Tempo",
    text: "Enter your activation code and get your app ready.",
  },
  {
    number: "04",
    title: "Start Private Conversations",
    text: "Connect, communicate and share with greater privacy.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <ShieldCheck size={16} />
            100% Private Messaging
          </div>

          <h1>
            Your Privacy.
            <br />
            <span>Your Tempo.</span>
          </h1>

          <h2 className="hero-subheading">
            No Profile. No Trace.
            <br />
            No Screenshots. No Screen Recording.
          </h2>

          <p className="hero-lead">
            Experience messaging without the digital baggage.
            Send self-destructing messages, share view-once files
            and enjoy private conversations designed to leave no
            lasting trail.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/download">
              <ArrowDownToLine />
              Download Tempo
              <ArrowRight />
            </Link>

            <Link className="button button-secondary" href="/features">
              Explore Features
            </Link>
          </div>

          <p className="platform-note">
            <Smartphone size={15} />
            Available on Android and iOS
          </p>

          <div className="activation-reminder">
            <LockKeyhole size={17} />
            <span>
              Activation code required to start using Tempo.
              {" "}
              <Link href="/pricing">Learn more <ArrowRight size={12} /></Link>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <PhoneMockup />

          <div className="floating-note note-top">
            <span className="note-icon">
              <LockKeyhole />
            </span>
            <span>
              <b>No Profile</b>
              <small>Your privacy comes first.</small>
            </span>
          </div>

          <div className="floating-note note-bottom">
            <span className="note-icon">
              <Timer />
            </span>
            <span>
              <b>Self-Destructing Chats</b>
              <small>Here now. Gone after.</small>
            </span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="section-shell trust-inner">
          <span>Privacy without compromise</span>

          <div className="trust-values">
            <span><LockKeyhole /> No Profile</span>
            <i />
            <span><EyeOff /> No Screenshots</span>
            <i />
            <span><Timer /> No Trace</span>
            <i />
            <span><ShieldCheck /> Private by Design</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-shell" id="features">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-soft">
              Why Tempo?
            </div>

            <h2>
              Your conversations.
              <br />
              <span>Your business alone.</span>
            </h2>
          </div>

          <p>
            Not every conversation needs a permanent record.
            Not every file needs to stay accessible.
            Tempo gives you a different way to communicate:
            private, temporary and designed around your control.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <Link
                href="/features"
                aria-label={`Learn more about ${feature.title}`}
              >
                <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* PRIVACY STATEMENT */}
      <section className="statement-section">
        <div className="section-shell statement-inner">
          <div className="statement-mark">
            <ShieldCheck />
          </div>

          <div>
            <div className="eyebrow eyebrow-light">
              Your privacy is personal
            </div>

            <h2>
              No profile.
              <br />
              No trace.
              <br />
              Just Tempo.
            </h2>

            <p>
              Your private conversations should remain private.
              Tempo is designed for temporary messaging, protected
              interactions and files that can only be viewed once.
              Because not everything needs to be saved.
            </p>

            <Link
              className="text-link text-link-light"
              href="/features"
            >
              Discover how Tempo works <ArrowRight />
            </Link>
          </div>

          <div className="statement-decoration">
            T.
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-shell how-section" id="how-it-works">
        <div className="section-heading centered-heading">
          <div className="eyebrow eyebrow-soft">
            Getting started
          </div>

          <h2>
            Four steps to private messaging.
          </h2>

          <p>
            Getting started is simple. Download, activate and
            experience Tempo.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVATION */}
      <section className="section section-shell">
        <div className="activation-panel">
          <div className="activation-icon">
            <LockKeyhole />
          </div>

          <div className="activation-copy">
            <div className="eyebrow eyebrow-soft">
              Access to Tempo
            </div>

            <h2>
              Your activation code
              <br />
              unlocks your Tempo experience.
            </h2>

            <p>
              Tempo requires an activation code before you can
              start using the app. Download Tempo and follow the
              activation process to get started.
            </p>

            <Link className="button button-primary" href="/pricing">
              Activation & Pricing
              <ArrowRight />
            </Link>
          </div>

          <div className="activation-checklist">
            {[
              "Download the app",
              "Obtain an activation code",
              "Activate your access",
              "Start chatting privately",
            ].map((item) => (
              <div key={item}>
                <Check size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="download-band section-shell">
        <div className="download-content">
          <div className="eyebrow eyebrow-light">
            Your conversations. Your rules.
          </div>

          <h2>
            Say less.
            <br />
            Share privately.
            <br />
            Leave no trace.
          </h2>

          <p>
            Download Tempo and experience a more private
            way to communicate.
          </p>

          <Link className="button button-light" href="/download">
            Get Tempo
            <ArrowRight />
          </Link>

          <p className="download-activation-note">
            Activation code required.
          </p>
        </div>

        <div className="download-art">
          <div className="download-circle">
            <ShieldCheck />
          </div>

          <span className="download-wordmark">
            TEMPO
          </span>

          <small>
            PRIVATE. DISCREET. TEMPORARY.
          </small>
        </div>
      </section>
    </>
  );
}
