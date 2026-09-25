import { fetchAllWorkouts } from '@/lib/workouts';

export async function GET() {
  try {
    const workouts = await fetchAllWorkouts();
    return Response.json({ workouts });
  } catch {
    return Response.json({ error: 'Failed to fetch workouts' }, { status: 502 });
  }
}
