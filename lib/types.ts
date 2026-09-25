import type { Workout } from './workouts';

export type PlanItem = Workout & {
  addedAt: number;
  done: boolean;
};
