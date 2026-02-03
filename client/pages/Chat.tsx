import PlaceholderPage from "./PlaceholderPage";
import { MessageCircle } from "lucide-react";

export default function Chat() {
  return (
    <PlaceholderPage
      title="AI Learning Assistant"
      description="Chat with your intelligent learning companion. Ask about your study habits, get personalized learning suggestions, request summaries of your learning sessions, and discover ways to improve your focus and consistency."
      icon={<MessageCircle className="w-10 h-10 text-purple-600 dark:text-purple-400" />}
    />
  );
}
