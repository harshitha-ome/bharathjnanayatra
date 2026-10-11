import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'saffron' | 'forest' | 'gold' | 'indigo';
  className?: string;
}

const variantBar: Record<string, string> = {
  saffron: 'xp-bar-fill',
  forest: 'bg-forest-gradient',
  gold: 'bg-gradient-to-r from-gold to-accent',
  indigo: 'bg-indigo-gradient',
};

const sizeHeight: Record<string, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'saffron',
  className = '',
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs font-semibold text-muted-foreground">{label}</span>}
          {showValue && (
            <span className="text-xs font-bold text-foreground font-tabular">
              {value}/{max}
            </span>
          )}
        </div>
      )}
      <div className={`w-full rounded-full bg-muted border border-border overflow-hidden ${sizeHeight[size]}`}>
        <div
          className={`${sizeHeight[size]} rounded-full transition-all duration-700 ease-out ${variantBar[variant]}`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}