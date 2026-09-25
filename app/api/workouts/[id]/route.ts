import { fetchWorkout } from '@/lib/workouts';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await fetchWorkout(id);
  if (!workout) return Response.json({ error: 'Workout not found' }, { status: 404 });
  return Response.json({ workout });
}
