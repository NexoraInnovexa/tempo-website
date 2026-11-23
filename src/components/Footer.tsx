
import Link from "next/link";

const groups = [
  {
    title: "Explore",
    links: [
      ["Features", "/features"],
      ["Pricing", "/pricing"],
      ["Download", "/download"],
      ["About Tempo", "/about"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Support", "/support"],
      ["FAQs", "/support#faqs"],
      ["Contact", "/support#contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy policy", "/privacy"],
      ["Terms of service", "/terms"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer">
            <span className="brand-symbol">
              <svg viewBox="0 0 40 46" aria-hidden="true">
                <path d="M20 2 36 9v13c0 10-7 17-16 22C11 39 4 32 4 22V9L20 2Z" />
                <rect x="13" y="20" width="14" height="12" rx="2" />
                <path d="M16 20v-4a4 4 0 0 1 8 0v4" />
              </svg>
            </span>
            <span>TEMPO</span>
          </Link>

          <p>
            Private conversations.
            <br />
            A little more control.
          </p>
        </div>

        {groups.map((group) => (
          <div className="footer-column" key={group.title}>
            <h3>{group.title}</h3>

            {group.links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="section-shell footer-bottom">
        <span>
          © 2026 Tempo. All rights reserved.
        </span>

        <span>
          Private. Discreet. Temporary.
        </span>
      </div>
    </footer>
  );
}
