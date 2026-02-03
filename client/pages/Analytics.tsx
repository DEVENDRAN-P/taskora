import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  MessageCircle,
  Menu,
  X,
  Settings,
  User,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useState } from "react";

export default function Analytics() {
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
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-900 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-white">
                Analytics
              </span>
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
              <Link
                to="/chat"
                className="w-full px-4 py-3 rounded-lg text-white/70 font-medium text-left hover:bg-white/10 transition flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Chat
              </Link>
              <button className="w-full px-4 py-3 rounded-lg bg-black/20 text-white font-medium text-left hover:bg-black/30 transition flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Analytics
              </button>
            </nav>
            <div className="border-t border-white/20 pt-6">
              <Link
                to="/"
                className="text-sm text-white/60 hover:text-white transition"
              >
                ← Back to Home
              </Link>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Learning Analytics
              </h1>
              <p className="text-white/70">
                Deep insights into your learning patterns and progress
              </p>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Total Focus Time",
                  value: "156h 42m",
                  change: "0% vs last month",
                  trend: "up",
                },
                {
                  label: "Avg Session Length",
                  value: "87 minutes",
                  change: "+5 minutes improvement",
                  trend: "up",
                },
                {
                  label: "Consistency Score",
                  value: "0%",
                  change: "0% from last week",
                  trend: "up",
                },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover:border-gray-300/50 transition"
                >
                  <div className="text-sm text-white/70 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold text-white mb-3">
                    {metric.value}
                  </div>
                  <div className="flex items-center gap-2">
                    {metric.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-gray-300" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-gray-300" />
                    )}
                    <span className="text-xs text-gray-300 font-medium">
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Patterns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Focus Distribution */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h2 className="text-lg font-bold text-white mb-6">
                  Focus by Time of Day
                </h2>
                <div className="space-y-4">
                  {[
                    { time: "Early Morning (6-9 AM)", percentage: 12 },
                    { time: "Morning (9 AM-12 PM)", percentage: 32 },
                    { time: "Afternoon (12-3 PM)", percentage: 28 },
                    { time: "Late Afternoon (3-6 PM)", percentage: 18 },
                    { time: "Evening (6-9 PM)", percentage: 8 },
                    { time: "Night (9 PM+)", percentage: 2 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white/80">
                          {item.time}
                        </span>
                        <span className="text-sm text-white/60">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Subjects */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h2 className="text-lg font-bold text-white mb-6">
                  Time by Learning Subject
                </h2>
                <div className="space-y-4">
                  {[
                    { subject: "Programming", hours: 48 },
                    { subject: "Web Development", hours: 35 },
                    { subject: "Database Design", hours: 22 },
                    { subject: "UI/UX Design", hours: 18 },
                    { subject: "Other", hours: 34 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white/80">
                          {item.subject}
                        </span>
                        <span className="text-sm text-white/60">
                          {item.hours}h
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${(item.hours / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Breakdown */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h2 className="text-lg font-bold text-white mb-6">
                Weekly Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    week: "Week 1",
                    target: 20,
                    actual: 18,
                    sessions: 12,
                  },
                  {
                    week: "Week 2",
                    target: 20,
                    actual: 22,
                    sessions: 14,
                  },
                  {
                    week: "Week 3",
                    target: 20,
                    actual: 20,
                    sessions: 15,
                  },
                  {
                    week: "Week 4",
                    target: 20,
                    actual: 24,
                    sessions: 18,
                  },
                ].map((w, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="text-sm font-semibold text-white mb-3">
                      {w.week}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <div className="text-xs text-white/60 mb-1">
                          Target: {w.target}h
                        </div>
                        <div className="text-xs text-white/60">
                          Actual: {w.actual}h
                        </div>
                      </div>
                      <div className="text-xs text-gray-300 font-medium">
                        {w.sessions} sessions
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
