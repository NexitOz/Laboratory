import { Marquee } from "@/components/ui/Marquee";

const tools = [
  "Higgsfield AI",
  "ChatGPT",
  "Flux",
  "Midjourney",
  "Kling",
  "Runway",
  "ElevenLabs",
  "Suno AI",
  "Google Veo",
];

export function ToolsMarquee() {
  return (
    <section className="relative border-y border-border py-8">
      <div className="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <Marquee items={tools} />
      </div>
    </section>
  );
}
