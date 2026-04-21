import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/emmanuel-valour-peters-a9a6b6361";
const EMAIL = "hello@eonixstudio.com";
const TWITTER_URL = "https://x.com/eonix_studio";
const INSTAGRAM_URL = "https://www.instagram.com/eonix_studio?igsh=MTdscnJ3MDBoYWhrdA==";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-hairline/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            activeOptions={{ exact: true }}
            activeProps={{ className: "!text-ink bg-muted" }}
          >
            Home
          </Link>
          <Link
            to="/case-study"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            activeProps={{ className: "!text-ink bg-muted" }}
          >
            Case Study
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-all hover:bg-muted hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-all hover:bg-muted hover:text-ink"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-all hover:bg-muted hover:text-ink"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-all hover:bg-muted hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
