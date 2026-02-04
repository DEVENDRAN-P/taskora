import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import LearningChatbot from "./pages/LearningChatbot";
import FocusLearningScores from "./pages/FocusLearningScores";
import DistractionAnalyzer from "./pages/DistractionAnalyzer";
import SmartAppNudges from "./pages/SmartAppNudges";
import RecallAssistant from "./pages/RecallAssistant";
import WeeklyReflection from "./pages/WeeklyReflection";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Company from "./pages/Company";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { AuthProvider, useAuth } from "./lib/auth-context";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Index />} />
    <Route path="/login" element={<Login />} />
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/company" element={<Company />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/legal" element={<Legal />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />

    {/* Protected Routes */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/chat"
      element={
        <ProtectedRoute>
          <Chat />
        </ProtectedRoute>
      }
    />
    <Route
      path="/analytics"
      element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      }
    />
    <Route
      path="/learning-chatbot"
      element={
        <ProtectedRoute>
          <LearningChatbot />
        </ProtectedRoute>
      }
    />
    <Route
      path="/focus-scores"
      element={
        <ProtectedRoute>
          <FocusLearningScores />
        </ProtectedRoute>
      }
    />
    <Route
      path="/distraction-analyzer"
      element={
        <ProtectedRoute>
          <DistractionAnalyzer />
        </ProtectedRoute>
      }
    />
    <Route
      path="/smart-nudges"
      element={
        <ProtectedRoute>
          <SmartAppNudges />
        </ProtectedRoute>
      }
    />
    <Route
      path="/recall-assistant"
      element={
        <ProtectedRoute>
          <RecallAssistant />
        </ProtectedRoute>
      }
    />
    <Route
      path="/weekly-reflection"
      element={
        <ProtectedRoute>
          <WeeklyReflection />
        </ProtectedRoute>
      }
    />

    {/* 404 Route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-gradient">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
