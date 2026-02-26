import { useState } from "react";
import { BotMessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chatbox */}
      <div
        className={`
          flex flex-col w-80 h-120 sm:w-96 rounded-2xl border bg-background shadow-xl
          overflow-hidden origin-bottom-right
          transition-all duration-300 ease-in-out
          ${isOpen
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
          <div className="flex gap-2 items-start">
            <div className="rounded-full bg-primary/10 p-1.5 mt-0.5 shrink-0">
              <BotMessageSquare size={14} className="text-primary" />
            </div>
            <p className="text-sm bg-muted rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
              Hi! I'm Lei's AI assistant. Ask me anything about his work or experience. 👋
            </p>
          </div>
        </div>

        {/* Input area */}
        <div className="flex items-center gap-2 px-3 py-3 border-t">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 text-sm bg-muted rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-foreground/50"
            // disabled
          />
          <Button size="icon" className="rounded-full h-8 w-8 shrink-0" disabled>
            <Send size={14} />
          </Button>
        </div>
      </div>

      {/* Toggle button */}
      <Button
        variant="ghost"
        size="lg"
        className="rounded-full shadow-lg gap-2 border border-foreground bg-foreground text-background hover:bg-foreground/90 hover:text-background dark:bg-background dark:text-foreground dark:border-foreground dark:hover:bg-background/90"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle chat"
      >
        <BotMessageSquare size={20} />
        <p className="text-lg sm:text-base">Chat with Lei</p>
      </Button>
    </aside>
  );
};
