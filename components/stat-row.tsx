import { Clock3, Flame, Star } from 'lucide-react';
import type { Workout } from '@/lib/workouts';

export function StatRow({ workout }: { workout: Workout }) {
  return (
    <div className="stat-row">
      <span><Clock3 size={12} /> {workout.duration} min</span>
      <span><Flame size={12} /> {workout.calories} kcal</span>
      <span><Star size={12} /> {workout.rating}</span>
    </div>
  );
}
