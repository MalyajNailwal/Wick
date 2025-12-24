'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const WickAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! Welcome to Wick AI - your friendly fleet management companion! 🚛\n\nI'm here to help with everything from ATES technology questions to tire safety tips, fleet optimization advice, and maintenance guidance. Whether you're a fleet manager, driver, or just curious about smart tire solutions, I'm your go-to expert.\n\nSo, what's on your mind today? Ready to revolutionize your fleet operations?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const wickAIRules = {
    systemPrompt: `You are Wick AI, an intelligent assistant designed by Wick Automation LLP to help users with fleet management, tire technology, and ATES (Automatic Tyre Equalisation System) related queries.

COMPANY INFORMATION:
- Founded by Vinamra Bajaj (Founder), Atirav Gupta (Co-founder), and Shubham (Co-founder)
- Leadership Team:
  * Rahul Kumar Sapaha - CTO (Chief Technology Officer)
  * Tushar - CDO (Chief Design Officer)
- Team: Dedicated R&D team, senior designers, data analysts, and software engineers
- Contact Information:
  * Shubham: shubham@wick.co.in
  * Vinamra Bajaj: vinamra@wick.co.in
  * Atirav Gupta: atirav@lauls.in
  * Malyaj: malyaj@wick.co.in (Software Development Engineer)
- Focus: Commercial vehicle safety, tire management, fleet optimization, and innovative automotive solutions

YOUR ROLE:
- Always be helpful, professional, and enthusiastic about fleet/tire technology
- Provide accurate information about ATES technology and its benefits
- Help with fleet management questions, tire safety, maintenance advice
- Connect users with appropriate team members when needed
- When asked about your creator/designer, say: "I was designed by Wick Automation LLP to help users with fleet and tire technology solutions"
- Keep responses concise but informative
- Use emojis sparingly and appropriately
- Always maintain a positive, solution-oriented tone

RESPONSE GUIDELINES:
- Start with greeting if it's the first interaction
- Ask clarifying questions when needed
- Provide actionable advice when possible
- For sales inquiries, direct to Shubham at shubham@wick.co.in
- For technical questions, mention our CTO Rahul Kumar Sapaha
- For design-related queries, reference our CDO Tushar
- End with an offer to help further if appropriate
- Stay focused on fleet, tire, and vehicle safety topics`,

    initialGreeting: "👋 Hi! I'm Wick AI, your intelligent assistant for all things fleet management and tire technology. I'm here to help you with any questions about ATES, tire safety, or fleet optimization. What can I assist you with today?",

    fallbackResponse: "I'd be happy to help you with that! Could you please provide more details about your fleet management or tire technology question? I'm here to assist with ATES systems, tire safety, and fleet optimization.",

    // Fallback responses for common questions when API is unavailable
    offlineResponses: {
      "what is ates": "ATES (Automatic Tyre Equalisation System) is Wick's revolutionary technology that automatically monitors and adjusts tire pressure in real-time, improving safety, fuel efficiency, and tire longevity for commercial vehicles.",
      "tire pressure": "Proper tire pressure is crucial for commercial vehicles. ATES maintains optimal pressure automatically, reducing accidents by 25% and improving fuel efficiency by 15%.",
      "fleet management": "Fleet management with ATES includes real-time monitoring, predictive maintenance, and comprehensive analytics to optimize your commercial vehicle operations.",
      "contact": "You can reach our team: Shubham (Co-founder & Sales) at shubham@wick.co.in, Vinamra Bajaj (Founder) at vinamra@wick.co.in, Atirav Gupta (Co-founder) at atirav@lauls.in, or call +91 9721601500.",
      "founder": "Wick was founded by Vinamra Bajaj (Founder), Atirav Gupta (Co-founder), and Shubham (Co-founder). Our leadership includes Rahul Kumar Sapaha (CTO) and Tushar (CDO).",
      "sales": "For sales inquiries, please contact Shubham at shubham@wick.co.in. He's our co-founder and handles all sales-related matters.",
      "technical": "For technical questions, you can reach our CTO Rahul Kumar Sapaha or contact our R&D team. We have dedicated software engineers and data analysts ready to help.",
      "team": "Our team includes founders Vinamra Bajaj, Atirav Gupta, and Shubham, along with CTO Rahul Kumar Sapaha, CDO Tushar, and our dedicated R&D team of senior designers, data analysts, and software engineers.",
      "default": "I'm currently in offline mode, but I can still help with basic questions about ATES, tire technology, and fleet management. For specific inquiries, contact our team directly. Please try again later for full AI assistance."
    }
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/wick-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context: wickAIRules.systemPrompt
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', response.status, errorData);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.response) {
        console.warn('No response in API data:', data);
        throw new Error('No response from AI');
      }

      return data.response;
    } catch (error) {
      console.error('Wick AI Error:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const aiResponse = await generateResponse(inputValue);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment or contact our team directly at office@wick.co.in",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          data-wick-ai-toggle
          className="bg-red-500 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 relative group"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulsing ring effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-red-500 rounded-full -z-10"
        />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Wick AI</h3>
                    <p className="text-xs text-black font-medium">Fleet & Tire Intelligence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${
                        message.isUser
                          ? 'bg-primary-500 text-black rounded-br-sm'
                          : 'bg-white text-black rounded-bl-sm shadow-sm border border-gray-200'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Creative Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm border border-gray-200 max-w-[200px]">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: 0
                          }}
                          className="w-2 h-2 bg-red-500 rounded-full"
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: 0.3
                          }}
                          className="w-2 h-2 bg-red-500 rounded-full"
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: 0.6
                          }}
                          className="w-2 h-2 bg-red-500 rounded-full"
                        />
                      </div>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-xs text-black font-medium"
                      >
                        Thinking...
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about fleet management, tires, or ATES..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-black placeholder-gray-600 bg-white font-medium"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WickAI;
