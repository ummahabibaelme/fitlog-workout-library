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

export const workouts: Workout[] = [
  {
    id: 'barbell-bench-press',
    name: 'BARBELL BENCH PRESS',
    description: 'A compound press that builds chest thickness, triceps, and pressing power from a stable bench.',
    categories: ['CHEST', 'ARMS'],
    equipment: 'Barbell, Bench',
    difficulty: 'Intermediate',
    sets: 4,
    reps: '6-8',
    duration: 25,
    calories: 180,
    rating: 4.8,
    instructions: [
      'Lie on the bench with your eyes under the bar and feet planted.',
      'Unrack with control and lower the bar to mid-chest.',
      'Press up in a tight arc while keeping your wrists stacked.',
      'Keep shoulders pinned back and repeat with steady tempo.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'pull-up',
    name: 'PULL-UP',
    description: 'A vertical pulling staple for building back strength, grip, and upper-body control.',
    categories: ['BACK', 'ARMS'],
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    sets: 4,
    reps: '6-10',
    duration: 20,
    calories: 150,
    rating: 4.7,
    instructions: [
      'Grip the bar just outside shoulder width.',
      'Brace your core and pull your chest toward the bar.',
      'Pause briefly at the top without swinging.',
      'Lower under control until your arms are extended.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'back-squat',
    name: 'BACK SQUAT',
    description: 'A foundational lower-body lift that trains the quads, glutes, and trunk together.',
    categories: ['LEGS', 'GLUTES'],
    equipment: 'Barbell, Rack',
    difficulty: 'Intermediate',
    sets: 4,
    reps: '6-8',
    duration: 28,
    calories: 240,
    rating: 4.9,
    instructions: [
      'Set the bar across your upper back and brace your core.',
      'Sit down and back while keeping your knees tracking over your toes.',
      'Descend to a comfortable depth with your torso controlled.',
      'Drive through the floor to stand tall without locking out aggressively.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'overhead-press',
    name: 'OVERHEAD PRESS',
    description: 'A standing press for shoulders and triceps with a strong full-body brace.',
    categories: ['SHOULDERS', 'ARMS'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    sets: 3,
    reps: '8-10',
    duration: 18,
    calories: 130,
    rating: 4.6,
    instructions: [
      'Start with the bar at upper-chest height and hands outside the shoulders.',
      'Brace your ribs down and squeeze your glutes.',
      'Press the bar overhead while moving your head naturally around it.',
      'Lower the bar slowly back to the starting position.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'dumbbell-bicep-curl',
    name: 'DUMBBELL BICEP CURL',
    description: 'A simple arm-builder that keeps tension on the biceps through a controlled range.',
    categories: ['ARMS'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    sets: 3,
    reps: '10-12',
    duration: 15,
    calories: 95,
    rating: 4.5,
    instructions: [
      'Stand tall with a dumbbell in each hand and palms facing forward.',
      'Keep elbows close to your sides as you curl.',
      'Squeeze the biceps at the top without swinging.',
      'Lower slowly and repeat.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'dumbbell-bicep-curl-alt',
    name: 'DUMBBELL BICEP CURL',
    description: 'An alternating curl variation that lets you focus on one arm at a time.',
    categories: ['ARMS'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    sets: 3,
    reps: '10 each',
    duration: 16,
    calories: 100,
    rating: 4.5,
    instructions: [
      'Stand tall with one dumbbell in each hand.',
      'Curl one arm while keeping the opposite arm still.',
      'Pause near the top and avoid moving your shoulder forward.',
      'Alternate sides for controlled repetitions.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'hollow-body-plank',
    name: 'HOLLOW BODY PLANK',
    description: 'A core-control drill that trains bracing, posture, and full-body tension.',
    categories: ['CORE'],
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    sets: 3,
    reps: '30-45 sec',
    duration: 12,
    calories: 75,
    rating: 4.4,
    instructions: [
      'Lie on your back and brace your core.',
      'Lift your shoulders and legs slightly while keeping your lower back controlled.',
      'Reach long through your arms and legs.',
      'Hold steady breathing and stop before your form breaks.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'dumbbell-row',
    name: 'DUMBBELL ROW',
    description: 'A unilateral back exercise for lats, upper back, and controlled pulling strength.',
    categories: ['BACK'],
    equipment: 'Dumbbell, Bench',
    difficulty: 'Intermediate',
    sets: 3,
    reps: '8-12',
    duration: 18,
    calories: 125,
    rating: 4.7,
    instructions: [
      'Support one hand on a bench and hinge at the hips.',
      'Let the dumbbell hang with your shoulder packed.',
      'Pull toward your hip while keeping your torso stable.',
      'Lower slowly and switch sides after the set.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'conventional-deadlift',
    name: 'CONVENTIONAL DEADLIFT',
    description: 'A full-body hinge that develops posterior-chain strength and lifting mechanics.',
    categories: ['BACK', 'LEGS'],
    equipment: 'Barbell',
    difficulty: 'Advanced',
    sets: 4,
    reps: '4-6',
    duration: 24,
    calories: 220,
    rating: 4.9,
    instructions: [
      'Stand with feet under the bar and hinge to grip it.',
      'Brace your core and keep the bar close to your legs.',
      'Push the floor away and extend your hips to stand tall.',
      'Reverse the hinge with control and reset each repetition.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'push-up',
    name: 'PUSH-UP',
    description: 'A classic bodyweight press that trains chest, triceps, shoulders, and core control.',
    categories: ['CHEST', 'ARMS', 'CORE'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    sets: 3,
    reps: '10-15',
    duration: 14,
    calories: 105,
    rating: 4.6,
    instructions: [
      'Start in a strong plank with hands slightly wider than your shoulders.',
      'Lower your chest while keeping your body in one line.',
      'Keep elbows angled back rather than flared wide.',
      'Press the floor away to return to the top.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'walking-lunge',
    name: 'WALKING LUNGE',
    description: 'A moving single-leg exercise for quads, glutes, balance, and coordination.',
    categories: ['LEGS', 'GLUTES'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    sets: 3,
    reps: '10 each',
    duration: 20,
    calories: 155,
    rating: 4.7,
    instructions: [
      'Stand tall and step forward into a long, comfortable stride.',
      'Lower until both knees bend under control.',
      'Push through the front foot to step into the next lunge.',
      'Keep your torso tall and move smoothly across the space.'
    ],
    image: '/images/workout-illustration.jpg'
  },
  {
    id: 'russian-twist',
    name: 'RUSSIAN TWIST',
    description: 'A rotational core movement that challenges trunk control and endurance.',
    categories: ['CORE', 'ABS'],
    equipment: 'Medicine Ball',
    difficulty: 'Intermediate',
    sets: 3,
    reps: '16-20',
    duration: 14,
    calories: 110,
    rating: 4.6,
    instructions: [
      'Sit with knees bent and lean back slightly with a braced core.',
      'Hold the ball close to your torso.',
      'Rotate your shoulders and move the ball beside your hip.',
      'Alternate sides without collapsing your posture.'
    ],
    image: '/images/workout-illustration.jpg'
  }
];

export function getWorkout(id: string) {
  return workouts.find((workout) => workout.id === id);
}
