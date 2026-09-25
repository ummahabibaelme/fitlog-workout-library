'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookmarkPlus, Check, ClipboardPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Workout } from '@/lib/workouts';
import { useFitlog } from '@/components/fitlog-provider';

export default function WorkoutDetailPage() {
  const params = useParams<{ id: string }>();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const { plan, saved, addToPlan, saveForLater } = useFitlog();

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(`/api/workouts/${params.id}`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Not found');
        const data = await response.json();
        setWorkout(data.workout);
      } catch {
        setWorkout(null);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) load();
  }, [params.id]);

  if (loading) {
    return <div className="page-shell detail-page"><div className="detail-layout"><div className="skeleton" style={{ height: 610 }} /><div className="skeleton" style={{ height: 610 }} /></div></div>;
  }

  if (!workout) {
    return <div className="not-found"><div><h1>404</h1><h2>WORKOUT NOT FOUND</h2><p>This lift does not exist in the FitLog library.</p><Link href="/" className="primary-btn">BACK TO WORKOUTS</Link></div></div>;
  }

  const inPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="page-shell detail-page">
      <Link href="/" className="back-link"><ArrowLeft size={14} /> BACK TO LIBRARY</Link>
      <div className="detail-layout">
        <div className="detail-visual">
          <Image src={workout.image} alt={`${workout.name} illustration`} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <article className="detail-copy">
          <div className="tag-row">
            {workout.categories.map((category) => <span className="tag" key={category}>{category}</span>)}
          </div>
          <h1>{workout.name}</h1>
          <p className="detail-description">{workout.description}</p>

          <div className="spec-panel">
            <Spec label="EQUIPMENT" value={workout.equipment} />
            <Spec label="DIFFICULTY" value={workout.difficulty} />
            <Spec label="SETS" value={String(workout.sets)} />
            <Spec label="REPS" value={workout.reps} />
            <Spec label="DURATION" value={`${workout.duration} min`} />
            <Spec label="CALORIES" value={`${workout.calories} kcal`} />
            <Spec label="RATING" value={String(workout.rating)} />
          </div>

          <h2 className="instructions-title">INSTRUCTIONS</h2>
          <ol className="instructions">
            {workout.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}
          </ol>

          <div className="detail-actions">
            <button className="primary-btn" onClick={() => addToPlan(workout)} disabled={inPlan}>
              {inPlan ? <Check size={14} /> : <ClipboardPlus size={14} />}
              {inPlan ? 'IN TODAY\'S PLAN' : 'ADD TO TODAY\'S PLAN'}
            </button>
            <button className="secondary-btn" onClick={() => saveForLater(workout)} disabled={isSaved}>
              {isSaved ? <Check size={14} /> : <BookmarkPlus size={14} />}
              {isSaved ? 'SAVED' : 'SAVE FOR LATER'}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return <div className="spec-row"><span className="detail-label">{label}</span><span className="spec-value">{value}</span></div>;
}
