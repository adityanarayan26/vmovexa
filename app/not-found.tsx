import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404 / Lost in transit</p>
      <h1>This route is still being mapped.</h1>
      <p>Let&apos;s get you back to the future of connected mobility.</p>
      <Link className="button" href="/">
        Return home <span>↗</span>
      </Link>
    </section>
  );
}
