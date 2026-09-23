import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { CubertoLines } from "@/components/animations/cuberto-text-reveal";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center container max-w-4xl mx-auto px-6 py-36 text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider mb-6">
          <span>404</span>
          <span className="text-white/30">/</span>
          <span>Lost in transit</span>
        </div>
      </Reveal>
      <CubertoLines
        as="h1"
        className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 uppercase"
        lines={["This route is still", "being mapped."]}
      />
      <Reveal delay={0.2}>
        <p className="text-white/70 max-w-md mx-auto mb-8 font-light text-base">
          Let&apos;s get you back to the future of connected mobility.
        </p>
        <Link
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03]"
          href="/"
        >
          Return home <span>↗</span>
        </Link>
      </Reveal>
    </section>
  );
}
