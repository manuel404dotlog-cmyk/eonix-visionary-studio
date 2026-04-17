import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const EMAIL = "hello@eonixstudio.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Eonix Studio inquiry — ${name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-hairline bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs uppercase tracking-[0.12em] text-ink-soft">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="h-11 rounded-xl bg-background"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs uppercase tracking-[0.12em] text-ink-soft">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="h-11 rounded-xl bg-background"
          />
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <Label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.12em] text-ink-soft"
        >
          Project brief
        </Label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the data problem you'd like to solve…"
          required
          rows={5}
          className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-soft">
          Sent securely to{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium text-ink underline-offset-2 hover:underline">
            {EMAIL}
          </a>
        </p>
        <Button
          type="submit"
          className="h-11 rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-brand hover:opacity-95"
        >
          <Send className="h-4 w-4" />
          Send message
        </Button>
      </div>
    </form>
  );
}
