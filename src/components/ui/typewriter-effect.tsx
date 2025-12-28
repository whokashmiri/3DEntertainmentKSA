"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
};

export function TypewriterEffect({
  text,
  speed = 50,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);

  return (
    <div className={cn('relative', className)}>
      {displayedText}
      <span
        className={cn(
          'inline-block w-1 h-full bg-current animate-blink',
          cursorClassName
        )}
        style={{ animation: 'blink 1s step-end infinite' }}
      />
      <style jsx global>{`
        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
            animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}

    