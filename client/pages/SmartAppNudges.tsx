import { Link } from "react-router-dom";
import { Bell, BarChart3, Zap, CheckCircle2, Menu, X, Settings, User } from "lucide-react";
import { useState } from "react";

export default function SmartAppNudges() {
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
                <Bell className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Smart App Nudges</span>
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
              <h1 className="text-4xl font-bold text-white mb-2">Smart App Nudges</h1>
              <p className="text-white/70">Gentle reminders to keep you on track without interruptions</p>
            </div>

            {/* Active Nudges */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-gray-300" />
                Active Nudges
              </h3>
              <div className="space-y-4">
                {[
                  {
                    app: "YouTube",
                    action: "Blocked during 2-4 PM",
                    status: "Active",
                    impact: "Saved 2.5h this week"
                  },
                  {
                    app: "Twitter",
                    action: "Limited to 10 mins/session",
                    status: "Active",
                    impact: "Reduced by 1.2h this week"
                  },
                  {
                    app: "Instagram",
                    action: "Soft block with gentle reminder",
                    status: "Active",
                    impact: "Prevented 45 mins of distraction"
                  },
                  {
                    app: "WhatsApp",
                    action: "Silenced during focus sessions",
                    status: "Active",
                    impact: "Improved focus by 0%"
                  },
                ].map((nudge, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">{nudge.app}</div>
                      <div className="text-sm text-white/70">{nudge.action}</div>
                      <div className="text-xs text-gray-300 mt-2">✓ {nudge.impact}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="text-xs font-medium text-green-300">{nudge.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nudge History */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Nudges */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Today's Nudges Received</h3>
                <div className="space-y-3">
                  {[
                    { time: "2:15 PM", message: "You've used YouTube for 5 mins. Time to refocus?" },
                    { time: "3:45 PM", message: "Attempting to open Twitter. Soft reminder: Focus time!" },
                    { time: "5:30 PM", message: "Great job! No distractions during your peak hours." },
                    { time: "8:20 PM", message: "WhatsApp silenced. You're in deep focus mode." },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5">
                      <div className="text-xs text-gray-300 mb-1">{item.time}</div>
                      <div className="text-sm text-white/80">{item.message}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nudge Impact */}
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Nudge Effectiveness</h3>
                <div className="space-y-4">
                  {[
                    { action: "Resisted Distraction", count: 12, rate: 85 },
                    { action: "Accepted Nudge", count: 18, rate: 92 },
                    { action: "Took Break", count: 8, rate: 78 },
                    { action: "Returned to Focus", count: 24, rate: 96 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/80">{item.action}</span>
                        <span className="text-sm text-gray-300 font-medium">{item.count} times • {item.rate}%</span>
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
            </div>

            {/* Configure Nudges */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-300" />
                Configure Your Nudges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Time-based Blocking",
                    description: "Block apps during specific hours",
                    enabled: true
                  },
                  {
                    title: "Session Limits",
                    description: "Limit app usage per session",
                    enabled: true
                  },
                  {
                    title: "Gentle Reminders",
                    description: "Soft nudges before blocking",
                    enabled: true
                  },
                  {
                    title: "Smart Notifications",
                    description: "Context-aware app alerts",
                    enabled: false
                  },
                  {
                    title: "Break Reminders",
                    description: "Remind you to take breaks",
                    enabled: true
                  },
                  {
                    title: "Progress Celebrations",
                    description: "Celebrate focus milestones",
                    enabled: true
                  },
                ].map((feature, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full transition-colors ${
                      feature.enabled ? "bg-black" : "bg-white/20"
                    }`}>
                      <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        feature.enabled ? "translate-x-6" : "translate-x-0"
                      }`}></div>
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
