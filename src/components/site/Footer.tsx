import { Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const LINKEDIN_URL = "https://www.linkedin.com/in/emmanuel-valour-peters-a9a6b6361";
const EMAIL = "hello@eonixstudio.com";
const TWITTER_URL = "https://x.com/eonix_studio";
const INSTAGRAM_URL = "https://www.instagram.com/eonix_studio?igsh=MTdscnJ3MDBoYWhrdA==";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-ink-soft">
              Predictive ML systems for real-world business problems — built for telecom,
              SaaS and finance.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Engineer
            </h4>
            <p className="text-sm text-ink">Emmanuel</p>
            <p className="text-sm text-ink-soft">Machine Learning Engineer</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Contact
            </h4>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand-600"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
            <div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand-600"
              >
                <Linkedin className="h-4 w-4" />
                Emmanuel Peters
              </a>
            </div>
            <div>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand-600"
              >
                <Twitter className="h-4 w-4" />
                @eonix_studio
              </a>
            </div>
            <div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand-600"
              >
                <Instagram className="h-4 w-4" />
                @eonix_studio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Eonix Studio. All rights reserved.</span>
          <span>Built with intent. Engineered with data.</span>
        </div>
      </div>
    </footer>
  );
}
