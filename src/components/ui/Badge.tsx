import React from 'react';

type BadgeVariant = 'saffron' | 'forest' | 'gold' | 'indigo' | 'lotus' | 'muted' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  saffron: 'bg-primary/10 text-primary border-primary/20',
  forest: 'bg-secondary/10 text-secondary border-secondary/20',
  gold: 'bg-accent/20 text-accent-foreground border-accent/30',
  indigo: 'bg-indigo-deep/10 text-indigo-deep border-indigo-deep/20',
  lotus: 'bg-lotus/10 text-lotus border-lotus/20',
  muted: 'bg-muted text-muted-foreground border-border',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-red-50 text-red-600 border-red-200',
};

const sizeStyles = {
  sm: 'text-[10px] px-2 py-0.5 font-semibold tracking-wide',
  md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
};

export default function Badge({ children, variant = 'muted', size = 'md', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}