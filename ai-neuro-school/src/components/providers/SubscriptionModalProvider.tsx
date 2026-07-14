"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { SubscriptionModal } from "@/components/forms/SubscriptionModal";

export type PlanId = "curator" | "consultation";

type ModalContextValue = {
  isOpen: boolean;
  plan: PlanId;
  open: (plan?: PlanId) => void;
  close: () => void;
};

const SubscriptionModalContext = createContext<ModalContextValue | null>(null);

export function SubscriptionModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<PlanId>("curator");

  const open = useCallback((nextPlan: PlanId = "curator") => {
    setPlan(nextPlan);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, plan, open, close }), [isOpen, plan, open, close]);

  return (
    <SubscriptionModalContext.Provider value={value}>
      {children}
      <SubscriptionModal />
    </SubscriptionModalContext.Provider>
  );
}

export function useSubscriptionModal() {
  const ctx = useContext(SubscriptionModalContext);
  if (!ctx) {
    throw new Error("useSubscriptionModal must be used within SubscriptionModalProvider");
  }
  return ctx;
}
