import { Link } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Clock,
  Target,
  BookOpen,
  Menu,
  X,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white lg:hidden"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
            <nav className="space-y-2">
              <button className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-left hover:bg-blue-100 dark:hover:bg-blue-900/30 transition flex items-center gap-3">
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </button>
              <Link
                to="/chat"
                className="w-full px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 font-medium text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-3"
              >
                <Activity className="w-5 h-5" />
                Chat
              </Link>
              <Link
                to="/analytics"
                className="w-full px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 font-medium text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-3"
              >
                <TrendingUp className="w-5 h-5" />
                Analytics
              </Link>
            </nav>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
              <Link
                to="/"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                ← Back to Home
              </Link>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Welcome back, Learner
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Here's your learning progress for this week
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Focus Time",
                  value: "24h 32m",
                  change: "+12% from last week",
                  icon: Clock,
                  bgColor: "bg-blue-100 dark:bg-blue-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400",
                },
                {
                  label: "Learning Streak",
                  value: "12 Days",
                  change: "Keep it up!",
                  icon: Target,
                  bgColor: "bg-green-100 dark:bg-green-900/30",
                  iconColor: "text-green-600 dark:text-green-400",
                },
                {
                  label: "Avg. Focus",
                  value: "82%",
                  change: "+5% improvement",
                  icon: Activity,
                  bgColor: "bg-purple-100 dark:bg-purple-900/30",
                  iconColor: "text-purple-600 dark:text-purple-400",
                },
                {
                  label: "Sessions",
                  value: "18",
                  change: "This week",
                  icon: BookOpen,
                  bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
                  iconColor: "text-cyan-600 dark:text-cyan-400",
                },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4`}>
                    <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Focus Time Chart */}
              <div className="lg:col-span-2 p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Focus Time This Week
                </h2>
                <div className="space-y-4">
                  {[
                    { day: "Monday", hours: 4.5, target: 5 },
                    { day: "Tuesday", hours: 5, target: 5 },
                    { day: "Wednesday", hours: 4, target: 5 },
                    { day: "Thursday", hours: 5.5, target: 5 },
                    { day: "Friday", hours: 3.5, target: 5 },
                    { day: "Saturday", hours: 1.5, target: 5 },
                    { day: "Sunday", hours: 0.5, target: 5 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-20">
                        {item.day}
                      </span>
                      <div className="flex-1 mx-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.hours >= item.target
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                          style={{
                            width: `${(item.hours / item.target) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 w-12 text-right">
                        {item.hours}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Learning Apps */}
              <div className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Top Apps
                </h2>
                <div className="space-y-4">
                  {[
                    { app: "VS Code", time: "8h 23m" },
                    { app: "Notion", time: "4h 12m" },
                    { app: "YouTube", time: "3h 45m" },
                    { app: "Discord", time: "2h 15m" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.app}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Upcoming Sessions
              </h2>
              <div className="space-y-3">
                {[
                  { time: "Today at 2:00 PM", subject: "React Fundamentals", duration: "1.5 hours" },
                  { time: "Tomorrow at 10:00 AM", subject: "TypeScript Advanced", duration: "2 hours" },
                  { time: "Friday at 3:00 PM", subject: "Database Design", duration: "1 hour" },
                ].map((session, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {session.subject}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {session.time}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {session.duration}
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
