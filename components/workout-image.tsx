import Image from 'next/image';

export function WorkoutImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`workout-image ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" priority={false} />
    </div>
  );
}
