import { Link, useNavigate } from "react-router-dom";
import {
  BarChart3,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Home,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-black to-gray-900 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-lg font-bold text-white">
              Taskora
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#features"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition"
            >
              About
            </a>
            <div className="w-px h-4 bg-white/20 mx-2"></div>
            <button 
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
            >
              Get Started
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 p-4 space-y-2">
            <a
              href="#features"
              className="block px-4 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              About
            </a>
            <button 
              onClick={() => navigate("/login")}
              className="w-full px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/30">
            <span className="text-sm font-medium text-white">
              Learn Smarter, Not Harder
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Your Intelligent Learning<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent">
              Companion
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Taskora combines learning analytics, AI-powered guidance, and smart scheduling to help you achieve consistent focus and better results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl"
            >
              Try Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button 
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              View Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                0
              </div>
              <div className="text-sm text-white/70">
                Active Learners
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                0%
              </div>
              <div className="text-sm text-white/70">
                Focus Improvement
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                0%
              </div>
              <div className="text-sm text-white/70">
                Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Powerful features designed for consistent learning and focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Analytics",
                description: "Track your learning patterns with detailed metrics and visual insights",
                icon: BarChart3,
              },
              {
                title: "AI-Powered Assistant",
                description: "Get personalized guidance and learning recommendations from your AI coach",
                icon: MessageCircle,
              },
              {
                title: "Smart Scheduling",
                description: "Automatically schedule study sessions based on your focus patterns",
                icon: TrendingUp,
              },
              {
                title: "Focus Tracking",
                description: "Monitor your concentration levels and identify distraction patterns",
                icon: CheckCircle2,
              },
              {
                title: "Progress Reports",
                description: "Weekly AI-generated reports on your learning journey and improvements",
                icon: BarChart3,
              },
              {
                title: "Goal Management",
                description: "Set, track, and achieve your learning goals with intelligent reminders",
                icon: TrendingUp,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover:border-gray-300 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-lg bg-black/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How it Works
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Taskora uses advanced analytics and machine learning to understand your learning patterns and optimize your study routine.
              </p>
              <ul className="space-y-3">
                {[
                  "Monitor your focus and learning habits",
                  "Analyze patterns with AI algorithms",
                  "Get personalized recommendations",
                  "Track progress with real-time metrics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    <span className="text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/20 p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white/30">
                  📊
                </div>
                <p className="text-white/60 mt-4">
                  Advanced Analytics Dashboard Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of learners improving their focus and consistency with Taskora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl"
            >
              Start Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button 
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-4 sm:px-6 lg:px-8 py-12 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-900 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-bold text-white">
                  Taskora
                </span>
              </div>
              <p className="text-sm text-white/60">
                Intelligent learning companion for modern students.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-white/60 hover:text-white transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © 2026 Taskora. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
