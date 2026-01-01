"use client"

import { cn } from "@/lib/utils"
import { ChevronRight, Book, Zap, Shield, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface DocsSidebarProps {
  activeTopic: string
  setActiveTopic: (topic: string) => void
  isOpen: boolean
  onClose: () => void
}

const topics = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: Shield,
  },
  {
    id: "user",
    title: "User & Login",
    icon: User,
  },
  {
    id: "teams",
    title: "Teams",
    icon: Users,
  },
]

export function DocsSidebar({ activeTopic, setActiveTopic, isOpen, onClose }: DocsSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card transition-transform duration-200 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="text-sm font-semibold">Navigation</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <div className="mb-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Documentation
                </h4>
              </div>
              {topics.map((topic) => {
                const Icon = topic.icon
                return (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setActiveTopic(topic.id)
                      onClose()
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      activeTopic === topic.id
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{topic.title}</span>
                    {activeTopic === topic.id && <ChevronRight className="h-4 w-4 shrink-0" />}
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <p className="text-xs text-muted-foreground">Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  )
}
