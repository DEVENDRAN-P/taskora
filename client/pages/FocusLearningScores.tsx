import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, Activity, ArrowUp, Target, Zap, Menu, X, Settings, User } from "lucide-react";
import { useState } from "react";

export default function FocusLearningScores() {
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
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Focus & Learning Scores</span>
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
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Overview Scores */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Your Learning Performance</h1>
              <p className="text-white/70">Track your focus quality and learning progress</p>
            </div>

            {/* Main Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Focus Score */}
              <div className="p-8 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Focus Score</h3>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">87%</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm">+5% from last week</span>
                </div>
                <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>

              {/* Learning Score */}
              <div className="p-8 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Learning Score</h3>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">94%</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm">+8% from last month</span>
                </div>
                <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>

              {/* Consistency Score */}
              <div className="p-8 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Consistency</h3>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">0%</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm">12-day streak</span>
                </div>
                <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Focus Metrics */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Focus Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: "Peak Focus Hours", value: "2-4 PM", percentage: 95 },
                    { label: "Average Session Length", value: "87 mins", percentage: 87 },
                    { label: "Distraction Resistance", value: "Strong", percentage: 82 },
                    { label: "Deep Work Time", value: "18.5 hrs/week", percentage: 90 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{item.label}</span>
                        <span className="text-sm text-gray-300 font-medium">{item.value}</span>
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

              {/* Learning Goals */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Learning Achievements</h3>
                <div className="space-y-4">
                  {[
                    { label: "Topics Mastered", value: "24", target: 50 },
                    { label: "Revision Sessions", value: "156", target: 200 },
                    { label: "Focused Study Hours", value: "234", target: 400 },
                    { label: "Learning Streaks", value: "3", target: 5 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <span className="text-white/80">{item.label}</span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{item.value}</div>
                        <div className="text-xs text-white/60">of {item.target}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-6">Weekly Score Trend</h3>
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => {
                  const scores = [82, 85, 88, 86, 89, 87, 91];
                  return (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{day}</span>
                        <span className="text-sm text-gray-300 font-medium">{scores[i]}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-black to-gray-900 rounded-full"
                          style={{ width: `${scores[i]}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
