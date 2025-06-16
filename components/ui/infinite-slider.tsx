'use client';
import { cn } from '@/lib/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const animationDuration = `${duration}s`;
  const hoverDuration = durationOnHover ? `${durationOnHover}s` : animationDuration;

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          'animate-scroll',
          reverse && 'animate-scroll-reverse'
        )}
        style={{
          gap: `${gap}px`,
          '--scroll-duration': animationDuration,
          '--scroll-hover-duration': hoverDuration,
          animationDuration: animationDuration,
          animationDirection: reverse ? 'reverse' : 'normal',
        } as React.CSSProperties & { [key: string]: string }}
        onMouseEnter={(e) => {
          if (durationOnHover) {
            e.currentTarget.style.animationDuration = hoverDuration;
          }
        }}
        onMouseLeave={(e) => {
          if (durationOnHover) {
            e.currentTarget.style.animationDuration = animationDuration;
          }
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}