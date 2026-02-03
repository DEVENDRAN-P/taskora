import { Link } from "react-router-dom";
import { FileText, BarChart3, TrendingUp, Brain, Menu, X, Settings, User } from "lucide-react";
import { useState } from "react";

export default function WeeklyReflection() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/20 bg-transparent">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-white/10 text-white lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-900 flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Weekly AI Reflection</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 border-r border-white/20 bg-white/5 backdrop-blur p-6 space-y-6">
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="w-full px-4 py-3 rounded-lg text-white/70 font-medium text-left hover:bg-white/10 transition flex items-center gap-3"
              >
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </Link>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Weekly Learning Reflection</h1>
              <p className="text-white/70">Week of Feb 3 - Feb 9, 2026</p>
            </div>

            {/* Executive Summary */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-300" />
                This Week's Summary
              </h3>
              <div className="space-y-3 text-white/80">
                <p>
                  🎯 <strong>Overall Performance:</strong> You had an excellent week! Your focus quality improved by 0% compared to last week, and you maintained a 0-day learning streak.
                </p>
                <p>
                  📚 <strong>Learning Achievements:</strong> You completed 0 topics, reviewed 0 concepts using spaced repetition, and achieved 0% accuracy on your assessments.
                </p>
                <p>
                  ⚡ <strong>Peak Hours:</strong> Your most productive time remains 2-4 PM with 0% focus quality. We recommend scheduling your hardest topics during this window.
                </p>
                <p>
                  🔥 <strong>Consistency:</strong> You studied on 6 out of 7 days this week. The only gap was Sunday - consider it deserved rest!
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h4 className="text-white font-semibold mb-4">📊 This Week's Stats</h4>
                <div className="space-y-3">
                  {[
                    { label: "Total Study Time", value: "0h 0m" },
                    { label: "Average Session", value: "0 mins" },
                    { label: "Topics Completed", value: "0" },
                    { label: "Concepts Reviewed", value: "0" },
                    { label: "Assessment Score", value: "0%" },
                    { label: "Focus Quality", value: "0%" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-white/70">{item.label}</span>
                      <span className="text-gray-300 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h4 className="text-white font-semibold mb-4">📈 Improvements</h4>
                <div className="space-y-3">
                  {[
                    { label: "Focus Quality", trend: "0%", status: "→ Stable" },
                    { label: "Study Consistency", trend: "0%", status: "→ Stable" },
                    { label: "Learning Speed", trend: "0%", status: "→ Stable" },
                    { label: "Distraction Resistance", trend: "0%", status: "→ Stable" },
                    { label: "Long-term Retention", trend: "0%", status: "→ Stable" },
                    { label: "Peak Hour Quality", trend: "0%", status: "→ Stable" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-white/70">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{item.trend}</span>
                        <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights & Recommendations */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-gray-300" />
                AI Insights & Recommendations
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "🎯 Maximize Your Peak Hours",
                    description: "Your focus quality is highest at 2-4 PM (0%). Schedule your most challenging topics during this window for optimal learning outcomes."
                  },
                  {
                    title: "🧠 Strengthen Weak Areas",
                    description: "Your weakest concept is 'Advanced TypeScript Types' (0% mastery). Recommend scheduling a focused 60-minute session this week."
                  },
                  {
                    title: "🔁 Spaced Repetition Success",
                    description: "Your revision success rate increased to 0%. Continue current revision schedule - it's working exceptionally well!"
                  },
                  {
                    title: "⚠️ Watch Your Evening Focus",
                    description: "Focus quality drops significantly after 9 PM (0%). Consider limiting evening study sessions or scheduling them 6-8 PM instead."
                  },
                  {
                    title: "🚀 Accelerate Learning",
                    description: "Based on your patterns, you can handle 0% more material. Challenge yourself with advanced topics while maintaining current quality."
                  },
                  {
                    title: "💪 Build on Success",
                    description: "Your 12-day streak is impressive! Aim for 14 days next week - just 2 more days to build momentum."
                  },
                ].map((insight, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{insight.title}</h4>
                    <p className="text-sm text-white/70">{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Week's Focus */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">📅 Recommended Focus for Next Week</h3>
              <div className="space-y-3 text-white/80">
                <p>
                  <strong>Primary Goal:</strong> Master "Advanced TypeScript Types" and "System Design Fundamentals" (currently at 0% and 0% mastery respectively)
                </p>
                <p>
                  <strong>Secondary Goal:</strong> Complete 2 new topics while maintaining your learning streak
                </p>
                <p>
                  <strong>Focus Time:</strong> Allocate your 2-4 PM peak hours for challenging new material
                </p>
                <p>
                  <strong>Revision:</strong> Plan 4-5 spaced repetition sessions for concepts learned 1-2 weeks ago
                </p>
              </div>
            </div>

            {/* Download Report */}
            <button className="w-full p-4 rounded-lg bg-black hover:bg-gray-900 text-white font-semibold transition flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Download Full Report as PDF
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
