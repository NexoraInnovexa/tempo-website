import Image from "next/image";
export default function PhoneMockup() {
  return <div className="phone-stage" aria-label="Preview of the Tempo app">
    <div className="phone phone-back"><div className="phone-screen"><Image src="/images/screenshots/images.jpeg" alt="Tempo app screen preview two" fill sizes="(max-width: 700px) 35vw, 250px" className="screen-image" /></div></div>
    <div className="phone phone-front"><div className="phone-screen"><Image src="/images/screenshots/image.jpeg" alt="Tempo app screen preview one" fill priority sizes="(max-width: 700px) 55vw, 330px" className="screen-image" /></div><div className="phone-island" /></div>
    <div className="phone-caption"><span className="caption-dot" /> A little more peace of mind</div>
  </div>;
}
