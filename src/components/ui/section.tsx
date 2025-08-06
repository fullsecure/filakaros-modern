import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "card" | "gradient"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    containerSize = "lg", 
    padding = "lg",
    background = "default",
    children,
    ...props 
  }, ref) => {
    const paddingClasses = {
      none: "",
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16",
      lg: "py-16 sm:py-20 lg:py-24",
      xl: "py-20 sm:py-24 lg:py-32"
    }

    const backgroundClasses = {
      default: "",
      muted: "bg-muted/30",
      card: "bg-card",
      gradient: "bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
    }

    return (
      <section
        ref={ref}
        className={cn(
          "relative",
          paddingClasses[padding],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
