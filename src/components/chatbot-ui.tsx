import { useState } from "react";
import { BotMessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { type Message, type ChatRequest } from "@/types/chatbot";

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

  const [isLoading, setIsLoading] = useState(false);

  const extractAssistantContent = (data: any): string => {
    if (!data) return "";

    // Prefer the explicit `response` field (endpoint returns { response: string })
    if (typeof data.response === "string") return data.response;

    if (data?.message?.content) return data.message.content;
    if (typeof data?.message === "string") return data.message;
    if (Array.isArray(data?.messages) && data.messages[0]?.content)
      return data.messages[0].content;
    if (typeof data?.data === "string") return data.data;

    try {
      return JSON.stringify(data);
    } catch {
      return String(data);
    }
  };

  const handleSubmit = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { role: "user", content: trimmed };

    // Optimistically add the user message
    onMessagesChange((prev) => [...prev, userMessage]);

    // clear input and start loading
    onInputChange("");
    setIsLoading(true);

    try {
      const url = "https://mad-m4x-portfolio-chatbot.hf.space/get-response";
      const body: ChatRequest = {
        messages: [...messages, userMessage],
      };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      const assistantContent = extractAssistantContent(data);

      onMessagesChange((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantContent,
        },
      ]);
    } catch (err) {
      onMessagesChange((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry — could not reach the assistant. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
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
          {isLoading && (
            <div className="flex flex-col gap-2 items-start">
              <div className="rounded-full bg-primary/10 p-1.5 mt-0.5 shrink-0">
                <BotMessageSquare size={14} className="text-primary" />
              </div>
              <div className="text-sm bg-muted rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] text-primary">
                <div className="typing-dots inline-flex items-center gap-2">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            </div>
          )}
          <style>{`\n            .typing-dots .dot{width:7px;height:7px;border-radius:9999px;background:currentColor;display:inline-block;animation:chat-bounce 0.7s infinite;}\n            .typing-dots .dot:nth-child(1){animation-delay:0s}\n            .typing-dots .dot:nth-child(2){animation-delay:0.12s}\n            .typing-dots .dot:nth-child(3){animation-delay:0.24s}\n            @keyframes chat-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}\n          `}</style>
        </div>

        {/* Input area */}
        <div className="flex items-center gap-2 px-3 py-3 border-t">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 text-sm bg-muted rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-foreground/50"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            disabled={isLoading}
          />
          <Button
            size="icon"
            className="rounded-full h-8 w-8 shrink-0"
            onClick={handleSubmit}
            disabled={isLoading || !input.trim()}
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
