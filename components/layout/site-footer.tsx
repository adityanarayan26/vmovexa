import Link from "next/link";
import { ArrowUpRight, Network } from "lucide-react";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div>
          <p className="eyebrow">The next move is yours</p>
          <h2>Let&apos;s make every journey count.</h2>
        </div>
        <Link className="button button--light" href="/contact">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="footer__grid container">
        <div>
          <Link className="wordmark" href="/">
            VMOVEXA<span>°</span>
          </Link>
          <p className="footer__description">
            Intelligent connected mobility for safer, more sustainable movement.
          </p>
        </div>
        <div>
          <p className="footer__label">Explore</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer__label">Company</p>
          <Link href="/company">About VMOVEXA</Link>
          <Link href="/company#vision">Vision 2031</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <p className="footer__label">Connect</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a
            aria-label="VMOVEXA on LinkedIn"
            href="https://www.linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            <Network size={17} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} VMOVEXA Technologies Pvt. Ltd.</span>
        <span>Built for a world in motion.</span>
      </div>
    </footer>
  );
}
