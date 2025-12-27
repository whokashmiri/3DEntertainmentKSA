import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  withLine?: boolean;
};

export function Heading({ as: Comp = 'h2', className, children, withLine = true }: HeadingProps) {
  return (
    <Comp className={cn("font-headline text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white relative pb-4", className)}>
      {children}
      {withLine && <span className="absolute bottom-0 left-0 h-1 w-20 bg-primary"></span>}
    </Comp>
  );
}
