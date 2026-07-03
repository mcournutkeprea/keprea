import type { LucideIcon } from "lucide-react";
import type { ReactNode, RefObject } from "react";
import { useInView } from "@/hooks/useInView";
import AdvantageCard from "./AdvantageCard";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: ReactNode;
}

interface AdvantageGridProps {
  title: string;
  advantages: Advantage[];
}

const AdvantageGrid = ({ title, advantages }: AdvantageGridProps) => {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      <h2 className={`text-3xl font-bold text-center text-foreground mb-12 reveal${inView ? " is-visible" : ""}`}>
        {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {advantages.map((advantage, i) => (
          <div
            key={advantage.title}
            className={`reveal${inView ? " is-visible" : ""}`}
            style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
          >
            <AdvantageCard
              icon={advantage.icon}
              index={i}
              title={advantage.title}
              description={advantage.description}
              badge={advantage.badge}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageGrid;
