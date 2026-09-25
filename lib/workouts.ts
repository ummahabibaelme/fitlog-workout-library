export type Workout = {
  id: string;
  name: string;
  description: string;
  categories: string[];
  equipment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  sets: number;
  reps: string;
  duration: number;
  calories: number;
  rating: number;
  instructions: string[];
  image: string;
};

type ApiWorkout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: Workout['difficulty'];
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export const FITLOG_API = 'https://api.abcz.workers.dev/api/fitlog';

export function normalizeWorkout(item: ApiWorkout): Workout {
  return {
    id: String(item.id),
    name: item.name.toUpperCase(),
    description: item.description,
    categories: item.muscleGroups.map((group) => group.toUpperCase()),
    equipment: item.equipment,
    difficulty: item.difficulty,
    sets: item.sets,
    reps: item.reps,
    duration: item.duration,
    calories: item.caloriesBurned,
    rating: item.rating,
    instructions: item.instructions,
    image: item.image,
  };
}

export async function fetchAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(FITLOG_API, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch FitLog workouts');
  const data = (await response.json()) as ApiWorkout[];
  return data.map(normalizeWorkout);
}

export async function fetchWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(`${FITLOG_API}/${encodeURIComponent(id)}`, { cache: 'no-store' });
  if (!response.ok) return null;
  const data = (await response.json()) as ApiWorkout;
  return normalizeWorkout(data);
}
