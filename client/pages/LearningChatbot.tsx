import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Send, Settings, User, Menu, X, Lightbulb } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function LearningChatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hi! I'm your AI Learning Companion 🎓. I'm here to help you optimize your learning journey. I can help you with study plans, answer questions, and provide personalized learning recommendations based on your patterns. What would you like to work on today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content:
        "That's a great question! Based on your learning patterns, I recommend: 1) Start with foundational concepts, 2) Practice with real examples, 3) Review regularly using spaced repetition. Your peak focus time is 2-4 PM, so I suggest scheduling important topics then.",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col">
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
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">AI Learning Chatbot</span>
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

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 border-r border-white/20 bg-white/5 backdrop-blur p-6 space-y-6 hidden lg:block overflow-y-auto">
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="w-full px-4 py-3 rounded-lg text-white/70 font-medium text-left hover:bg-white/10 transition flex items-center gap-3"
              >
                <Lightbulb className="w-5 h-5" />
                Dashboard
              </Link>
            </nav>
            <div className="border-t border-white/20 pt-6">
              <button className="w-full px-4 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition">
                + New Conversation
              </button>
            </div>
          </aside>
        )}

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
            <div className="max-w-3xl mx-auto w-full space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-2xl rounded-lg p-4 ${
                      msg.type === "user"
                        ? "bg-black text-white"
                        : "bg-white/10 backdrop-blur border border-white/20 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-white/20 bg-transparent p-4 lg:p-6">
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything about your learning..."
                  className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
                <button
                  onClick={handleSend}
                  className="p-3 rounded-lg bg-black text-white hover:bg-gray-900 transition"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-white/50 mt-2">
                💡 Tip: Ask me about study strategies, focus techniques, or your learning progress
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
