import type { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & { size?: number };
function Base({ children, size = 20, ...props }: Props & { children: React.ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}
export const ArrowRight = (p: Props) => <Base {...p}><path d="M5 12h14M12 5l7 7-7 7" /></Base>;
export const ArrowDownToLine = (p: Props) => <Base {...p}><path d="M12 3v12m-5-5 5 5 5-5M5 20h14" /></Base>;
export const ShieldCheck = (p: Props) => <Base {...p}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></Base>;
export const LockKeyhole = (p: Props) => <Base {...p}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 4v3"/></Base>;
export const Timer = (p: Props) => <Base {...p}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6m-3 0v3"/></Base>;
export const EyeOff = (p: Props) => <Base {...p}><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 9 5 9 7a9.8 9.8 0 0 1-3 3.7M6.2 6.2C3.8 7.7 3 10.3 3 12c0 2 4 7 9 7 1.2 0 2.3-.3 3.3-.8"/></Base>;
export const MessageCircle = (p: Props) => <Base {...p}><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></Base>;
export const Smartphone = (p: Props) => <Base {...p}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></Base>;
export const Menu = (p: Props) => <Base {...p}><path d="M4 6h16M4 12h16M4 18h16"/></Base>;
export const X = (p: Props) => <Base {...p}><path d="m18 6-12 12M6 6l12 12"/></Base>;
export const Check = (p: Props) => <Base {...p}><path d="m5 12 4 4L19 6"/></Base>;
