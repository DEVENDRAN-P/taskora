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
                Dashboard
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
              <button className="w-full px-4 py-3 rounded-lg bg-black/20 text-white font-medium text-left hover:bg-black/30 transition flex items-center gap-3">
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </button>
              <Link
                to="/chat"
                className="w-full px-4 py-3 rounded-lg text-white/70 font-medium text-left hover:bg-white/10 transition flex items-center gap-3"
              >
                <Activity className="w-5 h-5" />
                Chat
              </Link>
              <Link
                to="/analytics"
                className="w-full px-4 py-3 rounded-lg text-white/70 font-medium text-left hover:bg-white/10 transition flex items-center gap-3"
              >
                <TrendingUp className="w-5 h-5" />
                Analytics
              </Link>
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
            {/* Welcome Section */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, Learner
              </h1>
              <p className="text-white/70">
                Here's your learning progress for this week
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Focus Time",
                  value: "0h 0m",
                  change: "0% from last week",
                  icon: Clock,
                  bgColor: "bg-black/20",
                  iconColor: "text-gray-300",
                },
                {
                  label: "Learning Streak",
                  value: "0 Days",
                  change: "Start your streak!",
                  icon: Target,
                  bgColor: "bg-black/20",
                  iconColor: "text-gray-300",
                },
                {
                  label: "Avg. Focus",
                  value: "0%",
                  change: "0% improvement",
                  icon: Activity,
                  bgColor: "bg-black/20",
                  iconColor: "text-gray-300",
                },
                {
                  label: "Sessions",
                  value: "0",
                  change: "This week",
                  icon: BookOpen,
                  bgColor: "bg-black/20",
                  iconColor: "text-gray-300",
                },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover:border-gray-300/50 transition"
                >
                  <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4`}>
                    <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                  </div>
                  <div className="text-sm text-white/70 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-300">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Focus Time Chart */}
              <div className="lg:col-span-2 p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h2 className="text-lg font-bold text-white mb-6">
                  Focus Time This Week
                </h2>
                <div className="space-y-4">
                  {[ 
                    { day: "Monday", hours: 0, target: 5 },
                    { day: "Tuesday", hours: 0, target: 5 },
                    { day: "Wednesday", hours: 0, target: 5 },
                    { day: "Thursday", hours: 0, target: 5 },
                    { day: "Friday", hours: 0, target: 5 },
                    { day: "Saturday", hours: 0, target: 5 },
                    { day: "Sunday", hours: 0, target: 5 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/80 w-20">
                        {item.day}
                      </span>
                      <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.hours >= item.target
                              ? "bg-black"
                              : "bg-black/70"
                          }`}
                          style={{
                            width: `${(item.hours / item.target) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-white/70 w-12 text-right">
                        {item.hours}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Learning Apps */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h2 className="text-lg font-bold text-white mb-6">
                  Top Apps
                </h2>
                <div className="space-y-4">
                  {[
                    { app: "VS Code", time: "0h 0m" },
                    { app: "Notion", time: "0h 0m" },
                    { app: "YouTube", time: "0h 0m" },
                    { app: "Discord", time: "0h 0m" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/80">
                        {item.app}
                      </span>
                      <span className="text-sm text-white/70">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h2 className="text-lg font-bold text-white mb-6">
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
                    className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-white">
                        {session.subject}
                      </div>
                      <div className="text-sm text-white/60">
                        {session.time}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white/80">
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
