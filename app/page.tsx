'use client';

import { ChevronDown, Dumbbell } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { Workout } from '@/lib/workouts';
import { WorkoutCard } from '@/components/workout-card';

type SortOption = 'duration' | 'calories' | 'rating';

export default function HomePage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState<SortOption>('duration');

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        await new Promise((resolve) => window.setTimeout(resolve, 450));

        const response = await fetch('/api/workouts', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }

        const data = await response.json();
        setWorkouts(data.workouts ?? []);
      } catch (error) {
        console.error('Failed to load workouts:', error);
        setWorkouts([]);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    sorted.sort((a, b) => {
      if (sort === 'duration') {
        return a.duration - b.duration;
      }

      if (sort === 'calories') {
        return a.calories - b.calories;
      }

      if (sort === 'rating') {
        return b.rating - a.rating;
      }

      return 0;
    });

    return sorted;
  }, [workouts, sort]);

  return (
    <div className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">WORKOUT LIBRARY</div>

          <h1 id="hero-title">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#library" className="primary-btn">
            <Dumbbell size={14} />
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img src="/images/hero-bike.png" alt="" />
        </div>
      </section>

      <section id="library" aria-labelledby="library-title">
        <div className="section-head">
          <div>
            <h2 id="library-title">THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
          </div>

          <div className="library-controls">
            <div className="sort-control">
              <span className="sort-label">SORT BY</span>

              <div className="sort-select-wrap">
                <select
                  className="sort-select"
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value as SortOption)
                  }
                  aria-label="Sort workouts by"
                >
                  <option value="duration">Duration</option>
                  <option value="calories">Calories</option>
                  <option value="rating">Rating</option>
                </select>

                <ChevronDown
                  className="sort-chevron"
                  size={16}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div
            className="loading-grid"
            aria-label="Loading workouts"
            aria-live="polite"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="skeleton" key={index} />
            ))}
          </div>
        ) : sortedWorkouts.length > 0 ? (
          <div className="workout-grid">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                workout={workout}
                key={workout.id}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>COULDN&apos;T LOAD THE LIBRARY</h2>
            <p>Refresh the page and try again.</p>
          </div>
        )}
      </section>
    </div>
  );
}