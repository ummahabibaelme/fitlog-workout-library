'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PlanItem } from '@/lib/types';
import type { Workout } from '@/lib/workouts';

type Toast = { id: number; message: string } | null;

type FitlogContextValue = {
  plan: PlanItem[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: string) => void;
  removeSaved: (id: string) => void;
  markDone: (id: string) => void;
  toast: Toast;
};

const FitlogContext = createContext<FitlogContextValue | null>(null);

const PLAN_KEY = 'fitlog-plan';
const SAVED_KEY = 'fitlog-saved';

export function FitlogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [toast, setToast] = useState<Toast>(null);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_KEY);
      const storedSaved = localStorage.getItem(SAVED_KEY);
      if (storedPlan) setPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch {
      localStorage.removeItem(PLAN_KEY);
      localStorage.removeItem(SAVED_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const notify = (message: string) => setToast({ id: Date.now(), message });

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      notify('Already in today\'s plan');
      return;
    }
    if (plan.length >= 5) {
      notify('Today\'s plan is full');
      return;
    }
    setPlan((current) => [...current, { ...workout, addedAt: Date.now(), done: false }]);
    notify('Added to today\'s plan');
  };

  const saveForLater = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      notify('Already saved for later');
      return;
    }
    setSaved((current) => [...current, workout]);
    notify('Saved for later');
  };

  const removeFromPlan = (id: string) => {
    setPlan((current) => current.filter((item) => item.id !== id));
    notify('Removed from today\'s plan');
  };

  const removeSaved = (id: string) => {
    setSaved((current) => current.filter((item) => item.id !== id));
    notify('Removed from saved');
  };

  const markDone = (id: string) => {
    setPlan((current) => current.map((item) => item.id === id ? { ...item, done: true } : item));
    notify('Workout marked as done');
  };

  const value = useMemo(() => ({ plan, saved, addToPlan, saveForLater, removeFromPlan, removeSaved, markDone, toast }), [plan, saved, toast]);

  return (
    <FitlogContext.Provider value={value}>
      {children}
      {toast && (
        <div className="toast" role="status" aria-live="polite" key={toast.id}>
          <span className="toast-dot" />
          {toast.message}
        </div>
      )}
    </FitlogContext.Provider>
  );
}

export function useFitlog() {
  const context = useContext(FitlogContext);
  if (!context) throw new Error('useFitlog must be used inside FitlogProvider');
  return context;
}
