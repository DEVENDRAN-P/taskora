import PlaceholderPage from "./PlaceholderPage";
import { BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <PlaceholderPage
      title="Learning Dashboard"
      description="Your personal learning hub with real-time focus metrics, learning calendar, and activity tracking. Visualize your progress and understand your learning patterns at a glance."
      icon={<BarChart3 className="w-10 h-10 text-purple-600 dark:text-purple-400" />}
    />
  );
}
