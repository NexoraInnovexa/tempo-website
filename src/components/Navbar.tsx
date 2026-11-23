 "use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowDownToLine } from "@/components/Icons";
const links = [{href:"/",label:"Home"},{href:"/features",label:"Features"},{href:"/pricing",label:"Pricing"},{href:"/download",label:"Download"},{href:"/support",label:"Support"},{href:"/about",label:"About"}];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell"><Link href="/" className="brand" aria-label="Tempo home"><span className="brand-symbol"><svg viewBox="0 0 40 46" aria-hidden="true"><path d="M20 2 36 9v13c0 10-7 17-16 22C11 39 4 32 4 22V9L20 2Z"/><rect x="13" y="20" width="14" height="12" rx="2"/><path d="M16 20v-4a4 4 0 0 1 8 0v4"/></svg></span><span>TEMPO</span></Link>
    <nav className={open ? "nav-links nav-open" : "nav-links"}>{links.map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</Link>)}</nav>
    <Link className="nav-cta" href="/download">Get Tempo <ArrowDownToLine size={17}/></Link>
    <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
  </div></header>;
}
