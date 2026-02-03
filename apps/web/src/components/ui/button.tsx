import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: Variant;
  asChild?: boolean;
  href?: string;
};

const base =
  'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  outline:
    'border border-foreground/15 bg-background hover:bg-muted text-foreground shadow-sm',
  ghost: 'hover:bg-muted text-foreground',
};

export function Button({
  className,
  variant = 'primary',
  href,
  ...props
}: Props) {
  if (href) {
    return (
      <Link className={cn(base, variants[variant], className)} href={href}>
        {props.children}
      </Link>
    );
  }

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
