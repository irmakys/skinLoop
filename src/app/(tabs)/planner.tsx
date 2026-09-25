import { AmbientBackground } from "@/components/AmbientBackground";
import { DailyPlanner } from "@/features/planner/DailyPlanner";

export default function PlannerScreen() {
  return (
    <AmbientBackground>
      <DailyPlanner />
    </AmbientBackground>
  );
}
