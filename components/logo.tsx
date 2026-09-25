import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="FitLog home">
      <span className="logo-mark"><Dumbbell size={13} strokeWidth={3} /></span>
      <span>FITLOG</span>
    </Link>
  );
}
