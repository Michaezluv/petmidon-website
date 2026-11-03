import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/petmidon-logo.svg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="site-bg min-h-screen text-sm text-site-link">
      <div className="mx-auto max-w-[980px] bg-background shadow-lg">
        <header className="site-header-bg flex h-[105px] items-center px-3">
          <Link to="/" aria-label="Petmidon Nigeria Limited home" className="rounded bg-background px-4 py-2">
            <img src={logo} alt="Petmidon Nigeria Limited" className="h-auto w-[230px] max-w-full" />
          </Link>
          <p className="ml-auto hidden text-right text-xs uppercase tracking-widest text-primary-foreground sm:block">
            Petmidon Nigeria Limited
            <br />
            Oil &amp; Gas Services
          </p>
        </header>
        <nav className="site-nav-bg flex border-t-2 border-background">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="flex-1 py-2 text-center text-xs font-bold text-primary-foreground hover:bg-site-nav-hi"
              activeProps={{ className: "border border-site-nav-hi bg-site-nav-hi" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-between px-4 py-1">
          <span>Welcome to Petmidon Nigeria Limited.</span>
          <span className="text-base font-bold text-muted-foreground">{title}</span>
        </div>
        <div className="flex flex-col gap-6 px-3 pb-8 md:flex-row">
          <aside className="w-full shrink-0 md:w-[180px]">
            <div className="bg-site-panel p-1">
              Petmidon Nigeria Limited is a trusted Nigerian provider of geophysical instrumentation and well completion
              services to the oil and gas industry.
            </div>
            <h3 className="mt-6 font-bold">Our Services</h3>
            <ul className="mt-1 space-y-1">
              {["Geophysical Instrumentation", "Well Completion Services", "Tubular Services", "Wellhead Services"].map(
                (s) => (
                  <li key={s}>
                    · <Link to="/services" className="underline">{s}</Link>
                  </li>
                ),
              )}
              <li>
                · <Link to="/contact" className="underline">Contact Us</Link>
              </li>
            </ul>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
        <footer className="site-nav-bg py-3 text-center text-xs text-primary-foreground">
          © {new Date().getFullYear()} Petmidon Nigeria Limited. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export function SectionBar({ children }: { children: ReactNode }) {
  return <h2 className="bg-site-bar px-1 py-0.5 font-bold text-primary-foreground">{children}</h2>;
}

export function Item({ img, name, children }: { img: string; name: string; children: ReactNode }) {
  return (
    <div className="mt-3 flex gap-2 px-1">
      <img src={img} alt={name} loading="lazy" width={88} height={88} className="h-[88px] w-[88px] shrink-0 border border-site-link object-cover p-0.5" />
      <p>
        <b>{name}</b> {children}{" "}
        <Link to="/services" className="underline">more...</Link>
      </p>
    </div>
  );
}
