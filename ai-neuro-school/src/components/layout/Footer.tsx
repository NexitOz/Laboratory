import { Camera, Send, Users, Video } from "lucide-react";

const socials = [
  { label: "Telegram", href: "https://t.me", icon: Send },
  { label: "YouTube", href: "https://youtube.com", icon: Video },
  { label: "VK", href: "https://vk.com", icon: Users },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
];

const legalLinks = [
  { label: "Контакты", href: "#contacts" },
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
];

export function Footer() {
  return (
    <footer id="contacts" className="relative border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-black text-xs font-bold">
              N
            </span>
            <span className="font-display text-lg font-bold text-white">Neuro School</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-silver/60 transition-colors hover:text-gold-bright"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="divider-gold" />

        <div className="flex flex-col gap-4 text-sm text-silver/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Neuro School. Все права защищены.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:hello@neuro.school" className="transition-colors hover:text-gold-bright">
              hello@neuro.school
            </a>
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-gold-bright">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
