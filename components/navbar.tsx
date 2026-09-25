'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Bookmark } from 'lucide-react';
import { Logo } from './logo';
import { useFitlog } from './fitlog-provider';

export function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitlog();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className="main-nav" aria-label="Main navigation">
          <Link className={pathname === '/' ? 'nav-link active' : 'nav-link'} href="/">Workout</Link>
          <Link className={pathname === '/my-plan' ? 'nav-link active' : 'nav-link'} href="/my-plan">My Plan</Link>
        </nav>
        <div className="nav-badges">
          <Link href="/my-plan" className="status-badge status-plan" aria-label={`Today's plan: ${plan.length}`}>
            <ClipboardList size={12} />
            <span>Plan</span>
            <strong>{plan.length}</strong>
          </Link>
          <Link href="/my-plan?tab=saved" className="status-badge status-saved" aria-label={`Saved: ${saved.length}`}>
            <Bookmark size={12} />
            <span>Saved</span>
            <strong>{saved.length}</strong>
          </Link>
        </div>
      </div>
    </header>
  );
}
