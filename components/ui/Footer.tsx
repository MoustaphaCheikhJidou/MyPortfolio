import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-text-dim sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
