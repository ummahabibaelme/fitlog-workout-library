import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>The route you entered does not exist in FitLog.</p>
        <Link href="/" className="primary-btn">BACK TO WORKOUTS</Link>
      </div>
    </div>
  );
}
