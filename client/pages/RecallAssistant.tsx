import { Link } from "react-router-dom";
import { BookOpen, BarChart3, RefreshCw, Clock, Menu, X, Settings, User, Award } from "lucide-react";
import { useState } from "react";

export default function RecallAssistant() {
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
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Recall & Revision</span>
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
              <h1 className="text-4xl font-bold text-white mb-2">Learning Recall & Revision</h1>
              <p className="text-white/70">Master concepts through intelligent spaced repetition</p>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Topics to Review", value: "8", icon: RefreshCw, color: "text-gray-300" },
                { label: "Revision Score", value: "0%", icon: Award, color: "text-gray-300" },
                { label: "Next Review", value: "2h 30m", icon: Clock, color: "text-gray-300" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/70 text-sm">{stat.label}</span>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Spaced Repetition Schedule */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-6">Your Revision Schedule</h3>
              <div className="space-y-4">
                {[
                  { topic: "React Hooks", interval: "1 day ago", mastery: 65, stage: "Learning" },
                  { topic: "TypeScript Generics", interval: "3 days ago", mastery: 48, stage: "Strengthening" },
                  { topic: "Database Indexing", interval: "1 week ago", mastery: 72, stage: "Strengthening" },
                  { topic: "API Design", interval: "2 weeks ago", mastery: 85, stage: "Mastered" },
                  { topic: "CSS Flexbox", interval: "3 weeks ago", mastery: 92, stage: "Mastered" },
                  { topic: "Git Workflows", interval: "1 month ago", mastery: 88, stage: "Mastered" },
                  { topic: "Testing Best Practices", interval: "Now", mastery: 42, stage: "Review Now" },
                  { topic: "Performance Optimization", interval: "In 2 hours", mastery: 55, stage: "Review Soon" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.topic}</h4>
                        <div className="text-xs text-white/60">{item.interval}</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        item.stage === "Review Now" ? "bg-red-500/20 text-red-300" :
                        item.stage === "Review Soon" ? "bg-yellow-500/20 text-yellow-300" :
                        item.stage === "Strengthening" ? "bg-orange-500/20 text-orange-300" :
                        "bg-green-500/20 text-green-300"
                      }`}>
                        {item.stage}
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-black to-gray-900 rounded-full"
                        style={{ width: `${item.mastery}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-white/60 mt-2">{item.mastery}% mastery</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revision Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Success Rate */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Revision Success Rate</h3>
                <div className="space-y-4">
                  {[
                    { stage: "1st Review", rate: 45 },
                    { stage: "2nd Review", rate: 62 },
                    { stage: "3rd Review", rate: 78 },
                    { stage: "4th Review", rate: 88 },
                    { stage: "5th+ Review", rate: 95 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{item.stage}</span>
                        <span className="text-sm text-gray-300 font-medium">{item.rate}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${item.rate}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Activity */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Weekly Review Activity</h3>
                <div className="space-y-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => {
                    const reviews = [5, 8, 12, 7, 15, 9, 6];
                    return (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-white/80">{day}</span>
                          <span className="text-sm text-gray-300 font-medium">{reviews[i]} reviews</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-black rounded-full"
                            style={{ width: `${(reviews[i] / 15) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Start Revision Button */}
            <button className="w-full p-6 rounded-lg bg-gradient-to-r from-black to-gray-900 text-white font-bold text-lg hover:shadow-lg transition">
              ▶ Start Revision Session Now
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
