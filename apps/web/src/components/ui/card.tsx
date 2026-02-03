import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-foreground/10 bg-card shadow-[0_8px_30px_rgba(16,24,40,0.06)]',
        className,
      )}
      {...props}
    />
  );
}
