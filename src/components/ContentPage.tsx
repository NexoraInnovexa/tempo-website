import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
export default function ContentPage({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children?:React.ReactNode}){return <div className="content-page section-shell"><div className="eyebrow eyebrow-soft">{eyebrow}</div><h1>{title}</h1><p className="content-intro">{description}</p>{children}<div className="content-cta"><Link className="button button-primary" href="/download">Get Tempo <ArrowRight/></Link></div></div>}
