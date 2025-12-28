"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  startOnView?: boolean;
};

export function TypewriterEffect({
  text,
  speed = 50,
  className,
  cursorClassName,
  startOnView = false,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current && startOnView) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && startOnView) {
        observer.unobserve(ref.current);
      }
    };
  }, [startOnView]);

  useEffect(() => {
    const shouldAnimate = startOnView ? isIntersecting : true;

    if (shouldAnimate && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!shouldAnimate) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [currentIndex, speed, text, isIntersecting, startOnView]);

  const showCursor = startOnView ? isIntersecting : true;

  return (
    <div className={cn('relative', className)} ref={ref}>
      {displayedText}
      {showCursor && (
        <span
          className={cn(
            'inline-block w-1 h-full bg-current',
            currentIndex < text.length && 'animate-blink',
            cursorClassName
          )}
        />
      )}
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
