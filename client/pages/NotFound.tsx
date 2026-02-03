import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-gray-300" />
          </div>
        </div>
        
        <div>
          <h1 className="text-6xl font-bold text-white mb-2">404</h1>
          <p className="text-2xl font-semibold text-white mb-2">Page Not Found</p>
          <p className="text-white/70 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg bg-black hover:bg-gray-900 text-white font-semibold transition"
          >
            Return Home
          </Link>
          <p className="text-white/50 text-sm">
            If you believe this is a mistake, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
