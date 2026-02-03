import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 backdrop-blur-md dark:border-slate-700/50 bg-white/80 dark:bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Taskora</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center py-32 px-4">
        <div className="text-center max-w-2xl">
          {icon && (
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                {icon}
              </div>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <p className="text-blue-900 dark:text-blue-300 font-medium mb-2">
              💡 Help build this page
            </p>
            <p className="text-blue-800 dark:text-blue-400 text-sm">
              This page is ready to be developed! Tell us what you'd like to see
              here, and we'll build it for you.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
