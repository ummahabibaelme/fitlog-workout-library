'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock3, Flame, Star, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useFitlog } from '@/components/fitlog-provider';
import type { Workout } from '@/lib/workouts';

type PlannedWorkout = Workout & {
  done?: boolean;
};

export default function MyPlanPage() {
  const {
    plan,
    saved,
    markDone,
    removeFromPlan,
    removeSaved,
  } = useFitlog();

  const [tab, setTab] = useState<'plan' | 'saved'>('plan');
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('tab') === 'saved') {
      setTab('saved');
    }

    const load = async () => {
      try {
        const response = await fetch('/api/workouts', {
          cache: 'no-store',
        });

        const data = await response.json();

        setWorkouts(data.workouts ?? []);
      } catch (error) {
        console.error('Failed to load workouts:', error);
      } finally {
        window.setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    };

    load();
  }, []);

  const totals = useMemo(
    () => ({
      exercises: plan.length,
      minutes: plan.reduce(
        (sum, item) => sum + item.duration,
        0
      ),
      calories: plan.reduce(
        (sum, item) => sum + item.calories,
        0
      ),
    }),
    [plan]
  );

  const currentItems =
    tab === 'plan' ? plan : saved;

  const knownWorkoutCount = workouts.length;

  return (
    <div className="page-shell plan-page">
      <div className="plan-heading">
        <h1>MY PLAN</h1>

        <p>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <section
        className="metrics"
        aria-label="Today's plan summary"
      >
        <Metric
          label="EXERCISES"
          value={totals.exercises}
        />

        <Metric
          label="MINUTES"
          value={totals.minutes}
        />

        <Metric
          label="CALORIES"
          value={totals.calories}
        />
      </section>

      <div
        className="tabs"
        role="tablist"
      >
        <button
          className={
            tab === 'plan'
              ? 'tab active'
              : 'tab'
          }
          onClick={() => setTab('plan')}
          role="tab"
          aria-selected={tab === 'plan'}
        >
          TODAY&apos;S PLAN
        </button>

        <button
          className={
            tab === 'saved'
              ? 'tab active'
              : 'tab'
          }
          onClick={() => setTab('saved')}
          role="tab"
          aria-selected={tab === 'saved'}
        >
          SAVED
        </button>
      </div>

      {loading ? (
        <div className="empty-state">
          <p style={{ marginBottom: 0 }}>
            Loading workouts…
          </p>
        </div>
      ) : currentItems.length ? (
        <div className="plan-list">
          {currentItems.map((item) => {
            const workout =
              item as PlannedWorkout;

            return (
              <PlanCard
                key={workout.id}
                workout={workout}
                isPlan={tab === 'plan'}
                done={workout.done === true}
                onDone={() => markDone(workout.id)}
                onRemove={() =>
                  tab === 'plan'
                    ? removeFromPlan(workout.id)
                    : removeSaved(workout.id)
                }
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <h2>NOTHING HERE YET</h2>

          <p>
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="primary-btn"
          >
            GO TO WORKOUTS
          </Link>
        </div>
      )}

      <p
        style={{
          color: '#555b64',
          fontSize: 9,
          marginTop: 16,
        }}
      >
        {knownWorkoutCount} workouts available in the library.
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="metric">
      <div className="metric-label">
        {label}
      </div>

      <div className="metric-value">
        {value}
      </div>
    </div>
  );
}

function PlanCard({
  workout,
  isPlan,
  done,
  onDone,
  onRemove,
}: {
  workout: PlannedWorkout;
  isPlan: boolean;
  done: boolean;
  onDone: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="plan-card">
      <div className="plan-thumb">
        <Image
          src={workout.image}
          alt={`${workout.name} thumbnail`}
          fill
          sizes="170px"
        />
      </div>

      <div className="plan-info">
        <div className="tag-row">
          {workout.categories.map(
            (category) => (
              <span
                className="tag"
                key={category}
              >
                {category}
              </span>
            )
          )}
        </div>

        <h3>{workout.name}</h3>

        <p>{workout.equipment}</p>

        <div className="stat-row">
          <span>
            <Clock3 size={12} />
            {workout.duration} min
          </span>

          <span>
            <Flame size={12} />
            {workout.calories} kcal
          </span>

          <span>
            <Star size={12} />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="plan-actions">
        {done && (
          <span className="done-chip">
            DONE
          </span>
        )}

        <Link
          href={`/workouts/${workout.id}`}
          className="ghost-btn"
        >
          VIEW DETAILS
        </Link>

        {isPlan && !done && (
          <button
            className="secondary-btn"
            onClick={onDone}
          >
            <Check size={13} />
            MARK AS DONE
          </button>
        )}

        <button
          className="icon-btn"
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
        >
          <X size={15} />
        </button>
      </div>
    </article>
  );
}