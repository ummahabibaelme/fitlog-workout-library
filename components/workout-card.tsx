import Link from 'next/link';
import type { Workout } from '@/lib/workouts';
import { StatRow } from './stat-row';
import { WorkoutImage } from './workout-image';

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workouts/${workout.id}`} className="workout-card">
      <WorkoutImage src={workout.image} alt={`${workout.name} illustration`} />
      <div className="workout-card-body">
        <div className="tag-row">
          {workout.categories.map((category) => <span className="tag" key={category}>{category}</span>)}
        </div>
        <h3>{workout.name}</h3>
        <p className="equipment">{workout.equipment}</p>
        <StatRow workout={workout} />
      </div>
    </Link>
  );
}
