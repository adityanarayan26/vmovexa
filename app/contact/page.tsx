import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with VMOVEXA to build the future of intelligent mobility.",
};
export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <p className="eyebrow">Contact VMOVEXA</p>
          <h1>
            Connect today.
            <br />
            <em>Lead tomorrow.</em>
          </h1>
          <p>
            From governments and smart cities to enterprises and mobility innovators, we
            collaborate with organizations building safer, more intelligent transportation
            ecosystems.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="contact-grid container">
          <form action="#" className="contact-form">
            <h2>Let&apos;s build the future together.</h2>
            <label>
              Full name
              <input
                autoComplete="name"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label>
              Work email
              <input
                autoComplete="email"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </label>
            <label>
              Organisation
              <input name="organisation" placeholder="Organisation name" type="text" />
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                placeholder="Tell us a little about your mobility challenge"
                required
                rows={5}
              />
            </label>
            <button className="button" type="submit">
              Send message <span>↗</span>
            </button>
            <p className="form-note">
              This form is ready to connect to your preferred CRM or form service.
            </p>
          </form>
          <aside className="contact-details">
            <div>
              <MapPin size={21} />
              <h3>Corporate office</h3>
              <p>{site.address}</p>
            </div>
            <div>
              <Mail size={21} />
              <h3>Email</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href="mailto:business@vmovexa.com">business@vmovexa.com</a>
            </div>
            <div>
              <Phone size={21} />
              <h3>Phone</h3>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <br />
              <a href="tel:+919390393994">+91 93903 93994</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
