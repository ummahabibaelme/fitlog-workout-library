import { workouts } from '@/lib/workouts';

export async function GET() {
  return Response.json({ workouts });
}
