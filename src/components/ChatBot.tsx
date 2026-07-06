"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { MessageCircle, X, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import EligibilityChecker from "./EligibilityChecker"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatBotProps {
  currentService?: string
}

export default function ChatBot({ currentService }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: currentService 
        ? `Hello! I see you're viewing ${currentService}. How can I assist you today?`
        : "Hello! Welcome to Kite International Services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (currentService && isOpen) {
      addBotMessage(`You are currently viewing: ${currentService}`)
    }
  }, [currentService, isOpen])

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    addUserMessage(userMessage)
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(userMessage.toLowerCase())
      addBotMessage(response)
    }, 500)
  }

  const getBotResponse = (message: string): string => {
    // Eligibility check
    if (message.includes("eligib") || message.includes("qualify") || message.includes("check")) {
      return "I can help you check your eligibility for our services! Click the 'Check Your Eligibility' button below to get started."
    }

    // Service inquiries
    if (message.includes("education") || message.includes("loan")) {
      return "We offer education loans with competitive rates and flexible repayment options. Would you like to check your eligibility or visit the Education Loan page?"
    }

    if (message.includes("money transfer") || message.includes("transfer")) {
      return "Our money transfer service offers safe and secure international transfers with low fees. Would you like more information?"
    }

    if (message.includes("forex") || message.includes("currency")) {
      return "We provide the best forex rates for students with transparent pricing. Would you like to check current rates?"
    }

    if (message.includes("accommodation") || message.includes("housing")) {
      return "We can help you find verified student accommodation near your university. Would you like to explore options?"
    }

    if (message.includes("health") || message.includes("insurance")) {
      return "We offer comprehensive health insurance coverage for international students. Would you like to learn more?"
    }

    if (message.includes("student id") || message.includes("identity card")) {
      return "Get an international student identity card with exclusive discounts worldwide. Interested?"
    }

    if (message.includes("sim") || message.includes("phone")) {
      return "Stay connected with our affordable international SIM cards. Would you like to see available plans?"
    }

    // Current service info
    if (message.includes("current") || message.includes("viewing") || message.includes("page")) {
      return currentService 
        ? `You are currently viewing: ${currentService}. Would you like to check your eligibility for this service?`
        : "You are on the homepage. Browse our services or check your eligibility for multiple services at once!"
    }

    // Services list
    if (message.includes("services") || message.includes("offer") || message.includes("help with")) {
      return "We offer: Education Loans, Money Transfer, Forex, Accommodation, Health Insurance, Student ID Cards, and SIM Cards. Which service interests you?"
    }

    // Contact
    if (message.includes("contact") || message.includes("support") || message.includes("help")) {
      return "You can reach our support team through the enquiry forms on each service page, or check your eligibility to get personalized assistance!"
    }

    // Default response
    return "Thank you for your message! I can help you with information about our services or check your eligibility. What would you like to know?"
  }

  const quickActions = [
    { label: "Check Eligibility", action: () => setShowEligibilityChecker(true), icon: CheckCircle },
    { label: "View All Services", action: () => addBotMessage("We offer Education Loans, Money Transfer, Forex, Accommodation, Health Insurance, Student ID Cards, and SIM Cards. Which one interests you?") },
    { label: "Current Service", action: () => addBotMessage(currentService ? `You are viewing: ${currentService}` : "You are on the homepage.") },
  ]

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            size="lg"
            className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-[350px] md:w-[400px] h-[500px] shadow-2xl flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg font-semibold">Chat Assistant</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-primary-foreground hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-4 space-y-4 overflow-hidden">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="space-y-2 border-t pt-3">
                <p className="text-xs text-muted-foreground font-medium">Quick Actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs"
                    >
                      {action.icon && <action.icon className="h-3 w-3 mr-1" />}
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="flex gap-2 border-t pt-3">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Eligibility Checker Dialog */}
      <EligibilityChecker
        open={showEligibilityChecker}
        onOpenChange={setShowEligibilityChecker}
        currentService={currentService}
      />
    </>
  )
}
