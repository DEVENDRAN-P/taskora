import { Link } from "react-router-dom";
import { AlertCircle, BarChart3, PieChart, TrendingDown, Menu, X, Settings, User } from "lucide-react";
import { useState } from "react";

export default function DistractionAnalyzer() {
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
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Distraction Pattern Analyzer</span>
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
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Distraction Pattern Analysis</h1>
              <p className="text-white/70">Identify and overcome your focus distractions</p>
            </div>

            {/* Overall Distraction Score */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Distraction Score</h3>
                <PieChart className="w-6 h-6 text-gray-300" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">Low</div>
                  <div className="text-white/70">You're in control of your focus</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">0%</div>
                      <div className="text-xs text-white/70">Distraction Rate</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/70 space-y-2">
                    <div>✓ Excellent control over distractions</div>
                    <div>✓ 0% productivity rate this week</div>
                    <div>✓ Keep up the great work!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Distractions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* App Distractions */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Top Distracting Apps</h3>
                <div className="space-y-4">
                  {[
                    { app: "Social Media", count: 24, time: "1.5h" },
                    { app: "Messaging Apps", count: 18, time: "1.2h" },
                    { app: "Entertainment", count: 12, time: "0.8h" },
                    { app: "Email Notifications", count: 8, time: "0.5h" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{item.app}</span>
                        <span className="text-sm text-gray-300">{item.count} times • {item.time}</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${(item.count / 24) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time of Day Analysis */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Distraction Patterns by Time</h3>
                <div className="space-y-4">
                  {[
                    { time: "Morning (6-12 AM)", rate: 15, level: "Low" },
                    { time: "Afternoon (12-5 PM)", rate: 28, level: "Medium" },
                    { time: "Evening (5-9 PM)", rate: 42, level: "High" },
                    { time: "Night (9+ PM)", rate: 55, level: "Very High" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{item.time}</span>
                        <span className={`text-xs font-medium ${
                          item.level === "Low" ? "text-green-300" :
                          item.level === "Medium" ? "text-yellow-300" :
                          item.level === "High" ? "text-orange-300" :
                          "text-red-300"
                        }`}>
                          {item.level} • {item.rate}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.level === "Low" ? "bg-green-500" :
                            item.level === "Medium" ? "bg-yellow-500" :
                            item.level === "High" ? "bg-orange-500" :
                            "bg-red-500"
                          }`}
                          style={{ width: `${item.rate}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-6 h-6 text-gray-300" />
                <h3 className="text-lg font-bold text-white">Smart Recommendations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Block Social Media",
                    description: "Use app blockers during peak work hours (2-4 PM)",
                    impact: "Could improve focus by 23%"
                  },
                  {
                    title: "Schedule Breaks",
                    description: "Take 5-min breaks every 45 mins instead of reactive breaks",
                    impact: "Could improve productivity by 18%"
                  },
                  {
                    title: "Focus Time",
                    description: "Enable Do Not Disturb mode during deep work sessions",
                    impact: "Could reduce interruptions by 35%"
                  },
                  {
                    title: "Evening Strategy",
                    description: "Your highest distraction time is 9+ PM. Reschedule if possible",
                    impact: "Could improve evening focus by 40%"
                  },
                ].map((rec, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{rec.title}</h4>
                    <p className="text-sm text-white/70 mb-3">{rec.description}</p>
                    <div className="text-xs text-gray-300">📈 {rec.impact}</div>
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
