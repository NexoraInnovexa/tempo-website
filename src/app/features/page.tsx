
import ContentPage from "@/components/ContentPage";
import {
  LockKeyhole,
  Timer,
  EyeOff,
  ShieldCheck,
  Smartphone,
  MessageCircle,
} from "@/components/Icons";

const items = [
  [
    "100% Private Messaging",
    "A messaging experience built around privacy. Keep your conversations personal, discreet and away from unnecessary exposure.",
    <LockKeyhole key="private" />,
  ],
  [
    "No Profile",
    "No public profile or personal identity page. Tempo is designed to let you communicate without maintaining a conventional messaging profile.",
    <EyeOff key="profile" />,
  ],
  [
    "No Trace",
    "Conversations are temporary, not permanent records. Enjoy messaging designed around disappearing conversations.",
    <ShieldCheck key="trace" />,
  ],
  [
    "Self-Destructing Messages",
    "Messages disappear automatically, giving conversations a temporary lifespan instead of leaving them sitting around indefinitely.",
    <Timer key="self-destruct" />,
  ],
  [
    "No Screenshots",
    "Screenshot protection helps prevent recipients from capturing your private conversations through screenshots.",
    <Smartphone key="screenshots" />,
  ],
  [
    "No Screen Recording",
    "Screen-recording protection helps safeguard your conversations against unwanted recording.",
    <EyeOff key="recording" />,
  ],
  [
    "View-Once Files",
    "Share files that recipients can view once. After viewing, they cannot simply reopen the same file.",
    <MessageCircle key="view-once" />,
  ],
  [
    "Privacy by Design",
    "Every part of the Tempo experience is centred on one principle: your private conversations should remain private.",
    <ShieldCheck key="design" />,
  ],
];

export default function Features() {
  return (
    <ContentPage
      eyebrow="The Tempo Experience"
      title="Your privacy. Every conversation."
      description="No profile. No trace. No screenshots. No screen recording. Tempo reimagines private messaging with self-destructing conversations and view-once file sharing."
    >
      <div className="content-feature-grid">
        {items.map(([title, text, icon]) => (
          <article className="feature-card" key={String(title)}>
            <div className="feature-icon">{icon}</div>

            <h2>{title}</h2>

            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="simple-panel" style={{ marginTop: "32px" }}>
        <span className="panel-kicker">Get started with Tempo</span>

        <h2>Private messaging starts here.</h2>

        <p>
          Download Tempo, obtain your activation code and
          activate your access. Your private messaging
          experience is just a few steps away.
        </p>

        <a className="button button-primary" href="/download">
          Download Tempo →
        </a>
      </div>

      <p className="fine-print">
        Tempo requires an activation code to access the
        messaging platform. Privacy protections and file
        viewing restrictions operate according to the
        application's implemented features and supported devices.
      </p>
    </ContentPage>
  );
}
