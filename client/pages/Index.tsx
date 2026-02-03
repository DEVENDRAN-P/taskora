import { Link } from "react-router-dom";
import {
  Brain,
  BarChart3,
  Calendar,
  MessageCircle,
  Zap,
  Eye,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Shield,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 backdrop-blur-md dark:border-slate-700/50 bg-white/80 dark:bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Taskora
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">
              How It Works
            </a>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition">
              Get Started
            </button>
          </div>
          <button className="md:hidden px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              ✨ The Intelligent Learning Companion
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Master Your Learning,
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Not Your Distractions
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Taskora silently monitors your learning behavior, intelligently schedules your study sessions, and coaches you toward better focus—all without forced restrictions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition transform hover:scale-105">
              Start Learning Better
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Watch Demo
            </button>
          </div>

          {/* Hero Image/Feature */}
          <div className="relative pt-8">
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-1 backdrop-blur">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 min-h-64 flex flex-col items-center justify-center">
                <BarChart3 className="w-24 h-24 text-purple-600/30 mb-4" />
                <p className="text-slate-600 dark:text-slate-400">
                  Real-time learning analytics and personalized insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive tools designed for modern learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Background App Monitoring
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Silently tracks learning and distraction apps with permission-based transparency. Understand where your focus goes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Calendar className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Smart Learning Calendar
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                AI-powered scheduling that automatically plans sessions, reschedules missed tasks, and adapts to your focus patterns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                AI Learning Chatbot
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Conversational assistant that understands your learning journey and provides personalized guidance and summaries.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Focus & Learning Scores
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Clear metrics based on uninterrupted learning time and consistency. No gamification overload, just meaningful data.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Smart App Nudges
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Gentle, helpful notifications that keep you on track without restrictive controls. You always stay in command.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl dark:hover:shadow-purple-900/20 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Learning Recall Assistant
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                AI generates summaries, creates revision questions, and schedules spaced repetition for better retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              How Taskora Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A seamless workflow designed for your learning success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: 1,
                title: "Monitor",
                desc: "Silently tracks your learning and distraction apps",
              },
              {
                step: 2,
                title: "Analyze",
                desc: "AI detects patterns and focus habits automatically",
              },
              {
                step: 3,
                title: "Suggest",
                desc: "Receives personalized guidance and schedule adjustments",
              },
              {
                step: 4,
                title: "Improve",
                desc: "Weekly reflections help you learn even better",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:border-purple-400 dark:hover:border-purple-500 transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Taskora?
              </h2>
              <ul className="space-y-4">
                {[
                  "Runs silently without intrusive interruptions",
                  "Combines monitoring, planning, and personalized coaching",
                  "Adapts to your real learning behavior and patterns",
                  "Not just a timer—comprehensive learning companion",
                  "Transparent tracking with complete user control",
                  "Actionable insights for continuous improvement",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700 dark:text-slate-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Active Learners", value: "10K+" },
                { label: "Avg. Focus Improvement", value: "42%" },
                { label: "Learning Consistency", value: "↑3.2x" },
                { label: "Distraction Reduction", value: "62%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                desc: "User-controlled tracking with transparent data usage policies",
              },
              {
                icon: Brain,
                title: "AI-Powered",
                desc: "Smart pattern detection that learns and adapts to you",
              },
              {
                icon: Zap,
                title: "Zero Restrictions",
                desc: "Gentle nudges, never forced blocking or hard controls",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who've improved their focus and consistency with Taskora's intelligent guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition transform hover:scale-105">
              Get Started Free
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-slate-900 dark:text-white">
                  Taskora
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Intelligent learning companion for modern students.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
              © 2024 Taskora. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                Terms
              </a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
