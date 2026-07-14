"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles, X } from "lucide-react";
import { useSubscriptionModal, type PlanId } from "@/components/providers/SubscriptionModalProvider";
import { cn } from "@/lib/utils";

const planLabels: Record<PlanId, string> = {
  curator: "Личный куратор (1500 ₽/месяц)",
  consultation: "Консультация",
};

type FormState = "idle" | "submitting" | "success";

export function SubscriptionModal() {
  const { isOpen, close, plan, open } = useSubscriptionModal();
  const [status, setStatus] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setStatus("idle");
        setName("");
        setTelegram("");
        setEmail("");
        setPhone("");
        setComment("");
        setError("");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Укажите имя");
      return;
    }
    if (!telegram.trim() && !email.trim()) {
      setError("Укажите Telegram или Email для связи");
      return;
    }
    setError("");
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 1100);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscription-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="glass-strong relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border-border-strong p-7 sm:p-9"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold-bright/20 blur-[90px]"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-5 top-5 z-10 rounded-full p-2 text-silver/60 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-bright/10 glow-gold"
                  >
                    <CheckCircle2 className="h-9 w-9 text-gold-bright" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white">Спасибо!</h3>
                  <p className="max-w-xs text-silver/70">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 cursor-pointer"
                  >
                    Отлично
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center gap-2 text-gold-bright">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-[0.2em]">
                      Оформление подписки
                    </span>
                  </div>
                  <h3
                    id="subscription-modal-title"
                    className="font-display text-2xl font-bold text-white sm:text-3xl"
                  >
                    Получить личного AI-куратора
                  </h3>

                  <Field label="Имя">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Как к вам обращаться"
                      className={inputClass}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Telegram">
                      <input
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        type="text"
                        placeholder="@username"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@mail.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Телефон (необязательно)">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="+7 900 000-00-00"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Комментарий">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      placeholder="Расскажите, с чем хотите разобраться"
                      className={cn(inputClass, "resize-none")}
                    />
                  </Field>

                  <Field label="Тариф">
                    <div className="flex flex-col gap-2 sm:flex-row">
                      {(Object.keys(planLabels) as PlanId[]).map((planId) => (
                        <button
                          type="button"
                          key={planId}
                          onClick={() => open(planId)}
                          className={cn(
                            "flex-1 rounded-xl border px-4 py-3 text-left text-sm transition-all cursor-pointer",
                            plan === planId
                              ? "border-gold-bright/60 bg-gold-bright/10 text-gold-bright"
                              : "border-border text-silver/70 hover:border-border-strong"
                          )}
                        >
                          {planLabels[planId]}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {error ? <p className="text-sm text-pink">{error}</p> : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-7 py-4 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] transition-transform hover:scale-[1.02] disabled:opacity-70 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      "Оформить подписку"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver/35 outline-none transition-colors focus:border-gold-bright/50";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-silver/50">
      {label}
      {children}
    </label>
  );
}
