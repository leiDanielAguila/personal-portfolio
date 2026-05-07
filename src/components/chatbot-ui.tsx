import { useState } from "react";
import { BotMessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { type Message } from "@/types/chatbot";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, onInputChange] = useState("");

  const [messages, onMessagesChange] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "   Hi! I'm Lei's AI assistant. Ask me anything about his work or experience. 👋",
    },
  ]);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    onMessagesChange((prev) => [
      ...prev,
      {
        role: "user",
        content: trimmed,
      },
    ]);
    // wire backend response 
    
    onInputChange("");
  };

  return (
    <aside className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chatbox */}
      <div
        className={`
          absolute bottom-14 right-0 flex h-120 w-80 flex-col overflow-hidden rounded-2xl border bg-background shadow-xl origin-bottom-right sm:bottom-16 sm:w-96
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <BotMessageSquare size={18} />
            <span className="text-sm font-medium">Chat with Lei</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={16} />
          </Button>
        </div>

        {/* Messages area */}
        <div className="flex-1 h-72 overflow-y-auto px-4 py-3 flex flex-col gap-3">
          {/* Placeholder welcome message */}
          {messages.map((message, index) => (
            <div
              className={`flex flex-col gap-2 ${message.role === "user" ? "items-end" : "items-start"}`}
              key={index}
            >
              {message.role === "assistant" && (
                <div className="rounded-full bg-primary/10 p-1.5 mt-0.5 shrink-0">
                  <BotMessageSquare size={14} className="text-primary" />
                </div>
              )}
              <p
                className={`text-sm rounded-2xl px-3 py-2 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted rounded-tl-sm"
                }`}
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="flex items-center gap-2 px-3 py-3 border-t">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 text-sm bg-muted rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-foreground/50"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <Button
            size="icon"
            className="rounded-full h-8 w-8 shrink-0"
            onClick={handleSubmit}
            disabled={!input.trim()}
          >
            <Send size={14} />
          </Button>
        </div>
      </div>

      {/* Toggle button */}
      <Button
        variant="ghost"
        size="lg"
        className="relative z-10 h-12 w-12 rounded-full border border-foreground bg-foreground p-0 text-background shadow-lg hover:bg-foreground/90 hover:text-background dark:border-foreground dark:bg-background dark:text-foreground dark:hover:bg-background/90 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle chat"
      >
        <BotMessageSquare size={20} />
        <p className="hidden text-base sm:block">Chat with Lei</p>
      </Button>
    </aside>
  );
};
