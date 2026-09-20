import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border font-mono text-sm font-semibold uppercase tracking-[0.16em] transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-primary/84",
        secondary: "border-border bg-secondary text-secondary-foreground hover:border-primary/70 hover:text-primary",
        ghost: "border-transparent bg-transparent text-muted-foreground hover:text-primary",
        outline: "border-primary/70 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "min-h-10 px-3 py-2 text-xs",
        lg: "px-7 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
